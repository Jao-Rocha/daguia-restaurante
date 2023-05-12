import { Inter } from 'next/font/google'
import ButtonAppBar from '@/components/ButtonAppBar'
import CurriculoForm from '@/components/CurriculoForm'

const inter = Inter({ subsets: ['latin'] })

export default function Job() {
  return (
    <section>
      <div>
        <ButtonAppBar />
      </div>
      <div className="mt-10">
        <CurriculoForm />
      </div>
    </section>
  )
}
