



import '../styles/globals.css';
import Layout from '../Components/Layout';





import '../styles/Navbar_res_styless.scss';
import '../styles/Std_navbar_style.scss';
import '../styles/navbar_Std.css';
import '../styles/intro_style.css';

import '../styles/Featured_style.scss'

import '../styles/myProduct_style.scss';
import '../styles/gallery_slider_style.scss';
import '../styles/Footer_style.scss';
import '../styles/Product_slider_style.scss';
import '../styles/Cards_Style.scss';
import '../styles/Middle_text_style.scss';
import '../styles/About_style.scss'





function MyApp({ Component, pageProps }) {
  
  return <Layout>
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
           <Component {...pageProps} />
        </Layout>
}

export default MyApp
