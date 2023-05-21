import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Icons from '@/components/Icons'

import ContactForm from '@/components/ContactForm'
const inter = Inter({ subsets: ['latin'] })

export default function Job() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 mx-2">
        <ContactForm />
      </div>
      <div className="mt-40">
        <Icons />
      </div>
    </section>
  )
}
