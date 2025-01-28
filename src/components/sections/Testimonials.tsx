'use client'

import Container from "@/components/shared/Container"
import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      name: "이지현",
      role: "마케팅 매니저",
      company: "테크스타트업",
      comment: "엑셀로 하던 수작업이 모두 자동화되어 매달 20시간 이상을 절약하고 있어요. 실제 업무에 바로 적용할 수 있는 실용적인 내용이었습니다.",
      rating: 5
    },
    {
      name: "박민서",
      role: "프리랜서 강사",
      company: "온라인 교육",
      comment: "수강생 관리가 너무 힘들었는데, 이제는 모든 것이 자동으로 처리됩니다. 강의에만 집중할 수 있어 정말 감사해요.",
      rating: 5
    },
    {
      name: "김도윤",
      role: "창업가",
      company: "이커머스",
      comment: "노코드로 이런 것까지 가능하다니 놀라웠어요. 개발자 없이도 충분히 시스템을 만들 수 있다는 자신감을 얻었습니다.",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-purple-50/50">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-purple-100/20 to-transparent rounded-full blur-3xl" />
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
            수강생 후기
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white/70 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100"
              >
                {/* 별점 */}
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 group-hover:text-yellow-500 transition-colors duration-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* 후기 내용 */}
                <p className="text-sm sm:text-base text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-200">
                  "{testimonial.comment}"
                </p>

                {/* 작성자 정보 */}
                <div>
                  <p className="font-semibold text-sm sm:text-base text-gray-900">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                    {testimonial.role} | {testimonial.company}
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
