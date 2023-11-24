import React, { useRef, useState } from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '@/assets/styles/style-carousel-signatures.css'
import ListImage from '@/app/data/slides'



export default function CarouselSignaturesItem() {
  const [swiperRef, setSwiperRef] = useState(null)
  const [slides, setSlides] = useState(ListImage)

 
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={20}
        zoom={false}
       
        navigation={true}
        virtual
        className='swiper-sig'
      >
        {slides.map((index) => (
          <SwiperSlide
            key={index.id}
          >
            <div>
              <img src={index.image} alt="image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
