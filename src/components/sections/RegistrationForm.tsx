'use client'

import Container from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import { toast } from "sonner"

interface FormData {
  name: string
  email: string
  phone: string
}

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    try {
      setIsSubmitting(true)
      
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyYQfl3St57Eu-rmV9X_AcQ-N8UcdNgOqh-mpN4zslH8QUm-TFn6qz5cjhlcikZxmXe/exec'
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        }),
      })

      toast.success('등록이 완료되었습니다!')
      setFormData({
        name: '',
        email: '',
        phone: ''
      })

    } catch (error) {
      toast.error('오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
      console.error('Registration error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="registration" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-indigo-50/50">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 right-0 w-1/2 h-full bg-gradient-to-b from-indigo-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 left-0 w-1/2 h-full bg-gradient-to-t from-blue-100/20 to-transparent rounded-full blur-3xl" />
      </div>

      <Container className="px-4 sm:px-6">
        <div className="relative max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
          >
            등록하기
          </motion.h2>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-indigo-100"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 bg-white/70 backdrop-blur-sm transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 bg-white/70 backdrop-blur-sm transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                연락처
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 bg-white/70 backdrop-blur-sm transition-colors duration-200"
                required
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 text-sm sm:text-base rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-sm shadow-indigo-200 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '등록 중...' : '등록하기'}
              </Button>
              <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center">
                * 개인정보는 웨비나 진행 목적으로만 사용됩니다.
              </p>
            </motion.div>
          </motion.form>

          {/* 추가 정보 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-4 bg-indigo-50/50 rounded-lg border border-indigo-100 text-center"
          >
            <p className="text-sm text-gray-600">
              등록 후 24시간 이내에 상세 안내 메일이 발송됩니다
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
