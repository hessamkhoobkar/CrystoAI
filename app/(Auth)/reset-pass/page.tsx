import { TempThemeToggle } from "@/components/tempthemetoggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password Page",
  description: "CrystoAI theme",
};

export default function ResetPasswordPage() {
  return (
    <main className="">
      <h1>This is Reset Password</h1>
      <p>Welcom back</p>
      <TempThemeToggle />
    </main>
  );
}
