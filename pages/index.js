import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import bg from '../public/asset/imgs/bg1.jpg'
import {BsGrid3X3GapFill,cog, BsList,Setting} from 'react-icons/bs';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Atlantis-co</title>
        <meta name="Atlantis-co" content="best of Hookah service and hookah" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
      </Head>

      <Image src={bg}/>
      
       






       
      

        
    </div>
     
  )
}
