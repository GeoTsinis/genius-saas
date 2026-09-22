/**
 * Portfolio demo safety switches.
 * Live OpenAI is OFF unless ALLOW_LIVE_AI=true is set in Vercel.
 * This prevents surprise OpenAI bills on public demo URLs.
 */
export const isDemoMode = () => process.env.ALLOW_LIVE_AI !== 'true';

export const hasOpenAI = () => Boolean(process.env.OPENAI_API_KEY);

export const canCallLiveAI = () => !isDemoMode() && hasOpenAI();

export function demoChatReply(userText: string, kind: 'conversation' | 'code') {
  const prompt = (userText || '').trim().slice(0, 280);

  if (kind === 'code') {
    return {
      role: 'assistant' as const,
      content: [
        '```ts',
        '// Demo response — live OpenAI is disabled on this portfolio deploy.',
        `// You asked: ${prompt || 'generate some code'}`,
        'export function greet(name: string) {',
        '  return `Hello, ${name}!`;',
        '}',
        '```',
        '',
        '_Set `ALLOW_LIVE_AI=true` and `OPENAI_API_KEY` on the server to enable real generations._',
      ].join('\n'),
    };
  }

  return {
    role: 'assistant' as const,
    content: [
      'This is a **safe demo reply** — no OpenAI call was made, so nothing is billed.',
      '',
      prompt
        ? `You said: “${prompt}”. In a live deploy with keys + ALLOW_LIVE_AI, Genius would answer with GPT here.`
        : 'Ask anything to see how the chat UI feels.',
      '',
      'Tip: keep API keys only in server env vars (never `NEXT_PUBLIC_` / `REACT_APP_`).',
    ].join('\n'),
  };
}
