import * as React from 'react'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Link from 'next/link'

import PrivatePartyItem from '@/app/components/Home/private-party-item'

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

function PrivateParty() {
  return (
    <div>
      <div className="w-[1214px] mt-16 max-lg:w-full">
        <div className="flex w-[1214px] mt-8 max-lg:w-full">
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
                <div className="border-[2px] h-[40px] bg-white text-black text-[22px] font-bold tracking-tighter px-3 font-sans uppercase  max-md:h-[80px]  mb-4 ">
                  TỔ CHỨC SỰ KIỆN <br className='md:hidden'/>  PRIVATE PARTY  hàng đầu
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
        <div className="flex justify-center font-medium mt-8 text-[14px] text-[#EEEEEE] px-8">
          Vietnam Nightlife giới thiệu những nghệ sĩ nổi tiếng được yêu thích
          trong và ngoài nước có gu âm nhạc cá tính và phong cách sống nghệ
          thuật.
        </div>
        <div className="flex justify-center flex-wrap">
          <PrivatePartyItem />
          <PrivatePartyItem />
          <PrivatePartyItem />
        </div>
      </div>
      <Link href={'#'} className="text-[15px] tracking-tighter flex justify-end font-semibold mt-10 mx-12">
        {' '}
        {'>'}
        {'>'}Xem thêm
      </Link>
    </div>
  )
}

export default PrivateParty
