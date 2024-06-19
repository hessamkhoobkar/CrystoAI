import ChatDemo from "@/components/layout/auth/chat-demo";

interface AuthSidebarProps {
  title: string;
  description: string;
}

export default function AuthSidebar({ title, description }: AuthSidebarProps) {
  return (
    <div className="flex w-1/2 max-w-lg flex-col gap-4 p-4">
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <p className="text-5xl font-bold">{title}</p>
        <p>{description}</p>
      </div>
      <div className="w-full grow">
        <ChatDemo />
      </div>
    </div>
  );
}
