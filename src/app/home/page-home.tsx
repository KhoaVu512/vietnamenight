'use client'

import LayoutPage from '@/app/components/Layout/layout-page'
import ComboNight from '@/app/home/combo-night'
import EventHome from '@/app/home/event'
import IntroHome from '@/app/home/intro'
import NightlifeStory from '@/app/home/nightlife-story'
import PrivateParty from '@/app/home/private-party'
import TopLocation from '@/app/home/top-location'
import Album from '@/app/home/album'
import '@/assets/styles/style.css'

function PageHome() {
  return (
    <div className=" items-center overflow-hidden flex justify-center flex-col">
      <div className="w-full h-[75%]">
        <img
          src="https://vietnamnightlife.com/uploads/images/2020/07/1594608182-single_banner26-vietnamnightlifeslider.jpg.webp"
          alt=""
          className="w-full "
        />
      </div>
      <div className=" bg-[#111111] w-full">
        <div className="flex justify-center">
          <IntroHome />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <EventHome />
      </div>
      <div className="w-full flex justify-center">
        <TopLocation />
      </div>
      <div className="w-full flex justify-center">
        <img
          src="https://vietnamnightlife.com/uploads/images/2022/10/1665120200-single_banner45-z376243728949754c7499d23a8643505f533d763f4ab35.png.webp"
          alt=""
          className="w-full h-[40%] mt-20"
        />
      </div>
      <div>
        <ComboNight />
      </div>

      <div className="w-full">
        <img
          src="https://vietnamnightlife.com/uploads/images/2022/10/1665120200-single_banner45-z376243728949754c7499d23a8643505f533d763f4ab35.png.webp"
          alt=""
          className="w-full h-[40%] mt-20"
        />
      </div>

      <div className='flex justify-center'>
        <PrivateParty />
      </div>
      <div className='flex justify-center'>
        <NightlifeStory />
      </div>
      <div className='flex justify-center'>
        <Album />
      </div>
      <hr className="h-[1px] w-full mt-12" />
    </div>
  )
}

export default PageHome
