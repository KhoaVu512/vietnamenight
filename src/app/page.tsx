'use client'

import AlertDialogSlide from '@/app/components/Elements/alert'
import PageHome from '@/app/home/page-home'
import { useState } from 'react'
import '@/assets/styles/style.css'

function Page() {

  const [open, setOpen] = useState(true);

  return (
    <div className=''>
      <PageHome />
      <AlertDialogSlide />
    </div>
  )
}

export default Page
