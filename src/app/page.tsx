import Hero from "@/components/sections/Hero"
import ProblemSolution from "@/components/sections/ProblemSolution"
import WebinarInfo from "@/components/sections/WebinarInfo"
import Instructor from "@/components/sections/Instructor"
import Benefits from "@/components/sections/Benefits"
import RegistrationForm from "@/components/sections/RegistrationForm"
import FAQ from "@/components/sections/FAQ"
import Testimonials from "@/components/sections/Testimonials"
import FinalCTA from "@/components/sections/FinalCTA"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <WebinarInfo />
      <Instructor />
      <Benefits />
      <RegistrationForm />
      <FAQ />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
