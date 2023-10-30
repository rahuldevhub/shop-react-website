import React, { useEffect } from 'react'
import '../css/Newarrival.css';
import pic1 from '../assets/image1.png'
import pic2 from '../assets/image2.png'
import pic3 from '../assets/image3.png'

import { FaStar } from 'react-icons/fa';

import AOS from'aos'
import 'aos/dist/aos.css'




const Newarrivals = () => {

    const data =[
        {
          id: 1,  
          title:'Black T-Shirt',
          rating:'4.5/5',
          price:'$130',
          img: pic1
        
        },{
            id: 2, 
            title:'Red T-Shirt',
            rating:'4.5/5',
            price:'$130',
            img: pic2
          },{
            id: 3, 
            title:'Green T-Shirt',
            rating:'4.5/5',
            price:'$130',
            img: pic3
          },  
          
       
      ]
    useEffect(() => {
     AOS.init({duration:1500})
      
    }, [])

  return (
    <div >
        
    <div className='newarrival'  id='newArrival'>

        <p className='title' data-aos="fade-up">New Arrivals</p>

      
<div className='itemcard'>
    {data.map((data)=>(

    <div className='com'>
        <div className='itemcomponent '  data-aos="flip-left">
            {/* {data.img} */}
            <img src={data.img} alt='tshirt'></img>
            <h3>{data.title}</h3>


             <div className='starrating'>
                <div className='star'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
               <span><p className='rating'>{data.rating}</p></span>
             </div>


            <h4>{data.price}</h4>
        </div>
     </div>
  

    ))}
</div>
  
    <button className='viewall' data-aos="zoom-in">View All</button>

    </div>

        {/* <div className='ads2'></div> */}



        </div>
  )
}

export default Newarrivals