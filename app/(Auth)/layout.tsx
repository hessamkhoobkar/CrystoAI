export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex p-4 h-screen w-screen">
      <div className="max-w-lg w-1/2 p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          tenetur dignissimos repudiandae vero quibusdam vitae ut eum quas
          veniam. Nostrum, blanditiis! Repudiandae quo, quasi a perferendis
          aspernatur labore nesciunt natus!
        </p>
      </div>
      <div className="grow p-4 bg-card rounded-2xl">{children}</div>
    </div>
  );
}
