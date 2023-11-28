'use client'

import PermPhoneMsgSharpIcon from '@mui/icons-material/PermPhoneMsgSharp'
import SmartphoneSharpIcon from '@mui/icons-material/SmartphoneSharp'
import LoginSharpIcon from '@mui/icons-material/LoginSharp'
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp'
import Link from 'next/link'
import TemporaryDrawer from '@/app/components/Elements/drawer-nav'
import { useEffect, useState } from 'react'
import SocialNetwork from '@/app/components/Elements/social-network'

function LayoutPage() {
  const [heightScroll, setHeightScroll] = useState<number>(0)
  useEffect(() => {
    const handleScroll: EventListener = () => {
      setHeightScroll(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [heightScroll])

  console.log(heightScroll)

  return (
    <div
      className={`${
        heightScroll > 30 ? ' transition-all duration-3000 bg-[rgba(7,7,7,.65)] fixed ease-in-out z-[9999]' : ''
      } flex flex-col justify-center w-full items-center z-[999]`}
    >
      <div className=" w-[1214px] max-[1214px]:w-full">
        <div
          className={`${
            heightScroll > 30
              ? 'hidden transition-[ .3s]'
              : 'flex  h-[35px] items-center p-[18px]'
          }`}
        >
          <div className="w-full  text-[12px]">
            <div className="flex ">
              <div>
                <PermPhoneMsgSharpIcon
                  sx={{
                    fontSize: '12px',
                  }}
                />{' '}
                0797739959
              </div>{' '}
              <div className="ml-4">
                <SmartphoneSharpIcon
                  sx={{
                    fontSize: '12px',
                  }}
                />{' '}
                0797739959
              </div>
            </div>
          </div>
          <div className="flex text-[12px] w-[300px]">
            <div>
              <LoginSharpIcon
                sx={{
                  fontSize: 12,
                }}
              />{' '}
              Đăng nhập
            </div>
            <div className="ml-3">/</div>
            <div className="ml-3">
              <PersonAddAltSharpIcon
                sx={{
                  fontSize: 12,
                }}
              />{' '}
              Đăng ký
            </div>
          </div>
        </div>

        <div className=
        {`${heightScroll > 30 ? 'h-[70px]' : 'h-[100px]'} w-full px-[20px] flex items-center justify-between`}
        >
          <Link
            href={'/'}
            className="text-[30px]  tracking-tighter uppercase font-logo max-md:text-[20px]"
          >
            Vietnamtopclub
          </Link>

          <div className="flex items-center">
            <div className="max-lg:hidden">
              <SocialNetwork />
            </div>
            <TemporaryDrawer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutPage
