
import MainHeader from "@/components/layout/MainHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <MainHeader />
      <div className="pt-[80px]">
        {children}
      </div>
    </div>
  );
}
