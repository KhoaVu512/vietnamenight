'use client'
import CustomizedDialogs from '@/app/components/Elements/alert'
import PageHome from '@/app/home/page-home'
import { useState } from 'react'

function Page() {

  const [open, setOpen] = useState(true);

  return (
    <div className=''>
      <PageHome />
      <CustomizedDialogs />
     
    </div>
  )
}

export default Page
