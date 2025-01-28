'use client'

import Container from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-indigo-600 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <Container className="px-4 sm:px-6">
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              지금 바로 시작하세요
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
              AI와 노코드로 비즈니스를 혁신하세요. 4주 만에 자동화된 시스템을 구축하고, 
              실제 매출을 만들어내는 방법을 알려드립니다.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4"
            >
              <Button 
                className="w-full sm:w-auto h-12 px-6 sm:px-8 font-medium bg-white text-indigo-600 hover:bg-white/90 rounded-full transition-all duration-300 text-sm sm:text-base shadow-lg shadow-indigo-900/20"
              >
                무료 신청하기
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:w-auto h-12 px-6 sm:px-8 font-medium border-2 border-white text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
              >
                커리큘럼 보기
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
