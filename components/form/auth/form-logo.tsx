import { CrystoAILogo } from "@/assets/icons/crystoAI";

interface AuthLogoProps {
  className?: string;
}

export default function AuthFormLogo({ className, ...props }: AuthLogoProps) {
  return (
    <div className={className} {...props}>
      <CrystoAILogo className="w-12 h-12 text-primary" />
      <h1 className="text-5xl font-black mb-6 text-primary">CrystoAI</h1>
    </div>
  );
}
