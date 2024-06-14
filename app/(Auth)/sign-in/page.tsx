import { TempThemeToggle } from "@/components/tempthemetoggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In page",
  description: "CrystoAI theme",
};

export default function SignInPage() {
  return (
    <main className="">
      <h1>This is Sign in</h1>
      <p>Welcom back</p>
      <TempThemeToggle />
    </main>
  );
}
