import React, {useEffect} from 'react'
import '../css/Happycustomer.css'
import Swiper from "./Swiper.js";
import AOS from'aos'
import 'aos/dist/aos.css'

const Happycustomer = () => {
  useEffect(() => {
    AOS.init({duration:1500})
     
   }, [])
  return (
    
    <div className='Happycustomer'>
        <div className='title cust' data-aos="fade-up"><p>Our Happy Customer</p></div>

      <Swiper/>
      </div>

  )
}

export default Happycustomer