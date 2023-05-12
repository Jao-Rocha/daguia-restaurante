import { Inter } from 'next/font/google'
import ButtonAppBar from '@/components/ButtonAppBar'
import Map from '@/components/Map'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <section>
      <ButtonAppBar />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold">
          Nossas informações de contato:
        </h1>
        <h2 className="mt-2 text-lg">Telefone: (19) 3545-4183</h2>
        <h2 className=" text-lg">Email: Restaurante.daguia@gmail.com</h2>
      </div>
      <div className="text-center mt-10">
        <h1 className="text-2xl font-semibold">Nossa localização!</h1>
        <div className=" mt-10 flex justify-center items-center">
          <Map />
        </div>
      </div>
    </section>
  )
}
