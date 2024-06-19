'use server';

import { signIn } from "@/auth";

export const oauthGithub = async () => {
    await signIn('github', { redirectTo: "/dashboard" });
};