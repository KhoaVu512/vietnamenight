import ContactEmergencyTwoToneIcon from '@mui/icons-material/ContactEmergencyTwoTone'
import RoomSharpIcon from '@mui/icons-material/RoomSharp'
import PermPhoneMsgSharpIcon from '@mui/icons-material/PermPhoneMsgSharp'
import SmartphoneSharpIcon from '@mui/icons-material/SmartphoneSharp'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

function Footer() {
  return (
    <div className="w-full flex justify-center max-lg:w-full">
      <div className="flex w-[1214px] max-lg:w-full max-lg:flex-col">
        <div className="flex flex-col w-[416px] h-[1px] mt-5 px-[18px] max-lg:w-full max-lg:h-[140px] max-md:h-[180px]">
          <div className="content-footer text-[13px] font-bold uppercase pb-[4px]">
            <ContactEmergencyTwoToneIcon
              sx={{
                fontSize: '16px',
              }}
              className="mb-[2px] mr-[4px]"
            />
            Liên hệ
          </div>
          <div className="mt-3">
            <div className="text-[13px] font-bold uppercase">
              {' '}
              Vietnam nightlife
            </div>
            <div className="text-[13px] my-1">
              <RoomSharpIcon
                sx={{
                  fontSize: '12px',
                }}
                className="mr-[2px] mb-1"
              />{' '}
              42 Đ. Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
            </div>{' '}
            <div className="text-[13px] my-1">
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
            </div>{' '}
            <div className="text-[13px] my-1">
              <RoomSharpIcon
                sx={{
                  fontSize: '12px',
                }}
                className="mr-[2px] mb-1"
              />{' '}
              Vietnamnightlife2019@gmail.com
            </div>
            <div className="text-[13px] my-1">
              <RoomSharpIcon
                sx={{
                  fontSize: '12px',
                }}
                className="mr-[2px] mb-1"
              />{' '}
              vietnamnightlife.comm
            </div>
          </div>
        </div>{' '}
        <div className='flex max-lg:h-[300px] max-md:h-[460px] max-lg:flex-wrap'>
          <div className="flex flex-col w-[333px] h-[1px] mt-5 px-[18px]">
            <div className="content-footer text-[13px] font-bold uppercase pb-[4px]">
              <ContactEmergencyTwoToneIcon
                sx={{
                  fontSize: '16px',
                }}
                className="mb-[2px] mr-[4px]"
              />
              Danh muc
            </div>
            <div className="mt-3">
              <div className="text-[13px] my-1">
                <div className="flex w-[170px] justify-between">
                  <div className="hover:text-[#888] cursor-pointer">
                    Trang chu
                  </div>
                  <div className="hover:text-[#888] cursor-pointer">
                    Gioi thieu
                  </div>
                </div>
                <div className="flex w-[235px] justify-between mt-[6px]">
                  <div className="hover:text-[#888] cursor-pointer">
                    Su kien
                  </div>
                  <div className="hover:text-[#888] cursor-pointer">
                    Combo an choi sanh <br /> dieu ve dem
                  </div>
                </div>
                <div className="flex w-[170px] justify-between mt-[6px]">
                  <div className="hover:text-[#888] cursor-pointer">
                    Nightlife Stories
                  </div>
                  <div className="hover:text-[#888] cursor-pointer">
                    Album anh
                  </div>
                </div>
                <div>
                  <div className="hover:text-[#888] cursor-pointer">
                    Lien he
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[333px] h-[1px] mt-5 px-[18px]">
            <div className="content-footer text-[13px] font-bold uppercase pb-[4px]">
              <ContactEmergencyTwoToneIcon
                sx={{
                  fontSize: '16px',
                }}
                className="mb-[2px] mr-[4px]"
              />
              Ho tro
            </div>
            <div className="mt-3">
              <div className="text-[13px] my-1">
                <div className="flex flex-col w-[200px] ">
                  <div className="hover:text-[#888] cursor-pointer">
                    {'>'} Ho tro
                  </div>
                  <div className="hover:text-[#888] cursor-pointer">
                    {'>'} Chinh sach quyen rieng tu
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[333px] h-[1px] mt-5 px-[18px] max-lg:mt-10 max-md:mt-0">
            <div className="content-footer text-[13px] font-bold uppercase pb-[4px]">
              <ContactEmergencyTwoToneIcon
                sx={{
                  fontSize: '16px',
                }}
                className="mb-[2px] mr-[4px]"
              />
              Mang xa hoi
            </div>
            <div className="mt-3">
              <div className="text-[13px] my-1">
                <div className="flex flex-col w-[200px] ">
                  <div className="hover:text-[#888] cursor-pointer">
                    <FacebookIcon className="text-[blue]" />
                    <InstagramIcon className="text-[#9e95478f]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
