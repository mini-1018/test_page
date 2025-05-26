import "@app/globals.css";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 0,
  maximumScale: 10,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.coda230.com"
      : "http://localhost:3000"
  ),
  title: "코다(CODA)",
  description:
    "코다(CODA)의 무인회수기로 재활용을 더 쉽게, RFID 기술 기반 음식물종량기로 폐기물을 스마트하게 관리하세요. 개인, 기업, 공공기관 모두를 위한 맞춤형 친환경 파트너로 지속가능한 미래를 함께 만들어갑니다.",
  keywords: [
    "지테크",
    "코다",
    "CODA",
    "재활용",
    "친환경",
    "무인회수기",
    "음식물종량기",
    "RFID",
  ],
  authors: [{ name: "코다(CODA)" }],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "6KrZp8tAMDkIWHQuVwKpltkNFDRpmi3cZ2LVIK_ByhU",
    other: {
      "naver-site-verification": [
        "a7dfba88aff5fe7871bcf970ffd8a4ea114748fe",
        "9ab58b7a394cd99850b14ac9b10192e8cb433cfd",
      ],
    },
  },
  alternates: {
    canonical: "https://www.coda230.com/",
  },
  openGraph: {
    title: "코다(CODA)",
    description:
      "코다(CODA)의 무인회수기로 재활용을 더 쉽게, RFID 기술 기반 음식물종량기로 폐기물을 스마트하게 관리하세요. 개인, 기업, 공공기관 모두를 위한 맞춤형 친환경 파트너로 지속가능한 미래를 함께 만들어갑니다.",
    url: "https://www.coda230.com/",
    siteName: "코다(CODA)",
    images: [
      {
        url: "/img/favicon/facebook-thumbnail_CODA.bmp",
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
    title: "코다(CODA)",
    description:
      "코다(CODA)의 무인회수기로 재활용을 더 쉽게, RFID 기술 기반 음식물종량기로 폐기물을 스마트하게 관리하세요. 개인, 기업, 공공기관 모두를 위한 맞춤형 친환경 파트너로 지속가능한 미래를 함께 만들어갑니다.",
    images: ["/img/favicon/facebook-thumbnail_CODA.bmp"],
  },
  icons: {
    icon: [
      {
        url: "/img/favicon/FAVICON_16.webp",
        sizes: "16x16",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_32.webp",
        sizes: "32x32",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_96.webp",
        sizes: "96x96",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
    ],
    apple: [
      {
        url: "/img/favicon/FAVICON_57.webp",
        sizes: "57x57",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_60.webp",
        sizes: "60x60",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_72.webp",
        sizes: "72x72",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_76.webp",
        sizes: "76x76",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_114.webp",
        sizes: "114x114",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_120.webp",
        sizes: "120x120",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_144.webp",
        sizes: "144x144",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_152.webp",
        sizes: "152x152",
        type: "image/webp",
      },
      {
        url: "/img/favicon/FAVICON_180.webp",
        sizes: "180x180",
        type: "image/webp",
      },
    ],
  },
  manifest: "/img/favicon/manifest.json",
  other: {
    "format-detection": "telephone=no",
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/img/favicon/FAVICON_96.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
