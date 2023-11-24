import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PlaceIcon from '@mui/icons-material/Place'

function IntroBar() {
  return (
    <div className='mt-5 w-full justify-center flex flex-col max-lg:w-[80%] max-sm:w-full '>
      <div className="text-[35px] uppercase font-bold">ĐÀO HOUSE SAIGON</div>
      <div className="flex mt-1 ">
        <Stack spacing={1}>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </Stack>
        <div className="flex text-[#CCCCCC] mx-2">
          <VisibilityOutlinedIcon
            sx={{
              fontSize: '18px',
              marginTop: '4px',
            }}
          />
          <div>15283 Lượt xem</div>
        </div>
        <div className="flex text-[#CCCCCC] mx-2">
          <FavoriteBorderOutlinedIcon
            sx={{
              fontSize: '18px',
              marginTop: '4px',
            }}
          />
          <div>Yêu thích</div>
        </div>
      </div>
      <div className="flex mt-2">
        <div>
          <PlaceIcon
            sx={{
              fontSize: '18px',
            }}
          />
        </div>
        <div>
          Tầng 26 -27, số 74 Nguyễn Thị Minh Khai, Phường 6, Quận 3, Thành phố
          Hồ Chí Minh
        </div>
      </div>
      <div className='mt-[5px] text-[20px] text-[#eb1282] font-bold'>
        $ 260.000 VND - 19.990.000 VND
      </div>
    </div>
  )
}

export default IntroBar
