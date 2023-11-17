import Link from 'next/link'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded'
function EventItem() {
  return (
    <Link href="#">
      <div className="w-[219px] h-[458px] mt-12">
        <img
          src="https://vietnamnightlife.com/uploads/images/2023/09/1695028124-single_product1-khu13.png.webp"
          alt="image-event"
          className="h-[312px]"
        />
        <div className="border-b-[1px] border-b-[rgba(0,255,255,.37)] w-[219px] uppercase">
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