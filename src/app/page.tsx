'use client'

import AlertDialogSlide from '@/app/components/Elements/alert'
import PageHome from '@/app/home/page-home'
import { useState } from 'react'

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
