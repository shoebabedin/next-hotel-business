import '@etchteam/next-pagination/dist/index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/Home.module.css";
import "../styles/icon.css";
import "../styles/MultiRangeSlider.module..css";
import "../styles/Totop.module.js";
import Layout from "/pages/Common/Layout/Layout";

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);


  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
