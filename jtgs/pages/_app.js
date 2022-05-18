import "../styles/globals.css";
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {

return <>
<Head>
    {/* <style>
@import url('https://fonts.googleapis.com/css2?family=Alice&display=swap');
</style> */}
</Head>
<Component {...pageProps} />;
</>
};
export default MyApp;