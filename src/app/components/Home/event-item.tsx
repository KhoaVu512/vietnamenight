import Link from 'next/link'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded'
function EventItem() {
  return (
    <Link href="#">
      <div className="w-[219px] max-lg:h-[403px] max-lg:w-[168px] h-[458px] lg: mt-12 flex flex-wrap max-lg:mx-3 md:w-[356px] md:h-[607px]">
        <img
          src="https://vietnamnightlife.com/uploads/images/2023/09/1695028124-single_product1-khu13.png.webp"
          alt="image-event"
          className="h-[312px] max-lg:h-[240px] md:h-[484px] sm:h-[197px]"
        />
        <div className="border-b-[1px] border-b-[rgba(0,255,255,.37)] w-[219px] uppercase md:w-full sm:">
          <div className="flex justify-center text-[16px] font-bold pt-2 pb-1 px-1">
            TRAP N TRUST | BALLTRAP | Friday 22.09.23
          </div>
        </div>
        <div className="px-1 py-1 ">
          <div className="uppercase text-[12px] font-bold">Khu 13</div>
          <div className="text-[10px] flex text-[rgba(0,255,255,.37)]">
            <CalendarMonthIcon
              sx={{
                fontSize: '12px',
                color: 'rgba(0,255,255,.37)',
              }}
            />
            <div>Thứ 6, 25 tháng 8, 2023</div>
            <div className="mx-1">|</div>
            <div>
              <HeadphonesRoundedIcon
                sx={{
                  fontSize: '12px',
                  color: 'rgba(0,255,255,.37)',
                }}
              />
            </div>
            <div>Trap</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default EventItem