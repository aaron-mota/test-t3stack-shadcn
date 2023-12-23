import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {}

export function AvatarUser({}: Props) {
  const user = {
    name: "Dr. John Doe",
    hrefProfile: "https://gravatar.com/avatar/hash",
  };

  return (
    <>
      <Avatar className="mr-1 h-6 w-6">
        <AvatarImage src={user?.hrefProfile ?? ""} />
        <AvatarFallback>{user.name?.slice(0, 1) ?? ""}</AvatarFallback>
      </Avatar>
    </>
  );
}
