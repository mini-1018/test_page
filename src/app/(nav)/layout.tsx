import "@app/globals.css";
import Footer from "@shared/components/Footer";
import Nav from "@shared/components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
