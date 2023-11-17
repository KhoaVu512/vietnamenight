import Link from 'next/link'

function TopLocationItem() {
  return (
    <Link
      href={'#'}
      className="relative w-[50%] mt-20"
    >
      <img
        src="https://vietnamnightlife.com/uploads/images/2020/01/1578389551-single_pcat3-hochiminhclub.jpg.webp"
        alt="img-location"
        className=" flex justify-center rounded-xl h-[400px] mt-12 flex-order-2"
      />

      <div className="absolute inset-0 flex items-end mb-12 px-12">
        <h2 className="text-white hover:text-red-400 text-3xl font-bold">
          Get Lost in Mountains
        </h2>
      </div>
    </Link>
  )
}

export default TopLocationItem
