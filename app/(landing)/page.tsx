import Link from 'next/link';
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Sparkles,
  VideoIcon,
} from 'lucide-react';

const features = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-600',
    bg: 'bg-pink-600/10',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-600',
    bg: 'bg-orange-600/10',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-600',
    bg: 'bg-green-600/10',
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 font-bold tracking-tight">
          <Sparkles className="h-5 w-5 text-violet-400" />
          Genius
        </div>
        <Link
          href="/dashboard"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Open dashboard
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-violet-300">
          AI SaaS demo
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          The smartest AI toolkit for creators and builders
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Explore conversation, image, video, music, and code generation in one
          dashboard. This portfolio deploy runs in demo mode without auth keys.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur"
            >
              <div className={`mb-3 w-fit rounded-lg p-2 ${feature.bg}`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h2 className="text-lg font-semibold">{feature.label}</h2>
              <p className="mt-1 text-sm text-slate-400">
                Demo route available from the dashboard.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
