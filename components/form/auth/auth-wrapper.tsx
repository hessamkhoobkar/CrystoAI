import FormTypeToggle from "@/components/form/auth/form-type-toggle";
import FormSeparator from "@/components/form/auth/form-separator";
import OAuthButtons from "@/components/form/auth/oauth-buttons";
import AuthFormLogo from "@/components/form/auth/form-logo";
import SignForm from "@/components/form/auth/sign-form";

export default function AuthFormWrapper() {
  return (
    <div className="mx-auto flex h-full w-full max-w-lg flex-col justify-center">
      <AuthFormLogo className="-mt-12" />
      <FormTypeToggle className="mb-8" />
      <OAuthButtons />
      <FormSeparator className="my-4" />
      <SignForm />
    </div>
  );
}
