import "@app/globals.css";
import Footer from "@shared/components/Footer";
import WhiteNav from "@shared/components/WhiteNav";
import MobileNav from "@shared/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WhiteNav />
      <MobileNav />
      {children}
      <Footer />
    </>
  );
}
