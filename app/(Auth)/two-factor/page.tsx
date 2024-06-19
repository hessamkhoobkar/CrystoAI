import { ThemeSwitch } from "@/components/theme-select";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Two Factor Authentication Page",
  description: "CrystoAI theme",
};

export default function TwoFactorPage() {
  return (
    <main className="">
      <h1>This is Two Factor Authentication</h1>
      <p>Welcom back</p>
      <ThemeSwitch />
    </main>
  );
}
