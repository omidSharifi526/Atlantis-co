import '../styles/globals.css';
import Layout from '../Components/Layout';
import '../styles/Navbar_res_styless.scss';
import '../styles/Std_navbar_style.scss';
import '../styles/navbar_Std.css';
import '../styles/intro_style.css';


function MyApp({ Component, pageProps }) {
  return <Layout>
           <Component {...pageProps} />
        </Layout>
}

export default MyApp
