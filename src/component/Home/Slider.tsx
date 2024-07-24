import React from 'react'
import image from '../../Data/SliderImg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  
  return (
    <div className='mt-5 w-[80%] container m-auto h-[250px]'>
        <Swiper 
       modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
       spaceBetween={20}
       slidesPerView={1}
       //navigation
       autoplay={{delay:1000}}
       pagination={{ clickable: true }}
       //scrollbar={{ draggable: true }}
      
    >
      {image.map((img)=>(
      <div className=''>
       <SwiperSlide className=''  ><img src={img} className=' h-[220px]  object-cover w-[100%]' />
       </SwiperSlide> 
       
      </div>
    )) }
      
      
    </Swiper>
    </div>
  )
}

export default Slider