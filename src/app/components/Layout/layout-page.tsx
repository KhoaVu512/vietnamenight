import PermPhoneMsgSharpIcon from '@mui/icons-material/PermPhoneMsgSharp'
import SmartphoneSharpIcon from '@mui/icons-material/SmartphoneSharp'
import LoginSharpIcon from '@mui/icons-material/LoginSharp'
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp'
import Link from 'next/link'

function LayoutPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex  w-[1214px] h-[35px] items-center justify-around">
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
      <div className="w-full h-[100px] px-[20px] flex items-center justify-between">
        <Link href={'/'}>
          <img
            src="https://vietnamnightlife.com/uploads/images/2019/12/1576826698-single_info36-logo.png.webp"
            alt=""
            className="w-[100px] h-[80px]"
          />
        </Link>
        <div className='text-[30px] font-bold tracking-tighter'>VIETNAM NIGHTLIFE GUIDE</div>
        <div>
          ---
        </div>
      </div>
      
    </div>
  )
}

export default LayoutPage
