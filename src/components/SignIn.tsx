import Link from "next/link";
import { Icons } from "./Icons";
import UserAuthForm from "./UserAuthForm";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.Logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="mx-auto max-w-sm text-sm">
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy
        </p>

        <UserAuthForm className="py-2" />

        <p className="px-8 text-center text-sm text-zinc-500">
          New to Breadit?{" "}
          <Link
            href="/sign-up"
            className="text-orange-600 transition hover:text-orange-800"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
