"use client";

import SignIn from "@/components/SignIn";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const AuthModal = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-10 bg-zinc-900/20">
      <div className="container mx-auto flex h-full max-w-lg items-center">
        <div className="relative h-fit w-full rounded-lg bg-white px-2 py-10">
          <div className="absolute right-4 top-4">
            <Button
              onClick={() => router.back()}
              variant="ghost"
              className="rounded-medium h-8 w-8 p-0"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
