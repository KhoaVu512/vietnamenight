import EventItem from '@/app/components/Home/event-item'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
function EventDetail() {
  return (
    <div className="max-lg:w-full ">
      <div className="border-b-[1px] mt-2 w-full my-4  max-lg:justify-center max-lg:flex ">
        <div className="inline-block px-[14px] mx-[20px] bg-[#000] relative top-[13px] text-[20px] font-bold ">
          {' '}
          <CalendarTodayOutlinedIcon /> EVENT LIÊN QUAN
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <EventItem
          width="150px"
          height="312px"
        />
        <EventItem
          width="150px"
          height="312px"
        />
      </div>
      <div className="border-b-[1px] mt-2 w-full my-4 max-lg:justify-center max-lg:w-full flex">
        <div className="inline-block px-[14px] mx-[20px] bg-[#000] relative top-[13px] text-[20px] font-bold ">
          {' '}
          <CalendarTodayOutlinedIcon /> Thông tin khác
        </div>
      </div>
      <div className="px-6 text-[15px] w-full flex flex-col justify-center  max-lg:w-[800px] max-md:w-[600px] max-sm:w-[480px] max-md:mx-4">
        <div className="flex my-1">
          {' '}
          <span className="text-[#00FFFF] font-bold mr-1">
            THỜI GIAN PHỤC VỤ:
          </span>
          <div className="font-semi">17:00 PM - 2:00 AM</div>
        </div>
        <div className="flex my-1">
          {' '}
          <span className="text-[#00FFFF] font-bold mr-1">TRANG PHỤC:</span>
          <div className="font-semi">Sang trọng/Lịch sự</div>
        </div>
        <div className="flex my-1">
          {' '}
          <span className="text-[#00FFFF] font-bold mr-1">ĐÊM ĐÔNG KHÁCH:</span>
          <div className="font-semi">Mỗi đêm</div>
        </div>{' '}
        <div className="flex my-1">
          {' '}
          <span className="text-[#00FFFF] font-bold mr-1">SỨC CHỨA:</span>
          <div className="font-semi">500</div>
        </div>
        <div className="flex my-1">
          {' '}
          <span className="text-[#00FFFF] font-bold mr-1">HÌNH THỨC:</span>
          <div className="font-semi">Nhà hàng, Club, Lounge, Sky Bar</div>
        </div>{' '}
        <div className="flex my-1">
          {' '}
          <span className="text-[#00FFFF] font-bold mr-1">THỂ LOẠI NHẠC:</span>
          <div className="font-semi">Top 40, House, EDM </div>
        </div>
        <div className="flex my-1">
          {' '}
          <span className="text-[#00FFFF] font-bold mr-1">
            ĐỐI TƯỢNG KHÁCH:
          </span>
          <div className="font-semi">
            Asian, Local, Ballers, Classy, Chill, Celebs, Models{' '}
          </div>
        </div>
        <div className="flex my-1">
          {' '}
          <span className="text-[#00FFFF] font-bold mr-1">THỨC UỐNG:</span>
          <div className="font-semi">
            Cocktails, Long Drinks, phục vụ rượu chai{' '}
          </div>
        </div>
        <div>
          Đào House Saigon được ví như một cung đình Huế thu nhỏ giữa trung tâm
          Sài Gòn, tọa lạc tại tầng 26 & 27 Centec Tower, số 72 Nguyễn Thị Minh
          Khai, quận 3. Đào House đem đến cho người dân Sài Thành những trải
          nghiệm thú vị về không gian giải trí và ẩm thực Fusion Cố Đô. Hai tầng
          của Đào House được sử dụng với mục đích khác nhau. Một tầng là Sky Bar
          với tên gọi Vọng Nguyệt Lâu có hướng nhìn bao quát toàn cảnh Sài Gòn.
          Tầng còn lại là In-House Club có tên là Vũ Đài phục vụ những món ăn
          Tapas mang hơi hướng miền Trung được cải biên bởi các đầu bếp hàng
          đầu. Bên cạnh trải nghiệm ẩm thực, khách hàng tới với Đào House còn có
          cơ hội thưởng thức các chương trình nghệ thuật giải trí mang âm hưởng
          văn hoá Ả Đào. Sự pha trộn giữa nét truyền thống và hiện đại đã tạo
          nên một tổ hợp giải trí có 1-0-2 ngay tại trung tâm Quận 1.
        </div>
        <iframe
          width="1220"
          height="450"
          src="https://www.youtube.com/embed/XM2vhidPvIY"
          title="Dao House Saigon | Best Rooftop Bar in Ho Chi Minh City | Book Your Table Now"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="mt-4 max-lg:w-[800px] max-md:w-[500px]  max-md:h-[240px]  max-sm:w-[350px] "
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default EventDetail
