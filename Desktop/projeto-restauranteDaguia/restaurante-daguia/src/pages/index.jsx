import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import CardFood from '@/components/CardFood'
import Button from '@/components/Button'

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
        <section>
          <div>
            <CardFood
              image={'/images/test.jpg'}
              title={'Aparmegiana de frango'}
              description={
                ' ssumenda fugit veniam quos labore ssumenda fugit veniam quos labore ssumenda fugit veniam quos labore'
              }
            />
            <CardFood
              image={'/images/test.jpg'}
              title={'Aparmegiana de frango'}
              description={
                ' ssumenda fugit veniam quos labore ssumenda fugit veniam quos labore ssumenda fugit veniam quos labore'
              }
            />
            <CardFood
              image={'/images/test.jpg'}
              title={'Aparmegiana de frango'}
              description={
                ' ssumenda fugit veniam quos labore ssumenda fugit veniam quos labore ssumenda fugit veniam quos labore'
              }
            />
          </div>
          <div className="text-center mt-10">
            <h2 className="">O que você encontrará em nosso restaurante ?</h2>
            <p className="mt-2">
              Temos noss self-service custando 34 reais para comer a vontade!
            </p>
            <p className="">
              Temos também a opção de comer por kilo , saindo por 45 reais!
            </p>

            <Button name={'Nosso cardápio!'} click={'arrow function'} />
          </div>
        </section>
      </main>
    </div>
  )
}
