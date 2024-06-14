import { TempThemeToggle } from "@/components/tempthemetoggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page",
  description: "CrystoAI theme",
};

export default function SignUpPage() {
  return (
    <main className="">
      <h1>This is Sign Up</h1>
      <p>Welcom back</p>
      <TempThemeToggle />
    </main>
  );
}
