import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <section>
          <div className="flex items-center justify-center m-10">
            <img
              src="/images/logo-daguia.jpg"
              alt="Logo do Restaurante Daguia"
              className="rounded-full "
            />
          </div>
          <div className="text-center">
            <h1>Seja Bem-vindo ao restaurante com mais história da cidade!</h1>
            <p>
              O Restaurante Daguia Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sit iste assumenda fugit veniam quos labore cum
              tempore hic inventore animi. Eaque asperiores fugit reprehenderit
              commodi vitae perspiciatis et odio nulla.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
