import "@app/globals.css";
import Footer from "@shared/components/Footer";
import Nav from "@shared/components/BlackNav";
import WhiteNav from "@shared/components/WhiteNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WhiteNav />
      {children}
      <Footer />
    </>
  );
}
