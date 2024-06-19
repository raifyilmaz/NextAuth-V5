"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { signIn } from "@/auth";
import { oauthGithub } from "@/actions/oauth";

export function Social() {
  const onSubmit = () => {
    oauthGithub();
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <form className="w-full" action={onSubmit}>
        <Button
          size={"lg"}
          className="w-full"
          variant={"outline"}
          onClick={() => {}}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
      </form>

      {/* <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
      </Button> */}
      {/* <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => {}}
        >
        <FaGithub className="h-5 w-5" />
        </Button> */}
      <form className='w-full' action={onSubmit}>
        <Button
          size={"lg"}
          className="w-full"
          variant={"outline"}
          onClick={() => {}}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
