"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// NOTICE:
// There are two different method to onginze form elements
// 1. Combining the diffrent elements of each form into one form and render elements one by one
// 2. Creating two sperate forms for each page and render the full form

// I provideing both method so you can choose which one you prefer
// This decision is based on your state management and form submission method
// Pick which one matches your needs best
// By default, I am using the first method and combining the diffrent elements of each form into one form and render elements one by one which make the call to action dynamic

// We are identifying the current url to set the form elements and action
// first let's define the actions for each page
const actions: Record<string, string> = {
  "/sign-in": "/api/auth/sign-in",
  "/sign-up": "/api/auth/sign-up",
  "/reset-pass": "/api/auth/reset-pass",
};

export default function SignForm() {
  const pathname = usePathname();

  // second identify current actoin to set form action
  const action = actions[pathname];

  // Demo and theme purpose only. You can remove this function and onSubmit from the form element and use action directly or in any other manner you want
  // I am using this function to pervent the real form submission and just log the form submission
  function perventFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("form submitted");
  }

  return (
    // we are using the action variable to set the form action dynamically
    <form
      action={action}
      method="post"
      onSubmit={(event) => perventFormSubmit(event)}
    >
      <div className="flex flex-col gap-4">
        <Input type="email" id="email" placeholder="Email" />
        <Input type="password" id="password" placeholder="Password" />
        {pathname === "/sign-up" && (
          <Input
            type="password"
            id="password-repeat"
            placeholder="Repeat Password"
          />
        )}
      </div>
      {pathname === "/sign-in" && (
        <Link href="/reset-pass" className="link mt-2 block w-full">
          Forgot password?
        </Link>
      )}

      <Button size="lg" className="mt-6 w-full">
        {pathname === "/sign-in" ? "Sign in" : "Sign up"}
      </Button>

      {pathname === "/sign-up" && (
        <p className="mt-2 text-xs text-gray-500">
          By signing up, you agree to the
          <Link
            href="#"
            className="px-1 text-xs font-bold text-foreground transition-all duration-200 ease-in-out hover:text-primary"
          >
            Terms of Use
          </Link>
          ,
          <Link
            href="#"
            className="px-1 text-xs font-bold text-foreground transition-all duration-200 ease-in-out hover:text-primary"
          >
            Privacy Notice
          </Link>
          , and
          <Link
            href="#"
            className="px-1 text-xs font-bold text-foreground transition-all duration-200 ease-in-out hover:text-primary"
          >
            Cookie Notice
          </Link>
          .
        </p>
      )}
    </form>

    // if you decide to use the second method, you can remove the first method and use this one
    // you will need the following two functions to create each form element and render upon the pathname

    // pathname === "/sign-in" ? (
    //   <SignInForm action={action} />
    // ) : (
    //   <SignUpForm action={action} />
    // )
  );
}

// // SignInForm.js

// export const SignInForm = ({ action }) => (
//   <form
//     action={action}
//     method="post"
//   >
//     <div className="flex flex-col gap-4">
//       <Input type="email" id="email" placeholder="Email" />
//       <Input type="password" id="password" placeholder="Password" />
//     </div>
//     <Link href="/reset-pass" className="link mt-2 block w-full">
//       Forgot password?
//     </Link>
//     <Button size="lg" className="mt-6 w-full">
//       Sign in
//     </Button>
//   </form>
// );

// // SignUpForm.js

// export const SignUpForm = ({ action }) => (
//   <form
//     action={action}
//     method="post"
//   >
//     <div className="flex flex-col gap-4">
//       <Input type="email" id="email" placeholder="Email" />
//       <Input type="password" id="password" placeholder="Password" />
//       <Input
//         type="password"
//         id="password-repeat"
//         placeholder="Repeat Password"
//       />
//     </div>
//     <Button size="lg" className="mt-6 w-full">
//       Sign up
//     </Button>
//     <p className="mt-2 text-xs text-gray-500">
//       By signing up, you agree to the
//       <Link
//         href="#"
//         className="px-1 text-xs font-bold text-foreground transition-all duration-200 ease-in-out hover:text-primary"
//       >
//         Terms of Use
//       </Link>
//       ,
//       <Link
//         href="#"
//         className="px-1 text-xs font-bold text-foreground transition-all duration-200 ease-in-out hover:text-primary"
//       >
//         Privacy Notice
//       </Link>
//       , and
//       <Link
//         href="#"
//         className="px-1 text-xs font-bold text-foreground transition-all duration-200 ease-in-out hover:text-primary"
//       >
//         Cookie Notice
//       </Link>
//       .
//     </p>
//   </form>
// );
