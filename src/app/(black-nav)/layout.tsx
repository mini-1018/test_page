import "@app/globals.css";
import BlackNav from "@shared/components/BlackNav";
import Footer from "@shared/components/Footer";
import MobileNav from "@shared/components/MobileNav";

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
