import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/shared/Header"
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI 노코드 컨설팅 | AI 부트캠프",
  description: "현직 AI 전문가와 함께하는 4주 완성 AI 노코드 부트캠프...",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* favicon 설정들 */}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
