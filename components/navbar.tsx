import { UserButton } from '@clerk/nextjs';

import MobileSidebar from '@/components/mobile-sidebar';

const hasClerk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full items-center justify-end gap-3">
        {!hasClerk && (
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
            Demo mode
          </span>
        )}
        {hasClerk ? <UserButton afterSignOutUrl="/" /> : null}
      </div>
    </div>
  );
};

export default Navbar;
