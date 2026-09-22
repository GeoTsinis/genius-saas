'use client';

import { Heading } from '@/components/heading';
import { ImageIcon, Music, Settings, VideoIcon } from 'lucide-react';

const tools = {
  image: {
    title: 'Image Generation',
    description: 'Demo placeholder — live image models are disabled',
    icon: ImageIcon,
    color: 'text-pink-700',
    bg: 'bg-pink-700/10',
  },
  video: {
    title: 'Video Generation',
    description: 'Demo placeholder — live video models are disabled',
    icon: VideoIcon,
    color: 'text-orange-700',
    bg: 'bg-orange-700/10',
  },
  music: {
    title: 'Music Generation',
    description: 'Demo placeholder — live music models are disabled',
    icon: Music,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  settings: {
    title: 'Settings',
    description: 'Portfolio demo — billing and keys stay on the server only',
    icon: Settings,
    color: 'text-gray-700',
    bg: 'bg-gray-700/10',
  },
} as const;

export default function DemoToolPage({
  tool,
}: {
  tool: keyof typeof tools;
}) {
  const meta = tools[tool];
  return (
    <div>
      <Heading
        title={meta.title}
        description={meta.description}
        icon={meta.icon}
        iconColor={meta.color}
        bgColor={meta.bg}
      />
      <div className="mx-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-sm text-slate-700 lg:mx-8">
        <p className="font-medium">Safe demo surface</p>
        <p className="mt-2">
          This route is intentionally offline for AI providers so visitors
          cannot trigger paid API usage. Conversation and Code use simulated
          replies only.
        </p>
      </div>
    </div>
  );
}
