'use client'

import CarouselDefault from '@/app/detail-bar/Carousel'
import CarouselSignatures from '@/app/detail-bar/Carousel-signatures'
import EventDetail from '@/app/detail-bar/event-detail'
import FormDetail from '@/app/detail-bar/form-detail'
import IntroBar from '@/app/detail-bar/info-bar'
import Intro from '@/app/detail-bar/intro'
import LikeWithYou from '@/app/detail-bar/like-with-you'
import Rate from '@/app/detail-bar/rate'
import '@/assets/styles/style.css'

function Page() {
  return (
    <div className="">
      <div className="container-detail">
        <Intro />
      </div>
      <div className="w-full justify-center flex">
        <div className="w-[1214px] flex justify-center">
          <div className="w-[800px] overflow-hidden flex  flex-col mx-12">
            <div>
              <IntroBar />
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full  h-[300px] max-lg:w-[75%]">
                <CarouselDefault content="Không gian" />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full  h-[300px] max-lg:w-[75%]">
                <CarouselDefault content="Hình ảnh khách" />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full  h-[400px] max-lg:w-[75%]">
                <CarouselSignatures container="Signatures" />
              </div>
            </div>
            <div className="w-full flex justify-center mt-8">
              <div className="w-full  h-[400px] max-lg:w-[75%]">
                <CarouselSignatures container="Thuc don" />
              </div>
            </div>
          </div>
          <div>
            <FormDetail />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[1214px]">
          <EventDetail />
          {/* <LikeWithYou /> */}
          <Rate />
        </div>
      </div>
    </div>
  )
}

export default Page
