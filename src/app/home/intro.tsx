import SocialNetwork from '@/app/components/Elements/social-network'

function IntroHome() {
  return (
    <div className="flex  w-[1214px]  max-md:py-8 py-12">
      <div className="w-[60%] max-lg:w-full  flex flex-col  justify-center mt-8  ">
        <div className='max-lg:w-full '>
          <div className='hidden max-lg:flex justify-center mb-2'><SocialNetwork /></div>
          <div className="flex justify-end text-[30px] font-semibold medium tracking-tighter max-lg:justify-center items-center">
            GIỚI THIỆU
          </div>
          <span className="flex justify-end mt-4 text-[12px] text-[#eb1282] font-bold mb-3 max-lg:justify-center items-center">
            VIETNAMNIGHTLIFE{' '}
          </span>
          <div className="text-[15px] text-justify leading-[32px] font-medium max-lg:p-8">
            Vietnam Nightlife là nền tảng được xây dựng để hỗ trợ khách hàng tìm
            kiếm và đặt chỗ tại các Nightclubs, Rooftop Bars, Cocktail Bars,
            Lounge, Karaoke, Sự Kiện và đặc biệt là các tour ăn chơi sành điệu
            về đêm. Tại các thành phố đang phát triển nhất Việt Nam như Hà Nội,
            Hồ Chí Minh, Đà Nẵng, Nha Trang, Phú Quốc… Bằng mạng lưới kết nối
            rộng rãi với những địa điểm ăn chơi hàng đầu thành phố. Vietnam
            Nightlife tự tin giới thiệu, cung cấp các trải nghiệm ăn chơi tiệc
            tùng đỉnh cao và dịch vụ đặt chỗ tốt nhất nhằm đáp ứng nhu cầu giải
            trí của mọi đối tượng khách hàng trong nước và quốc tế.
          </div>
        </div>
      </div>

      <div className="w-[40%] max-lg:w-0 max-lg:none flex justify-center items-center ">
        <img
          src="https://vietnamnightlife.com/uploads/images/2020/01/1578645729-single_html1-vietnamnightlife.png.webp"
          alt="img-intro"
          className="w-[500px] ml-12"
        />
      </div>
    </div>
  )
}

export default IntroHome
