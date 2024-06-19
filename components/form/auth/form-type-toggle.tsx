"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface FormTypeToggleProps {
  className?: string;
}

export default function FormTypeToggle({
  className,
  ...props
}: FormTypeToggleProps) {
  const pathname = usePathname();

  return (
    <div
      className={`flex gap-4 rounded-2xl bg-background p-2 ${className ? ` ${className}` : ""}`}
      {...props}
    >
      <Link
        href="/sign-in"
        className={`flex h-11 w-1/2 items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 ease-in-out ${pathname === "/sign-in" ? "bg-card text-card-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
      >
        Sign in
      </Link>
      <Link
        href="/sign-up"
        className={`flex h-11 w-1/2 items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 ease-in-out ${pathname === "/sign-up" ? "bg-card text-card-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
      >
        Create account
      </Link>
    </div>
  );
}
