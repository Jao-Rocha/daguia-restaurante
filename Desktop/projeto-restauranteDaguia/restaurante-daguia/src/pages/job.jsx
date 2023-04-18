import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Job() {
  return (
    <div>
      <main>
        <Navbar />
        <h1>trabalhe conosco</h1>
      </main>
    </div>
  )
}
