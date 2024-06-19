import AuthSidebar from "@/components/layout/auth/auth-sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen p-4">
      <AuthSidebar
        title="Supercharge your creativity and productivity"
        description="Ready to dive into writing, planning, learning, and more with the help of AI?"
      />
      <div className="grow rounded-2xl bg-card p-4">{children}</div>
    </div>
  );
}
