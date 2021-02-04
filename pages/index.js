import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import React, { useContext, useEffect } from 'react';
import Principal from "../components/Principal";
import ChatContext from "../context/chat/chatContext";

export default function Home() {

  const chatContext = useContext(ChatContext);
  const { datos, socketConexion } = chatContext;

  useEffect(() => {
    socketConexion();
  }, []);
  
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
