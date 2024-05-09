"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { SubredditPayload } from "@/lib/validators/subreddit";
import { toast } from "@/hooks/use-toast";

const CreateCommunityPage = () => {
  const router = useRouter();
  const [communityName, setCommunityName] = useState("");

  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: SubredditPayload = {
        name: communityName,
      };
      const { data } = await axios.post("/api/subreddit", payload);
      return data as string;
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          return toast({
            title: "Login required.",
            description: "You need to be logged in to do that.",
            variant: "destructive",
          });
        }
        if (error.response?.status === 409) {
          return toast({
            title: "Subreddit with such name already exists.",
            description: "Please choose a different name.",
            variant: "destructive",
          });
        }
        if (error.response?.status === 422) {
          return toast({
            title: "Invalid subreddit name.",
            description: "Please choose a different name.",
            variant: "destructive",
          });
        }
      }

      return toast({
        title: "There was an error.",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
    onSuccess: (subredditName) => {
      router.push(`/r/${subredditName}`);
    },
  });

  return (
    <div className="container mx-auto flex h-full max-w-3xl items-center">
      <div className="relative h-fit w-full space-y-4 rounded-lg bg-white p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Create a community</h1>
        </div>

        <hr className="h-px bg-zinc-500" />

        <div>
          <p className="text-lg font-medium">Name</p>
          <p className="pb-2 text-xs">
            Community names including capitalization cannot be changed.
          </p>

          <div className="relative">
            <p className="absolute inset-y-0 left-0 grid w-8 place-items-center text-sm text-zinc-400">
              r/
            </p>
            <Input
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              className="pl-5"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="ghost" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            disabled={communityName.length < 3 || communityName.length > 21}
            onClick={() => createCommunity()}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunityPage;
