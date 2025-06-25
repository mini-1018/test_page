import "@app/globals.css";
import NaverAnalytics from "@shared/metaData/NaverAnalytics";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
        <NaverAnalytics />
      </body>
    </html>
  );
}
