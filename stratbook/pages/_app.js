import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap");
  },[])
  
  return <Component {...pageProps} />
}



export default MyApp
