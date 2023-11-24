import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

import * as React from 'react'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))

function Rate() {
  const [progress, setProgress] = React.useState(97)

  return (
    <div className='my-8'>
      <div className="border-b-[1px] text-[20px] font-bold max-md:justify-center max-md:flex">
        Đánh giá của khách hàng
      </div>
      <div className="w-full flex max-lg:flex-col max-md:mx-12">
        <div className="w-[50%] mt-4 max-md:w-[600px] max-sm:w-[400px] max-md:justify-center ">
          <div className="text-[20px] font-bold">XẾP HẠNG ĐÁNH GIÁ CHUNG</div>
          <div className="text-[#999999] mt-2">
            Chỉ những thực khách đã dùng bữa tại nhà hàng hoặc đã sử dụng qua
            dịch vụ của chúng tôi bạn mới có thể đánh giá tại đây
          </div>
          <div className="flex mt-2 max-lg:justify-center">
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </Stack>
            <div className="text-[#999999] text-[12px] mt-1">
              4.7 {'(94.24%)'} 25 votes
            </div>
          </div>
          <div className="text-[18px] font-semibold mt-2">Tổng hợp đánh giá</div>
          <div className="flex ">
            <div className="flex flex-col items-center justify-center text-center w-[120px] h-[70px] border-r-[1px] border-[rgba(238,238,238,.2)]">
              {' '}
              <span>4</span> <span>Thức uống</span>
            </div>{' '}
            <div className="flex flex-col items-center justify-center text-center w-[120px] h-[70px] border-r-[1px] border-[rgba(238,238,238,.2)]">
              {' '}
              <span>4</span> <span>Thức uống</span>
            </div>{' '}
            <div className="flex flex-col items-center justify-center text-center w-[120px] h-[70px] border-r-[1px] border-[rgba(238,238,238,.2)]">
              {' '}
              <span>4</span> <span>Thức uống</span>
            </div>{' '}
            <div className="flex flex-col items-center justify-center text-center w-[120px] h-[70px] border-r-[1px] border-[rgba(238,238,238,.2)]">
              {' '}
              <span>4</span> <span>Thức uống</span>
            </div>{' '}
          </div>
        </div>
        <div className="w-[50%] flex flex-col mt-4">
          <div className="flex">
            <div className="mx-4 ">5</div>
            <Box sx={{ width: '100%' }}>
              <BorderLinearProgress
                variant="determinate"
                value={90}
                className="mt-[6px]"
              />
            </Box>
          </div>
          <div className="flex">
            <div className="mx-4 ">4</div>
            <Box sx={{ width: '100%' }}>
              <BorderLinearProgress
                variant="determinate"
                value={6}
                className="mt-[6px]"
              />
            </Box>
          </div>
           <div className="flex">
            <div className="mx-4 ">3</div>
            <Box sx={{ width: '100%' }}>
              <BorderLinearProgress
                variant="determinate"
                value={1}
                className="mt-[6px]"
              />
            </Box>
          </div> 
          <div className="flex">
            <div className="mx-4 ">2</div>
            <Box sx={{ width: '100%' }}>
              <BorderLinearProgress
                variant="determinate"
                value={0}
                className="mt-[6px]"
              />
            </Box>
          </div><div className="flex">
            <div className="mx-4 ">1</div>
            <Box sx={{ width: '100%' }}>
              <BorderLinearProgress
                variant="determinate"
                value={0}
                className="mt-[6px]"
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rate
