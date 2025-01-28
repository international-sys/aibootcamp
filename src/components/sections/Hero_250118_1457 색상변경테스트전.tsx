'use client'

import { Button } from "@/components/ui/button"
import Container from "@/components/shared/Container"
import { motion } from "framer-motion"
import { Check } from 'lucide-react'

export default function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#111827]/5">
      <Container className="py-20">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-sm mb-8">
              2024년 1기 모집 중 | 선착순 30명
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              AI 기술과 비즈니스를<br />
              모두 잡는{' '}
              <span className="text-blue-600">
                창업 부트캠프
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-12"
            >
              현직 AI 전문가와 함께 4주 만에 서비스 출시부터<br />
              실제 매출 창출까지, 당신의 창업을 현실로 만듭니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mx-auto mb-8">
                {[
                  'AI 서비스 기획부터 개발까지',
                  '실전 창업 프로세스 가이드',
                  '투자 유치 전략 멘토링'
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
                <Button 
                  className="h-12 px-8 w-full sm:w-auto font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300"
                >
                  무료 오리엔테이션 신청하기
                </Button>
                <Button 
                  variant="outline"
                  className="h-12 px-8 w-full sm:w-auto font-medium border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
                >
                  커리큘럼 자세히 보기
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

