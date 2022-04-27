import BaseStyles from "../components/styles/BaseStyles";
import FontStyles from '../components/styles/FontStyles';
import ResetCss from '../components/styles/ResetCss';
import HelpersCss from '../components/styles/Helpers';
import Layout from "../components/layouts/Layout";
import Script from "next/script";



function MyApp({ Component, pageProps }) {



  return (
    <div className="overflow-hidden" >
      <ResetCss />
      <FontStyles />
      <BaseStyles />
      <HelpersCss />
      <Layout>
        <Component {...pageProps} />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
      </Layout>
    </div>
  );
}

export default MyApp;
