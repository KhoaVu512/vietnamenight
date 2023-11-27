'use client'

import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import   './Alert.css'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  )
})

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(true)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby={` alert-dialog-slide-description`
  }
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
        
          <div className="flex w-full ">
            <div className='max-lg:hidden'>
              <img
                src="https://vietnamnightlife.com/uploads/images/2020/04/1585710619-multi_info361-popup.png.webp"
                alt="banner-popup" className='w-[476px] h-[476px]'
              />
            </div>
            <div className="bg-black px-4 max-w-[550px] max-h-[700px] flex items-center max-lg:w-full max-lg:max-w-none max-lg:py-12">
              <div className="flex flex-col justify-center items-center">
                <div className="items-center mb-4">
                  <img
                    src="https://vietnamnightlife.com/uploads/images/2019/12/1576826698-single_info36-logo.png.webp"
                    alt=""
                    className=" w-[88px] h-[75px]"
                  />
                </div>
                <div className="text-white text-[30px]  text-center font-bold uppercase tracking-tighter	leading-[35px] px-4 mb-4">
                  CHÀO MỪNG BẠN ĐẾN VỚI VIETNAM NIGHTLIFE
                </div>
                <div className=' uppercase text-[14px] text-[#B0B0B0] text-center tracking-tighter	mb-4'>
                ĐĂNG KÝ ĐỂ NHẬN TIN VÀ ƯU ĐÃI MỚI NHẤT TỪ CHÚNG TÔI
                </div>
                <div className='w-full flex justify-center'>
                  <input type="text" className='input-alert w-[80%] bg-transparent border-b-[1px] border-[#CCC] focus:outline-none text-white py-1 px-1 placeholder:text-[14px] placeholder:px-1 :focus:border-blue-500 mb-6' placeholder='Email'/>
                </div>
                <button className='w-[200px] bg-white text-[16px] font-bold rounded-2xl py-3 mb-8  uppercase'>subscribe</button>
                <div className='text-[14px] text-[#CCC]'>
                Tôi đồng ý nhận tin và ưu đãi mới nhất
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
