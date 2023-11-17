import Link from 'next/link'
import '@/assest/style/style.css'

function NightlifeStoryItem() {
  return (
    <Link
      href={'/'}
      className="card-story w-[404px] h-[578px] px-[15px] flex flex-col mt-12"
    >
      <div className="px-[10px]">
        <img
          src="https://vietnamnightlife.com/uploads/images/2023/05/1685517563-single_product7-happyhourrooftopquan1.jpg.webp"
          alt="img-nightlife"
          className="w-[386px] h-[290px]"
        />
        <div className='bg-[rgba(255,255,255,.05)] px-2'>
          <p className='uppercase pt-[30px] mb-[15px] transition-[all .2s linear] hover:text-[#eb1282] text-[18px] font-bold '>
            Tại sao không nên bỏ qua "Happy Hour" của Top 6 Rooftop Bar Quận 1
            này?
          </p>
          <p className='text-desc'>Bạn có biết điều gì tạo nên sự đặc biệt của các rooftop bar Sài Gòn không? Đó là không gian mở cùng những góc view “tuyệt đỉnh”, nơi bạn có thể ngắm đường chân trời và hoàng hôn rực rỡ cùng ưu đãi “Happy Hour” cực signature của các top rooftop quận 1 dưới đây. Từ những con phố ồn ào của Quận 1 đến view sông Sài Gòn yên bình, những top rooftop bar quận 1 &amp; quận 3 này mang đến cho bạn những tầm nhìn tuyệt đẹp nhất mà bạn từng trải nghiệm. Cho dù bạn đang tìm kiếm một buổi tối lãng mạn với người thân yêu của mình hay một đêm tiệc cùng bạn bè thì đây đều có thể là những sự lựa chọn phù hợp với mọi người</p>
        </div>

        <span className='b-btn'>Xem them</span>
      </div>
    </Link>
  )
}

export default NightlifeStoryItem
