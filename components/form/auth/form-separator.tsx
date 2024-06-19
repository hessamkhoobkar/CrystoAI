import { Separator } from "@/components/ui/separator";

interface FormSeparatorProps {
  className?: string;
}

export default function FormSeparator({
  className,
  ...props
}: FormSeparatorProps) {
  return (
    <div
      className={`relative flex h-12 w-full items-center justify-center ${className ? ` ${className}` : ""}`}
      {...props}
    >
      <div className="absolute flex h-12 w-10 items-center justify-center bg-card">
        <span>or</span>
      </div>
      <Separator />
    </div>
  );
}
