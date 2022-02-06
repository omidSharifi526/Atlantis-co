import Head from 'next/head'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css'; 
import { useState } from 'react';
import { useEffect } from 'react';

import styles from '../styles/Home.module.css';
import bg from '../public/asset/imgs/bg1.jpg'
import Featured from '../Components/Featured';
import Script from 'next/script'
import Intro from '../Components/Intro';
import MyProduct from '../Components/MyProduct';
import GallerySlider from '../Components/Gallery Slider/GallerySlider';
import ProductSlider from '../Components/Product Slider/ProductSlider';


export default function Home() {

  const [intro,setIntro]=useState(true);

  useEffect(() => {

    const valtimer= setTimeout(() => {
      setIntro(false)
    }, 5000);


    
    return () => {
     
    }
  }, [])





  return (
    <div className={styles.container}>
     
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
      <Head>
        <title>Atlantis-co</title>
        <meta name="Atlantis-co" content="best of Hookah service and hookah" />
        <link rel="icon" href="/favicon.ico" />
     
       
      </Head>
      {
        <Intro/> && intro
      }
      <Featured/>
     
     
     <MyProduct/>

     <GallerySlider/>
     <ProductSlider header='محبوب ترین ها'/>
     
     
     



      

      
      
      
       






       
      

        
    </div>
     
  )
}
