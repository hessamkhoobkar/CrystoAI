import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/assets/icons/googleIcon";
import { AppleIcon } from "@/assets/icons/appleIcon";

export default function OAuthButtons() {
  return (
    <div className="flex flex-col gap-4">
      <Button size="lg" variant="outline" className="w-full gap-4">
        <GoogleIcon className="h-4 w-4" />
        Continue with Google
      </Button>
      <Button size="lg" variant="outline" className="w-full gap-4">
        <AppleIcon className="h-4 w-4 fill-current" />
        Continue with Apple
      </Button>
    </div>
  );
}
