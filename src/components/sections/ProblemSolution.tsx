'use client'

import Container from "../shared/Container"
import { motion } from "framer-motion"

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <Container>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* 문제 영역 */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              현재 이런 어려움을 겪고 계신가요?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: '수작업으로 인한 시간 낭비',
                  description: '매번 수동으로 데이터를 입력하고 관리하느라 귀중한 시간을 낭비하고 있습니다.'
                },
                {
                  title: '실수로 인한 데이터 누락',
                  description: '수작업 처리 중 실수로 중요한 정보가 누락되거나 잘못 입력됩니다.'
                },
                {
                  title: '비효율적인 커뮤니케이션',
                  description: '참가자들과의 소통이 원활하지 않아 불필요한 시간이 소요됩니다.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <h3 className="font-semibold text-lg mb-2 text-red-500">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 해결책 영역 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              이제 이렇게 해결할 수 있습니다
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: '자동화된 등록 프로세스',
                  description: '모든 등록 과정이 자동으로 처리되어 수작업이 필요 없습니다.'
                },
                {
                  title: '실시간 데이터 관리',
                  description: '구글 시트와 연동되어 모든 데이터가 실시간으로 정확하게 관리됩니다.'
                },
                {
                  title: '자동 이메일 발송',
                  description: '참가자들과의 커뮤니케이션이 자동으로 이루어집니다.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-indigo-50/50 rounded-2xl hover:bg-indigo-50 transition-colors duration-300 border border-indigo-100"
                >
                  <h3 className="font-semibold text-lg mb-2 text-indigo-600">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
