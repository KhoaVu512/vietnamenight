function BannerLocation() {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center p-12 max-md:px-4">
        <div>
          <img
            src="https://i.pinimg.com/564x/ae/17/d8/ae17d8585b8d214ea2398b3ab17f1e31.jpg"
            alt=""
          />
          <div className="text-center pt-2 uppercase">
            Thành phố hồ chí minh
          </div>
        </div>
        <div className="flex mt-4">
          <div className="mx-4 max-lg:mx-0">
            <img
              src="https://i.pinimg.com/474x/90/18/68/901868d5cd433ee33ebff26a41af6948.jpg"
              alt=""
              className="w-[300px] h-[250px] max-lg:h-[150px] max-lg:w-[225px] max-md:w-[200px] max-md:h-[75px] "
            />
            <div className="text-center pt-2 uppercase">Hà Nội</div>
          </div>{' '}
          <div className="mx-4">
            <img
              src="https://i.pinimg.com/474x/11/f6/e2/11f6e265c326c932f98ace2572708e43.jpg"
              alt=""
              className="w-[300px] h-[250px] max-lg:h-[150px] max-lg:w-[225px] max-md:w-[200px] max-md:h-[75px] "
            />
            <div className="text-center pt-2 uppercase">Đà nẵng</div>
          </div>{' '}
          <div className="mx-4">
            <img
              src="https://i.pinimg.com/474x/0c/c3/0b/0cc30b1475ad64ad2551ac2fda3abd77.jpg"
              alt=""
              className="w-[300px] h-[250px] max-lg:h-[150px] max-lg:w-[225px] max-md:w-[200px] max-md:h-[75px] "
            />
            <div className="text-center pt-2 uppercase">Nha trang</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerLocation
