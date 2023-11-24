import { DateRange } from '@mui/icons-material'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function FormDetail() {
  const [startDate, setStartDate] = useState<Date | null>()

  return (
    <div className="border-[1px] w-[300px] max-lg:w-[600px] max-md:w-[500px] max-sm:w-[400px]  my-8 mx-8 ">
      <div className="flex flex-col items-center justify-center py-1 mt-2">
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Chọn ngày"
          className="w-[200px] max-lg:w-[400px] max-md:w-full  border-b-[1px] rounded-none text-white bg-transparent mt-2"
          showIcon
          minDate={new Date()}
          scrollableYearDropdown
        />
        <div className='mt-2'>
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Chọn thời gian "
            dateFormat="HH:mm"
            showTimeSelect
            showTimeSelectOnly
            className="w-[200px] max-lg:w-[400px] max-md:w-full py-1 bg-transparent border-b-[1px] mt-2"
            showIcon
          />
        </div>
        <div className='mb-2 text-[#CCCCCC] mt-2'>
          <select id="cars" className='w-[200px] max-md:w-[230px] max-lg:w-[400px]  px-5 py-1 bg-transparent border-b-[1px] pt-3'>
          <option value="" disabled selected className=''>Đặt số người</option>
            <option value="volvo">1</option>
            <option value="saab">2</option>
            <option value="vw">3</option>
            <option value="vw">4</option>
            <option value="vw">5</option>
           
          </select>
        </div>
        <div className="border-none max-lg:w-[400px]  max-md:w-[300px] bg-white text-[16px] text-black py-1 px-4 my-1 w-[200px] text-center font-bold hover:bg-gray-400 mt-4">
          Đặt bàn ngay
        </div>
        <div className='text-[#CCCCCC] mt-3 mb-4'>Đặt bàn miễn phí (*)</div>
      </div>
    </div>
  )
}
export default FormDetail
