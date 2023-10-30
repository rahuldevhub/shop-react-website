import React, {useEffect} from 'react'
import '../css/Browse.css'

import AOS from'aos'
import 'aos/dist/aos.css'


const Browse = () => {
  useEffect(() => {
    AOS.init({duration:1000})
     
   }, [])  
  return (
    <div className='Browse'>
       <div className='title bro' data-aos="fade-up">
        <p>Browse By Dress Style</p></div>
       <div className='toprow' data-aos="zoom-in">
         <div className='row-1' data-aos="zoom-in"><p>Casual</p></div>
         <div className='row-2'><p>Formal</p></div>
       </div>
       <div className='toprow' data-aos="zoom-in">
       <div className='row-3'><p>Party</p></div>
       <div className='row-4'><p>Gym</p></div>
       </div>


    </div>
  )
}

export default Browse