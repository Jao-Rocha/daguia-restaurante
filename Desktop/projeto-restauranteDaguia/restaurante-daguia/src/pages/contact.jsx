import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Map from '@/components/Map'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <section>
      <Navbar />
      <div className="text-center mt-10">
        <h1>Nossas informações de contato:</h1>
        <h2>Telefone: 19 9000-9000</h2>
        <h2>Email: daguia@hotmail.com</h2>
      </div>
      <div className="text-center mt-10">
        <h1>Nossa localização!</h1>
        <Map />
      </div>
    </section>
  )
}
