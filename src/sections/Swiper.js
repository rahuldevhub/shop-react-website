import React,{useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../css/Swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';


import { FaStar } from 'react-icons/fa';
import AOS from'aos'
import 'aos/dist/aos.css'

export default function App() {


    let swipercontent=[
        {
            id:1,
            name: "Rahul",
            Feedback: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consectetur in illum voluptate sequi asperiores vitae delectus,quos itaque quibusdam culpa facilis? Dolor omnis culpa maxime.",
            rating: 2,
        },
        {
            id:2,
            name: "Jhon",
            Feedback: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consectetur in illum voluptate sequi asperiores vitae delectus,quos itaque quibusdam culpa facilis? Dolor omnis culpa maxime.",
            rating: 2,
        },{
            id:3,
            name: "Ester",
            Feedback: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consectetur in illum voluptate sequi asperiores vitae delectus,quos itaque quibusdam culpa facilis? Dolor omnis culpa maxime.",
            rating: 2,
        },{
            id:4,
            name: "Phone",
            Feedback: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consectetur in illum voluptate sequi asperiores vitae delectus,quos itaque quibusdam culpa facilis? Dolor omnis culpa maxime.",
            rating: 2,
        },{
            id:5,
            name: "Book",
            Feedback: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consectetur in illum voluptate sequi asperiores vitae delectus,quos itaque quibusdam culpa facilis? Dolor omnis culpa maxime.",
            rating: 2,
        },
        {
            id:6,
            name: "Headphone",
            Feedback: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consectetur in illum voluptate sequi asperiores vitae delectus,quos itaque quibusdam culpa facilis? Dolor omnis culpa maxime.",
            rating: 2,
        },{
            id:7,
            name: "Waterbottel",
            Feedback: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consectetur in illum voluptate sequi asperiores vitae delectus,quos itaque quibusdam culpa facilis? Dolor omnis culpa maxime.",
            rating: 2,
        },
]



    useEffect(() => {
        AOS.init({duration:1500})
         
       }, [])
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

<div>
{swipercontent.map((swipercontent)=>(
          <SwiperSlide>
                <div className='lg:w-2/3 flex justify-center object-contain mx-auto h-48 lg:h-96 swipercard'  data-aos="zoom-in">
                <div className='swipercontent'>


                <div className='swiperstar'><FaStar/><FaStar/></div>   


                <h1>{swipercontent.name}</h1>
                <p>{swipercontent.Feedback}</p>
                </div></div>
         </SwiperSlide>
))}
</div>

      </Swiper>
    </>
  );
}
