import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <div>
      <main>
        <Navbar />
        <h1>contato</h1>
      </main>
    </div>
  )
}
