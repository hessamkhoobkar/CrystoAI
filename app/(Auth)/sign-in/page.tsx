import type { Metadata } from "next";

import { TempThemeToggle } from "@/components/tempthemetoggle";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { GoogleIcon } from "@/assets/icons/googleIcon";
import { AppleIcon } from "@/assets/icons/appleIcon";
import { CrystoAILogo } from "@/assets/icons/crystoAI";

export const metadata: Metadata = {
  title: "Sign In Page",
  description: "CrystoAI theme",
};

export default function SignInPage() {
  return (
    <main className="">
      <div>
        <TempThemeToggle />
      </div>

      <div className="w-full max-w-lg mx-auto">
        <div>
          <CrystoAILogo className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-black mb-6 text-primary">CrystoAI</h1>
        </div>

        <div className="bg-background p-2 rounded-2xl flex gap-4 mb-8">
          <Link
            href="/sign-in"
            className="bg-card text-card-foreground rounded-2xl h-11 w-1/2 flex justify-center items-center font-semibold text-sm shadow"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-2xl h-11 w-1/2 flex justify-center items-center font-semibold text-sm text-muted-foreground hover:text-foreground"
          >
            Create account
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <Button size="lg" variant="outline" className="w-full gap-4">
            <GoogleIcon className="w-4 h-4" />
            Continue with Google
          </Button>
          <Button size="lg" variant="outline" className="w-full gap-4">
            <AppleIcon className="fill-current w-4 h-4" />
            Continue with Apple
          </Button>
        </div>
        <div className="flex justify-center items-center relative h-12 w-full mb-4">
          <div className="absolute bg-card h-12 w-10 flex justify-center items-center">
            <span>or</span>
          </div>
          <Separator />
        </div>
        <form action="" method="post">
          <div className="flex flex-col gap-4">
            <Input type="email" id="email" placeholder="Email" />
            <Input type="password" id="password" placeholder="Password" />
          </div>
          <Link href="/reset-pass" className="link block w-full mt-2">
            Forgot password?
          </Link>
          <Button size="lg" className="w-full mt-6">
            Sign in
          </Button>
        </form>
      </div>
    </main>
  );
}
