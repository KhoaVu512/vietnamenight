'use client'
import Image from 'next/image'
import LayoutPage from '@/app/components/Layout/layout-page'
import IntroHome from '@/app/home/intro'
import * as React from 'react'
import EventHome from '@/app/home/event'
import TopLocation from '@/app/home/top-location'
import PrivateParty from '@/app/home/private-party'
import Link from 'next/link'
import ComboNight from '@/app/home/combo-night'
import NightlifeStory from '@/app/home/nightlife-story'
import Album from '@/app/home/album'

function Page() {
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
      <Link href={'/'}>
        <img
          src="https://vietnamnightlife.com/uploads/images/2022/10/1665120200-single_banner45-z376243728949754c7499d23a8643505f533d763f4ab35.png.webp"
          alt=""
          className="w-full h-[40%] mt-20"
        />
      </Link>
      <div>
        <ComboNight />
      </div>

      <Link href={'/'}>
        <img
          src="https://vietnamnightlife.com/uploads/images/2022/10/1665120200-single_banner45-z376243728949754c7499d23a8643505f533d763f4ab35.png.webp"
          alt=""
          className="w-full h-[40%] mt-20"
        />
      </Link>

      <div>
        <PrivateParty />
      </div>
      <div>
        <NightlifeStory />
      </div>
      <div>
        <Album />
      </div>

      <div className="flex w-[1214px] h-screen "></div>
    </div>
  )
}

export default Page