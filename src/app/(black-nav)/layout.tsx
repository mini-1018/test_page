import "@app/globals.css";
import BlackNav from "@shared/components/nav/BlackNav";
import Footer from "@shared/components/common/Footer";
import MobileNav from "@shared/components/nav/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlackNav />
      <MobileNav />
      {children}
      <Footer />
    </>
  );
}
