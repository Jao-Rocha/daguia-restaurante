import '@/styles/globals.css'
import emailjs from 'emailjs-com'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo-daguia.jpg" />
        <title>Daguia Restaurante</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
