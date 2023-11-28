'use client'
import BannerLocation from '@/app/introduction/banner-location'
import Content from '@/app/introduction/content'
import Header from '@/app/introduction/header'
import '@/assets/styles/style.css'

function IntroductionPage() {
  return (
    <div className="w-full">
      <div className="container-detail h-[449px] max-md:h-[500px]">
        <Header />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[1214px] my-12 max-lg:w-full flex flex-row-reverse max-lg:flex-col">
          <div className="flex justify-center">
            <Content />
          </div>
          <img
            src="https://vietnamnightlife.com/uploads/images/2020/01/1578645729-single_html1-vietnamnightlife.png.webp"
            alt=""
            className="w-full p-6"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[1214px] flex justify-center border-[1px] border-[rgba(204,204,204,.2)]">
          <BannerLocation />
        </div>
      </div>
    </div>
  )
}
export default IntroductionPage
