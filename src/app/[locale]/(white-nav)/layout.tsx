import "@app/globals.css";
import Footer from "@shared/components/common/Footer";
import WhiteNav from "@shared/components/nav/WhiteNav";
import MobileNav from "@shared/components/nav/MobileNav";
import { Toaster } from "sonner";

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
      <Toaster position="top-center" richColors />
    </>
  );
}
