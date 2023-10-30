import React, {useEffect} from 'react'
import '../css/Topselling.css';
import { FaStar } from 'react-icons/fa';

import AOS from'aos'
import 'aos/dist/aos.css'

import pic4 from '../assets/image4.png'
import pic5 from '../assets/image5.png'
import pic6 from '../assets/image6.png'
import pic1 from '../assets/image1.png'


const Topselling = () => {

    const top =[
        {
            id:1,
            title:'Vertical Striped Shirt',
            rating:'5.0/5',
            price: '$212',
            img: pic4
        },
        {
            id:2,
            title:'Loose Fit Bermuda Shorts',
            rating:'3.0/5',
            price: '$80',
            img: pic5
        },{
            id:3,
            title:'Courage Graphic T-shirt',
            rating:'4.0/5',
            price: '$145',
            img: pic6
        },
        {
            id:4,
            title:'Faded Skinny Jeans',
            rating:'4.5/5',
            price: '$210',
            img: pic1
        },
    ]
    useEffect(() => {
        AOS.init({duration:1500})
         
       }, [])
  return (
    
    <div>
    <div className='topselling'>
        <p className='title' data-aos="fade-up">Top Selling</p>
<div className='itemcard'>
       {top.map((top)=>(
        <div className='com'>
            <div className='itemcomponent' data-aos="flip-left">
         <img src={top.img} alt='tshirt'></img>
         <h3>{top.title}</h3>

         <div className='starrating'>
                <div className='star'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
               <span><p className='rating'>{top.rating}</p></span>
             </div>


             <h4>{top.price}</h4>
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

export default Topselling