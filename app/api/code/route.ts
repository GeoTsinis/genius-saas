import { NextResponse } from 'next/server';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';
import { canCallLiveAI, demoChatReply, isDemoMode } from '@/lib/demo-mode';

const instructionMessage: ChatCompletionRequestMessage = {
  role: 'system',
  content:
    'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.',
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const lastUser = [...messages]
      .reverse()
      .find((m: { role?: string }) => m?.role === 'user');
    const userText = typeof lastUser?.content === 'string' ? lastUser.content : '';

    if (!canCallLiveAI()) {
      return NextResponse.json(demoChatReply(userText, 'code'));
    }

    let userId: string | null = null;
    try {
      const { auth } = await import('@clerk/nextjs');
      userId = auth().userId;
    } catch {
      userId = null;
    }

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log('[CODE_ERROR]', error);
    if (isDemoMode()) {
      return NextResponse.json(demoChatReply('', 'code'));
    }
    return new NextResponse('Internal error', { status: 500 });
  }
}
