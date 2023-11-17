import Link from 'next/link'

function PrivatePartyItem() {
  return (
    <Link
      href={'#'}
      className="  mt-20 block"
    >
      <div className="hover:scale-110 max-w-full max-h-full w-[281px] h-[379px] relative">
        <img
          src="https://vietnamnightlife.com/uploads/images/2019/12/1576815540-single_product6-artists4.jpg.webp"
          alt="img-location"
          className=" flex justify-center rounded-xl max-h-full flex-order-2 max-w-full "
        />

        <div className="absolute inset-0 w-full flex items-end justify-center ">
          <p className="text-white hover:text-red-400 text-[18px] font-bold  mb-2">
            Tiệc ra mắt sản phẩm
          </p>
        </div>
      </div>
    </Link>
  )
}

export default PrivatePartyItem
