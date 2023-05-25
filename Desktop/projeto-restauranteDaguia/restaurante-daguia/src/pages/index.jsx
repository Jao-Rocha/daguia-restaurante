import { Inter } from 'next/font/google'
import CardFood from '@/components/CardFood'
import Button from '@/components/Button'
import Map from '@/components/Map'
import Icons from '@/components/Icons'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <div className="h-screen max-h-full bg-cover bg-center flex items-center bg-[url('/images/home.jfif')]">
          <div className="container mx-auto px-6 flex items-center justify-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl uppercase text-white font-bold">
                O melhor frango à parmegiana da cidade!
              </h1>
              <p className="text-xl text-gray-200 my-4">
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
          <div className="flex flex-col md:flex-row items-center justify-between  p-4 ">
            <div className="text-center mt-10  md:mb-36 md:w-1/2 md:pr-8">
              <h2 className="text-3xl text-start font-semibold md:ml-48">
                Restaurante Daguia, a mais de 35 anos trazendo alegria no almoço
                e no jantar de nossos clientes.
              </h2>
              <p className=" mt-4 mb-0 text-justify md:ml-48 md:mt-6 ">
                &emsp;O Restaurante Daguia é o mais tradicional comércio da
                cidade, localizado em Santa Gertrudes – SP. Fundado por Antônio
                Denardi (Daguia) e Maria Aparecida Denardi (Cidinha), no ano de
                1985. A tradição se inicia com uma rotisserie, com o nome “Quero
                Mais”, onde comercializavam salgados e doces. Com a grande
                demanda, a necessidade de um espaço maior surge, nascendo assim
                o atual Restaurante.
              </p>
              <p className="mt-0 text-justify md:ml-48 ">
                &emsp;No novo local, iniciou-se a venda de pratos comerciais
                durante o almoço, pizzas, lanches e porções no jantar, além de
                incluir refeições no próprio espaço, devido ao tamanho êxito, a
                tradição do comércio se estende até os dias atuais, sob o
                comando da família e dos sócios.
              </p>
            </div>
            <div className="md:w-1/2 md:mt-0">
              <div className="flex justify-center mt-4 md:mt-0">
                <Image
                  src="/images/casal.jpeg"
                  width={500}
                  height={200}
                  alt="Casal fundador do restaurante."
                />
              </div>

              <i className="mt-2 flex justify-center">
                Antônio Denardi (Daguia) e Maria Aparecida Denardi (Cidinha).
              </i>
            </div>
          </div>
        </section>
        <section className="m-10 mt-2 md:mt-0">
          <h2 className="text-3xl font-semibold text-center">
            Alguns dos nossos pratos.
          </h2>
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
              image={'/images/pizza.jpg'}
              title={'Pizza'}
              description={
                'As pizzas do Daguia, entregamos muitas durante as noites de sabado. Disponiveís nos principais sabores, chega quentinha na sua casa para alegrar o seu final de semana. '
              }
            />
          </div>
        </section>
        <section className="m-10">
          <div className="mt-10">
            <h2 className="text-3xl text-center font-semibold ">
              O que você encontrará em nosso restaurante?
            </h2>
            <p className="text-lg  text-justify mt-4 md:text-center md:ml-80 md:mr-80">
              &emsp;Temos nosso incrível self-service , com diversas opções para
              serem provados. No qual você pode optar por comer a vontade ou
              comer por quilo!
            </p>
            <p className="text-lg text-justify mt-0 md:text-center md:ml-80 md:mr-80">
              &emsp;Possuímos uma grande variedade de pratos incríveis para você
              e sua família, que podem ser pedidos tanto no almoço quanto no
              jantar. Temos também uma grande variedade de porções e pizzas,
              além de sucos e nossa famosa caipirinha. E o melhor, tudo isso
              pode ser entregue no conforto da sua casa.
            </p>
          </div>
        </section>
        <section className="m-10 p-4 w-full ml-0">
          <div className=" bg-red-900 flex flex-col md:flex-row items-center justify-between  p-4  rounded-3xl">
            <div className=" md:w-1/2 md:pr-8 text-white">
              <h2 className="text-5xl font-semibold">
                Nossas informações de contato:
              </h2>
              <div className="text-xl mt-16 ml-6">
                <ul>
                  <li>Telefone: (19) 3545-4183</li>
                  <li>Email: restdaguia@gmail.com</li>
                  <li>
                    Endereço: Av. Um, 133-149 - Centro, Santa Gertrudes - SP,
                    13510-000
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 border-rose-950 mt-4 mb-4 ">
              <div>
                <Map />
              </div>
            </div>
          </div>
        </section>
        <div className="mb-8">
          <Icons />
        </div>
      </main>
    </div>
  )
}
