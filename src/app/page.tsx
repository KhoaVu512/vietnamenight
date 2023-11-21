'use client'
import PageHome from '@/app/home/page'
import { useState } from 'react'

function Page() {

  const [open, setOpen] = useState(true);

  return (
    <div className=''>
      <PageHome />
     
    </div>
  )
}

export default Page
