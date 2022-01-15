import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';

import styles from '../styles/Home.module.css';
import bg from '../public/asset/imgs/bg1.jpg'
import Featured from '../Components/Featured';
import Script from 'next/script'
import Intro from '../Components/Intro';

export default function Home() {

  const [intro,setIntro]=useState(true);

  useEffect(() => {

    const valtimer= setTimeout(() => {
      setIntro(false)
    }, 7000);


    
    return () => {
      clearTimeout(valtimer)
    }
  }, [])





  return (
    <div className={styles.container}>
     
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
      <Head>
        <title>Atlantis-co</title>
        <meta name="Atlantis-co" content="best of Hookah service and hookah" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
       
      </Head>
      

      <Featured/>
     {
       intro &&  <Intro/>
     }
      

      
      
      
       






       
      

        
    </div>
     
  )
}
