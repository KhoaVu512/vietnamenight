import { DateRange } from '@mui/icons-material'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function FormDetail() {
  const [startDate, setStartDate] = useState<Date | null>()

  return (
    <div className="border-[1px] w-[300px]  my-8">
      <div className="flex flex-col items-center justify-center py-1">
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Chon ngay"
          className="w-[200px]  border-b-[1px] rounded-none text-white bg-transparent"
          showIcon
          minDate={new Date()}
          scrollableYearDropdown
        />
        <div>
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Chon thoi gian"
            dateFormat="HH:mm"
            showTimeSelect
            showTimeSelectOnly
            className="w-[200px] py-1 bg-transparent border-b-[1px]"
            showIcon
          />
        </div>
        <div className='border-none bg-white text-[16px] text-black py-1 px-4 my-1 w-[200px] text-center font-bold hover:bg-gray-400'>Dat ban ngay</div>
      </div>
    </div>
  )
}
export default FormDetail
