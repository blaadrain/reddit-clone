import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/button";
import { getUserSession } from "@/lib/auth";
import UserMenu from "./UserMenu";

const Navbar = async () => {
  const session = await getUserSession();

  return (
    <div className="fixed inset-x-0 top-0 z-10 h-fit border-b border-zinc-300 bg-zinc-100 py-2">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Icons.Logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="font-md hidden text-xl lowercase text-zinc-700 md:block">
            breadit
          </p>
        </Link>

        {/* <SearchBar /> */}

        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
