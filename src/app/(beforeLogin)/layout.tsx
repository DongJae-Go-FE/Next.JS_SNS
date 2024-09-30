type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <div className="w-full h-full">
      {children}
      {modal}
    </div>
  );
}
