"use client";
import React from "react";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  };

  if (mode === "modal") {
    return (
      <span className="bg-white border-1 border-black text-blue-400 p-3 rounded-md">
        TODO: Implement modal
      </span>
    );
  }

  return (
    <>
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
    </>
  );
}
