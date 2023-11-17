import * as React from 'react'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import EventItem from '@/app/components/Home/event-item'

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
  divider: {
    // Theme Color, or use css color in quote
    background: theme.palette.divider,
  },
}))

function EventHome() {
  return (
    <div className="w-[1214px] mt-16">
      <div className="flex w-[1214px] mt-8">
        <Root>
          <Divider
            sx={{
              '&::before, &::after': {
                borderColor: 'white',
                border: '1px dashed rgba(0,255,255,.37)',
              },
            }}
            className="flex justify-center items-center w-full h-[1px]"
          >
            <div className="flex">
              <div
                className="w-0 h-0 
  border-t-[20px] border-t-transparent
  border-r-[25px] border-r-white
  border-b-[20px] border-b-transparent"
              ></div>
              <div className="border-[2px] h-[40px] bg-white text-black text-[22px] font-bold tracking-tighter px-3 font-sans">
                Sự kiện
              </div>
              <div
                className="w-0 h-0 
  border-t-[20px] border-t-transparent
  border-l-[25px] border-r-white
  border-b-[20px] border-b-transparent"
              ></div>
            </div>
          </Divider>
        </Root>
      </div>
      <div className="flex justify-center mt-8 text-[14px]">
        Đừng bỏ lỡ những events hấp dẫn diễn ra hằng ngày
      </div>
      <div className="flex flex-wrap justify-between">
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </div>

      <div className='text-[15px] tracking-tighter flex justify-end font-semibold mt-10'> {'>'}{'>'}Xem thêm</div>
    </div>
  )
}
export default EventHome
