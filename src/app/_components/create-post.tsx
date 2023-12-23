"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";
import { Button, Input } from "@/components";

export function CreatePost() {
  const router = useRouter();
  const [name, setName] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name });
      }}
      className="flex flex-col gap-2"
    >
      <Input
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="default" type="submit" disabled={createPost.isLoading}>
        {createPost.isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
