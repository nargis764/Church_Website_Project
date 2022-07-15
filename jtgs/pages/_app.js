import "../styles/globals.css";
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Layout from "../components/Layout";
<<<<<<< HEAD
import { GlobalProvider } from "../context/GlobalContext";
=======
>>>>>>> 1889ceeb18fa31f445570a84a9bf5e6315a7dd5b



const MyApp = ({ Component, pageProps }) => {

return <>
        <GlobalProvider>
            <Head>
                <title>Jesus The Good Shepherd</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalProvider>

</>
};
export default MyApp;