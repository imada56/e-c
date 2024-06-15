import React from 'react'
import image from '../../Data/SliderImg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  return (
    <div className='mt-5'>
        <Swiper 
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
    >
      {image.map((img)=>(
      <div className=''>
       <SwiperSlide ><img src={img} className='h-[220px] w-[100%]  object-cover' /></SwiperSlide> 
       
      </div>
    )) }
      
      
    </Swiper>
    </div>
  )
}

export default Slider