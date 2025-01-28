'use client'

import Container from "@/components/shared/Container"
import { motion } from "framer-motion"
import { useState } from "react"

export default function FAQ() {
  const faqs = [
    {
      question: "웨비나 난이도가 어느 정도인가요?",
      answer: "기초적인 컴퓨터 활용 능력만 있다면 충분히 따라오실 수 있습니다. 모든 과정은 실습 위주로 진행되며, 필요한 경우 1:1 지원도 제공됩니다."
    },
    {
      question: "준비해야 할 사항이 있나요?",
      answer: "노트북 또는 데스크톱 컴퓨터, 구글 계정이 필요합니다. 웨비나 시작 전에 상세한 준비 사항을 이메일로 안내해 드립니다."
    },
    {
      question: "녹화본이 제공되나요?",
      answer: "네, 웨비나 종료 후 3일 이내에 녹화본과 실습 자료가 이메일로 전달됩니다."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-16 sm:py-20 bg-gradient-to-b from-blue-50/50 to-white">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-b from-blue-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-indigo-100/20 to-transparent rounded-full blur-3xl" />
      </div>

      <Container className="px-4 sm:px-6">
        <div className="relative max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
          >
            자주 묻는 질문
          </motion.h2>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 cursor-pointer"
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                      marginTop: openIndex === index ? 12 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm sm:text-base text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 추가 문의 안내 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <p className="text-sm sm:text-base text-gray-600">
              더 궁금하신 사항이 있으신가요? 
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                문의하기
              </a>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
