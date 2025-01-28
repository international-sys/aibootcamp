'use client'

import Container from "@/components/shared/Container"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const menuLinks = [
    { name: "커리큘럼", href: "#curriculum" },
    { name: "강사진", href: "#instructor" },
    { name: "신청하기", href: "#registration" }
  ]

  return (
    <footer className="relative py-8 sm:py-10 bg-gradient-to-b from-gray-50 to-white">
      <Container className="px-4 sm:px-6">
        <div className="relative max-w-7xl mx-auto">
          {/* 상단 영역: 로고와 메뉴 */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 space-y-4 sm:space-y-0">
            {/* 로고 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Image
                src="/logo.svg"
                alt="AI 부트캠프 로고"
                width={32}
                height={32}
                className="w-auto h-6"
              />
              <span className="text-base font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                AI 부트캠프
              </span>
            </motion.div>

            {/* 메뉴 링크 */}
            <motion.nav
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-6 sm:space-x-8"
            >
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </motion.nav>
          </div>

          {/* 하단 영역: 회사 정보와 카피라이트 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-100"
          >
            {/* 회사 정보 */}
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-xs text-gray-500">
                서울특별시 강남구 테헤란로 123 · 사업자등록번호: 123-45-67890
              </p>
            </div>

            {/* 카피라이트 */}
            <p className="text-xs text-gray-500">
              © 2024 AI 부트캠프. All rights reserved.
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}
