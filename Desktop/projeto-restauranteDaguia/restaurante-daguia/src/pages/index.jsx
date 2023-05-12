import { Inter } from 'next/font/google'
import CardFood from '@/components/CardFood'
import Button from '@/components/Button'
import Carrousel from '@/components/Carrousel'
import ButtonAppBar from '@/components/ButtonAppBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main>
        <ButtonAppBar />
        <div class="h-screen max-h-full bg-cover bg-center flex items-center bg-[url('/images/home.jfif')]">
          <div class="container mx-auto px-6 flex items-center justify-center">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl uppercase text-white font-bold">
                O melhor frango à parmegiana da cidade!
              </h1>
              <p class="text-xl text-gray-200 my-4">
                Seja Bem-vindo ao restaurante com mais história da cidade!
              </p>

              <Button
                name={'Nosso cardápio!'}
                click={() => window.open('/cardapio/cardapio.pdf')}
              />
            </div>
          </div>
        </div>

        <section>
          <div className="text-center mt-10">
            <p className="text-3xl font-semibold">
              Restaurante Daguia a mais de 15 anos trazendo alegria no almoço e
              no jantar de nossos clientes.
            </p>
            <p
              className="mt-2
          "
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos at,
              temporibus, dolorum facere praesentium doloremque ut tempora
              perspiciatis qui, velit tempore! Animi ipsum ab ducimus cum
              voluptas molestias iure officiis.
            </p>
          </div>
        </section>

        <section className="m-10">
          <div>
            <CardFood
              image={'/images/prato1.jfif'}
              title={'Parmegiana de frango'}
              description={
                'Nossa Deliciosa Parmegiana de frango, com certeza o prato mais pedido pelos nossos clientes. Feito com um incrível frango empanado, nosso molho de tomate caseiro e para finalizar, queijo mussarela e parmesão. '
              }
            />
            <CardFood
              image={'/images/caipirinha.jfif'}
              title={'Caipirinha de limão'}
              description={
                ' Nossa deliciosa caipirinha de limão. É a mais pedida nas noites de sexta, caipirinha feita a moda antiga, preservando seu sabor marcante.'
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
            <h2 className="text-3xl font-semibold">
              O que você encontrará em nosso restaurante ?
            </h2>
            <p className="mt-2 text-lg ">
              Temos nosso incrível self-service , com diversos sabores para
              serem provados.
            </p>
            <p className="text-lg y">
              No qual voçê pode optar por comer a vontade ou comer por quilo!
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
