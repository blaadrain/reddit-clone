"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: React.FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google");
    } catch (error) {
      toast({
        title: "There was an error.",
        description: "Can't login with Google. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {!isLoading && <Icons.Google className="mr-2 h-4 w-4" />}Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
