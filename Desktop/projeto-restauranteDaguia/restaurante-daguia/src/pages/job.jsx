import { Inter } from 'next/font/google'
import CurriculoForm from '@/components/CurriculoForm'
import Navbar from '@/components/Navbar'
import Icons from '@/components/Icons'
const inter = Inter({ subsets: ['latin'] })

export default function Job() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 mx-2">
        <CurriculoForm />
      </div>
      <div className="mt-40">
        <Icons />
      </div>
    </section>
  )
}
