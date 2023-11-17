import Link from 'next/link'


function ComboNightItem() {
  return (
    <Link
      href={'#'}
      className="relative w-[383px] h-[288px] mt-20 border-[1px]"
    >
      <div className="text-[18px] font-bold  hover:text-red-400">
        <img
          src="https://vietnamnightlife.com/uploads/images/2020/02/1582353875-single_product5-bachelornighttourinhochiminh.jpg.webp"
          alt="img-location"
          className=" flex justify-center rounded-xl h-full  flex-order-2"
        />

        <div className="absolute inset-0 w-full flex items-end justify-center mb-2">
          <p className="uppercase">Combo trai doc than</p>
        </div>
      </div>
    </Link>
  )
}

export default ComboNightItem
