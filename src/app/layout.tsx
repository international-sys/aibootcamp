import Header from "@/components/shared/Header"
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from 'sonner'
import { ChannelTalk } from "@/components/shared/ChannelTalk"

const inter = Inter({ subsets: ["latin"] })

// GA Measurement ID를 환경변수에서 가져옴
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const metadata: Metadata = {
  title: "AI 노코드 웨비나 | 2시간 만에 완성하는 자동화 시스템",
  description: "AI와 노코드로 만드는 자동화된 웨비나 등록 시스템. 2시간 만에 완성하는 구글 시트 기반 CRM, 자동 이메일 발송, 수강생 관리 자동화까지!",
  keywords: ["AI", "노코드", "웨비나", "자동화", "CRM", "업무 효율", "구글 시트"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        <Header />
        {children}
        <Toaster position="top-center" />
        <ChannelTalk />
      </body>
    </html>
  )
}
