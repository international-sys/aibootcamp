'use client'

import Container from "@/components/shared/Container"
import { motion } from "framer-motion"
import Image from "next/image"

export default function WebinarInfo() {
  return (
    <section id="curriculum" className="relative py-16 sm:py-20 bg-white">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-t from-blue-50/50 to-transparent rounded-full blur-3xl" />
      </div>

      <Container className="px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            웨비나 커리큘럼
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            {/* 1일차 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* 1일차 이미지 */}
              <div className="w-full h-40 sm:h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/webinar/image1.png"
                  alt="AI 기초"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-4">1일차: AI 노코드 기초</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="font-semibold text-sm sm:text-base whitespace-nowrap text-gray-900">09:00 - 10:30</span>
                    <div>
                      <p className="font-medium text-sm sm:text-base text-gray-900">AI 도구 소개와 환경 설정</p>
                      <p className="text-gray-600 text-sm">주요 AI 도구 소개 및 실습 환경 구축</p>
                    </div>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="font-semibold text-sm sm:text-base whitespace-nowrap text-gray-900">10:45 - 12:00</span>
                    <div>
                      <p className="font-medium text-sm sm:text-base text-gray-900">노코드 플랫폼 기초</p>
                      <p className="text-gray-600 text-sm">주요 노코드 도구 소개 및 기본 사용법</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 2일차 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* 2일차 이미지 */}
              <div className="w-full h-40 sm:h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/webinar/image2.png"
                  alt="자동화 시스템"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-4">2일차: 자동화 시스템 구축</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="font-semibold text-sm sm:text-base whitespace-nowrap text-gray-900">09:00 - 10:30</span>
                    <div>
                      <p className="font-medium text-sm sm:text-base text-gray-900">데이터 자동화 구축</p>
                      <p className="text-gray-600 text-sm">구글 시트 연동 및 데이터 자동화</p>
                    </div>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="font-semibold text-sm sm:text-base whitespace-nowrap text-gray-900">10:45 - 12:00</span>
                    <div>
                      <p className="font-medium text-sm sm:text-base text-gray-900">이메일 자동화</p>
                      <p className="text-gray-600 text-sm">자동 응답 및 알림 시스템 구축</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* 참여 혜택 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 sm:mt-12 bg-indigo-50/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-indigo-100"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6">참여 시 제공되는 혜택</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-gray-600">실습용 템플릿 제공</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-gray-600">온라인 커뮤니티 1년 무료 이용권</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-gray-600">수료증 발급</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
