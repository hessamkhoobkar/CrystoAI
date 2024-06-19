import type { Metadata } from "next";

import { ThemeSwitch } from "@/components/theme-select";
import AuthFormWrapper from "@/components/form/auth/auth-wrapper";

export const metadata: Metadata = {
  title: "CrystoAI | Sign Up Page",
};

export default function SignInPage() {
  return (
    <main className="flex h-full w-full flex-col justify-center">
      <div className="w-full">
        <ThemeSwitch />
      </div>

      <AuthFormWrapper />
    </main>
  );
}
