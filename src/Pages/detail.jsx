const Detail = () => {
  return (
    <>
     <div className="flex justify-center items-center w-full h-screen">
     <div className="flex bg-gray-700 dark:bg-gray-800 shadow-lg rounded-lg max-w-xs sm:max-w-2xl h-[50%]">
        <div className="p-2 sm:w-1/2">
          {/* <img className="rounded w-full h-60 sm:h-80 object-cover" src="https://i.pinimg.com/564x/41/c7/52/41c75274ffa14f3222691c0cbe3c1904.jpg" alt="Article" /> */}
        </div>
        <div className="flex flex-col justify-between p-2 sm:p-4 sm:w-1/2">
          <div>
            <a
              href="#"
              className="block sm:mt-2 font-semibold text-gray-50 hover:text-gray-600 dark:text-white text-2xl hover:underline"
            >
              Lorem rem facere
            </a>
           <div className="mt-2 text-gray-200 dark:text-gray-400 text-sm">
           <p >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              labore, cum rem facere obcaecati beatae sunt numquam architecto
              delectus dignissimos explicabo quod pariatur at consequatur sint
              esse aut Facere. <br /> Numquam architecto delectus dignissimos
            </p>
            <p>skdsl</p>
           </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="rounded-full w-10 h-10 object-cover"
                  src="https://i.pinimg.com/564x/1d/1e/16/1d1e16ad5227a9c726b61bd7cc4eca33.jpg"
                  alt="Avatar"
                />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-50 dark:text-gray-200"
                >
                  Tocino Code
                </a>
              </div>
              <span className="mx-1 text-gray-400 dark:text-gray-300 text-xs">
                21 SEP 2015
              </span>
              <span className="sm:left-12 relative text-gray-400 dark:text-gray-300 text-xs hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f2f2f2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};
export default Detail;
