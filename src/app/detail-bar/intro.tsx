import Link from 'next/link'

function Intro() {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full">
      <div className="text-[35px] font-Anton uppercase  font-bold mt-[120px]">
        Địa điểm hàng đầu
      </div>
      <div className="text-[14px] font-bold ">
        <span className="hover:text-[#888] mx-2">
          <Link href={'/'}>TRANG CHỦ</Link>
        </span>
        /
        <span className="hover:text-[#888] mx-2">
          <Link href={'#'}>ĐỊA ĐIỂM HÀNG ĐẦU</Link>
        </span>
        /
        <span className="hover:text-[#888] mx-2">
          <Link href={'#'}>ĐÀO HOUSE SAIGON </Link>
        </span>
      </div>
    </div>
  )
}

export default Intro
