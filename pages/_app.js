import '../styles/globals.css';
import Layout from '../Components/Layout';
import '../styles/Navbar_res_styless.scss';


function MyApp({ Component, pageProps }) {
  return <Layout>
           <Component {...pageProps} />
        </Layout>
}

export default MyApp
