'use client'

import Container from "@/components/shared/Container"
import { motion } from "framer-motion"

export default function Benefits() {
  const benefits = [
    {
      title: "시간 절약",
      description: "반복적인 수작업을 자동화하여 업무 시간을 90%까지 절약할 수 있습니다.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "비용 절감",
      description: "개발자 없이도 자동화된 시스템을 구축하여 개발 비용을 크게 절감할 수 있습니다.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "업무 효율화",
      description: "AI 기술을 활용하여 복잡한 업무를 단순화하고 효율성을 극대화합니다.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-blue-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-t from-indigo-100/20 to-transparent rounded-full blur-3xl" />
      </div>

      <Container className="px-4 sm:px-6">
        <div className="relative max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
          >
            도입 효과
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full shadow-md group-hover:bg-transparent transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
