import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import CurriculoForm from '@/components/CurriculoForm'

const inter = Inter({ subsets: ['latin'] })

export default function Job() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <CurriculoForm />
      </div>
    </section>
  )
}
