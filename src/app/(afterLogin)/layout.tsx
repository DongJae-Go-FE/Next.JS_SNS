export default async function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      에프터로그인레이아웃
      {children}
    </div>
  );
}
