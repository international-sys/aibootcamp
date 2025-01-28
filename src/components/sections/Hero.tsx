'use client'

import { Button } from "@/components/ui/button"
import Container from "@/components/shared/Container"
import { motion } from "framer-motion"

export default function ModernHero() {
  const handleClick = (href: string) => {
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
    <section className="relative min-h-[800px] flex items-center justify-center bg-gradient-to-b from-black/70 to-black/50 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <iframe
          className="absolute w-full h-full scale-150 -z-10"
          src="https://www.youtube.com/embed/_aQl2q3jpVs?autoplay=1&loop=1&controls=0&mute=1&playlist=_aQl2q3jpVs"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ 
            pointerEvents: 'none',
            border: 'none'
          }}
        />
      </div>

      <Container className="px-4 md:px-6 relative z-20">
        <div className="relative max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight text-white px-4 sm:px-0 drop-shadow-lg">
              AI 기술과 비즈니스를 모두 잡는{' '}
              <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                창업 부트캠프
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed px-4 sm:px-0 drop-shadow-md"
            >
              현직 AI 전문가와 함께 4주 만에 서비스 출시부터 실제 매출 창출까지
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center px-4 sm:px-0"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Button 
                  onClick={() => handleClick('#registration')}
                  className="h-12 px-6 sm:px-8 font-medium bg-white hover:bg-gray-100 text-indigo-600 rounded-full transition-all duration-300 shadow-sm shadow-black/20 text-sm sm:text-base"
                >
                  무료 신청하기
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleClick('#curriculum')}
                  className="h-12 px-6 sm:px-8 font-medium border-white/30 text-white hover:bg-white/10 hover:border-white/40 rounded-full transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                >
                  커리큘럼 보기
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

