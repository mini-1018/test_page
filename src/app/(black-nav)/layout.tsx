import "@app/globals.css";
import BlackNav from "@shared/components/BlackNav";
import Footer from "@shared/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlackNav />
      {children}
      <Footer />
    </>
  );
}
