'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const hasClerk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

function DemoUserAvatar() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  );
}

function ClerkUserAvatar() {
  const { useUser } = require('@clerk/nextjs');
  const { user } = useUser();

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
}

export const UserAvatar = () => {
  if (!hasClerk) return <DemoUserAvatar />;
  return <ClerkUserAvatar />;
};
