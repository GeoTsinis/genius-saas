import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });
const hasClerk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export const metadata: Metadata = {
  title: 'Genius App',
  description: 'Ai Saas Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const body = (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );

  if (!hasClerk) {
    return body;
  }

  return <ClerkProvider>{body}</ClerkProvider>;
}
