import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Principal from "../components/Principal";

export default function Home() {
  return (
    <>
        <Head>
          <title>PAGINA WEB SOCKETS CHAT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Principal/>
    </>
  )
}
