import { notFound } from "next/navigation";
import { Metadata, Viewport } from "next";
import metaData from "@shared/metaData/metaData";
import NaverAnalytics from "@shared/metaData/NaverAnalytics";
import { Translation } from "@src/types/translation.type";

const title = metaData.home.title;
const description = metaData.home.description;
const canonical = metaData.home.canonical;
const keywords = metaData.home.keywords;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 0,
  maximumScale: 10,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "production" ? "https://www.coda.ai.kr" : "http://localhost:3000"),
  title,
  description,
  keywords,
  authors: [{ name: "코다(CODA)" }],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "6KrZp8tAMDkIWHQuVwKpltkNFDRpmi3cZ2LVIK_ByhU",
    other: {
      "naver-site-verification": ["a7dfba88aff5fe7871bcf970ffd8a4ea114748fe", "9ab58b7a394cd99850b14ac9b10192e8cb433cfd"],
    },
  },
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "코다(CODA)",
    images: [
      {
        url: "/images/brand/coda_brand_s1.webp",
        width: 1200,
        height: 630,
        alt: "코다(CODA)",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/brand/coda_brand_s1.webp"],
  },
  icons: {
    icon: [
      {
        url: "/images/favicon/FAVICON_16.webp",
        sizes: "16x16",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_32.webp",
        sizes: "32x32",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_96.webp",
        sizes: "96x96",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
    ],
    apple: [
      {
        url: "/images/favicon/FAVICON_57.webp",
        sizes: "57x57",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_60.webp",
        sizes: "60x60",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_72.webp",
        sizes: "72x72",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_76.webp",
        sizes: "76x76",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_114.webp",
        sizes: "114x114",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_120.webp",
        sizes: "120x120",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_144.webp",
        sizes: "144x144",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_152.webp",
        sizes: "152x152",
        type: "image/webp",
      },
      {
        url: "/images/favicon/FAVICON_180.webp",
        sizes: "180x180",
        type: "image/webp",
      },
    ],
  },
  manifest: "/images/favicon/manifest.json",
  other: {
    "format-detection": "telephone=no",
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/images/favicon/FAVICON_96.webp",
  },
};

const locales = ["ko", "en"];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <>
      <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
        <head>
          <link rel="alternate" hrefLang="ko" href="/ko" />
          <link rel="alternate" hrefLang="en" href="/en" />
          <link rel="alternate" hrefLang="x-default" href="/ko" />
        </head>
        <body suppressHydrationWarning>
          {children}
          <NaverAnalytics />
        </body>
      </html>
    </>
  );
}
