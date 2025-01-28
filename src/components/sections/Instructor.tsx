'use client'

import Container from "@/components/shared/Container"
import { motion } from "framer-motion"

export default function Instructor() {
  return (
    <section id="instructor" className="py-16 sm:py-20 bg-gradient-to-b from-indigo-50/50 to-white">
      <Container className="px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">강사 소개</h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              {/* 프로필 이미지 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-indigo-200 to-blue-100 flex-shrink-0 border-4 border-white shadow-md"
              >
                {/* 이미지 추가 예정 */}
              </motion.div>
              
              {/* 강사 정보 */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">김태호</h3>
                  <p className="text-indigo-600 font-semibold mb-4 text-sm sm:text-base">AI 노코드 컨설턴트</p>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm sm:text-base">
                      10년 이상의 IT 컨설팅 경력을 바탕으로 100개 이상의 기업에서 
                      자동화 시스템을 구축한 노코드 전문가입니다.
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900">주요 경력</h4>
                      <ul className="space-y-1 text-gray-600 text-sm sm:text-base">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          현) AI 노코드 컨설팅 대표
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          전) 네이버 클라우드 컨설턴트
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          전) 삼성SDS IT 컨설턴트
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900">전문 분야</h4>
                      <ul className="space-y-1 text-gray-600 text-sm sm:text-base">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          업무 자동화 시스템 구축
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          AI 도구 활용 및 통합
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          노코드 플랫폼 최적화
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* 배경 장식 요소 추가 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-b from-indigo-100/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-100/20 to-transparent rounded-full blur-3xl" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
