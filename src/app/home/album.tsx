import * as React from 'react'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import AlbumItem from '@/app/components/Home/album-item'
import '@/app/assest/style/style.css'

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

function Album() {
  return (
    <div>
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
                <div className="border-[2px] h-[40px] bg-white text-black text-[22px] font-bold tracking-tighter px-3 font-sans uppercase">
                  ALBUM ẢNH
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
        <div className="flex justify-center font-medium mt-8 text-[14px] text-[#EEEEEE]">
          Cập nhật những hình ảnh đẹp nhất của khách hàng
        </div>
        <div className="flex justify-between flex-wrap">
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
        </div>
      </div>
      <div className='flex justify-center'>
        <Link href={'/'} className="btn-album">Xem thêm {'-->'}</Link>
      </div>
    </div>
  )
}

export default Album
