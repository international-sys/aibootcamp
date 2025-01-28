import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/shared/Header"
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI 노코드 컨설팅 | AI 부트캠프",
  description: "현직 AI 전문가와 함께하는 4주 완성 AI 노코드 부트캠프. 서비스 출시부터 실제 매출 창출까지, 당신의 창업을 현실로 만듭니다.",
  keywords: [
    "AI 부트캠프",
    "노코드",
    "AI 컨설팅",
    "창업",
    "웨비나",
    "AI 자동화",
    "비즈니스 자동화",
    "온라인 교육",
    "디지털 전환",
    "스타트업"
  ],
  authors: [{ name: "AI 부트캠프" }],
  creator: "AI 부트캠프",
  publisher: "AI 부트캠프",
  formatDetection: {
    telephone: true,
    date: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "AI 노코드 컨설팅 | AI 부트캠프",
    description: "현직 AI 전문가와 함께하는 4주 완성 AI 노코드 부트캠프. 서비스 출시부터 실제 매출 창출까지, 당신의 창업을 현실로 만듭니다.",
    url: "https://aibootcamp.kr",
    siteName: "AI 부트캠프",
    images: [
      {
        url: "/katalk image.png",
        width: 800,
        height: 400,
        alt: "AI 부트캠프 웨비나",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 노코드 컨설팅 | AI 부트캠프",
    description: "현직 AI 전문가와 함께하는 4주 완성 AI 노코드 부트캠프. 서비스 출시부터 실제 매출 창출까지, 당신의 창업을 현실로 만듭니다.",
    images: ["/katalk image.png"],
    creator: "@aibootcamp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console 코드
  },
  category: "education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
