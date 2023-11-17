'use client'

import LayoutPage from '@/app/components/Layout/layout-page'
import ComboNight from '@/app/home/combo-night'
import EventHome from '@/app/home/event'
import IntroHome from '@/app/home/intro'
import NightlifeStory from '@/app/home/nightlife-story'
import PrivateParty from '@/app/home/private-party'
import TopLocation from '@/app/home/top-location'
import Album from '@/app/home/album'

function PageHome() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <LayoutPage />
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
      <div>
        <EventHome />
        <TopLocation />
      </div>
      <div className="w-full">
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

      <div>
        <PrivateParty />
      </div>
      <div>
        <NightlifeStory />
      </div>
      <div>
        <Album />
      </div>
      {/* <hr className="h-[1px] w-full mt-12" />
      <div className="flex w-[1214px] h-screen ">
        <div className="flex flex-col w-[416px] h-[1px]">
          <div>Lien he</div>
          <hr className="w-[75%] h-[1px]" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  )
}

export default PageHome
