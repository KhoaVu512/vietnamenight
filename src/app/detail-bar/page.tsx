'use client'

import CarouselDefault from '@/app/detail-bar/Carousel'
import CarouselSignatures from '@/app/detail-bar/Carousel-signatures'
import EventDetail from '@/app/detail-bar/event-detail'
import FormDetail from '@/app/detail-bar/form-detail'
import IntroBar from '@/app/detail-bar/info-bar'
import Intro from '@/app/detail-bar/intro'
import Rate from '@/app/detail-bar/rate'
import '@/assets/styles/style.css'

function Page() {
  return (
    <div className="">
      <div className="container-detail h-[339px]">
        <Intro />
      </div>
      <div className="w-full justify-center flex">
        <div className="w-[1214px] flex justify-center max-lg:flex-col">
          <div className="hidden max-lg:flex w-full max-lg:justify-center max-lg:w-screen-[100%]">
            <FormDetail />
          </div>

          <div className="w-[800px] overflow-hidden flex  flex-col mx-12 justify-center max-lg:w-screen ">
            <div className="flex w-full justify-center max-lg:h-[300px] max-lg:px-12  ">
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
                <CarouselSignatures container="Thực đơn" />
              </div>
            </div>
          </div>
          <div className="max-lg:hidden">
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
