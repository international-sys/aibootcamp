'use client'

import Container from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: '커리큘럼', href: '#curriculum' },
    { name: '강사진', href: '#instructor' },
    { name: '수강후기', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ]

  const handleClick = (href: string) => {
    setIsMenuOpen(false) // 모바일 메뉴 닫기
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80 // 헤더 높이
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <Container className="px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* 로고 부분 수정 */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src="/logo.svg"
              alt="AI 부트캠프 로고"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
              AI 부트캠프
            </span>
          </a>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(item.href)
                }}
                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 데스크탑 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => handleClick('#curriculum')}
              className="h-10 px-6 font-medium border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-indigo-100 hover:text-indigo-600 rounded-full"
            >
              커리큘럼 보기
            </Button>
            <Button 
              onClick={() => handleClick('#registration')}
              className="h-10 px-6 font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 shadow-sm shadow-indigo-200"
            >
              신청하기
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            <nav className="flex flex-col space-y-4 px-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(item.href)
                  }}
                  className="text-sm text-gray-600 hover:text-indigo-600 transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="outline"
                  onClick={() => handleClick('#curriculum')}
                  className="h-10 font-medium border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-indigo-100 hover:text-indigo-600 rounded-full w-full"
                >
                  커리큘럼 보기
                </Button>
                <Button 
                  onClick={() => handleClick('#registration')}
                  className="h-10 font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 shadow-sm shadow-indigo-200 w-full"
                >
                  신청하기
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </Container>
    </motion.header>
  )
}
