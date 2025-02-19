const Detail = () => {
  return (
    <>
     <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex md:flex-row flex-col -mx-4">
            <div className="md:flex-1 px-4">
                <div className="bg-gray-300 dark:bg-gray-700 mb-4 rounded-lg h-[460px]">
                    {/* <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image"> */}
                </div>
               
            </div>
            <div className="md:flex-1 space-y-4 px-4">
                <h2 className="mb-2 font-bold text-gray-800 dark:text-white text-2xl">Appartment</h2>
                <p className="invisible mb-4 text-gray-600 dark:text-gray-300 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div className="flex justify-between w-full">
                  <div className="">
                    <p className="font-bold text-[40px]">4</p>
                    <p className="text-[18px]">Beds</p>
                  </div>
                  <div className="">
                    <p className="font-bold text-[40px]">4</p>
                    <p className="text-[18px]">Baths</p>
                  </div>
                  <div className="">
                    <p className="font-bold text-[40px]">4</p>
                    <p className="text-[18px]">Toilets</p>
                  </div>
                </div>
                <div className="flex mb-4">
                    <div className="mr-4">
                      
                        <span className="font-bold text-[30px] text-black">$29.99</span>
                    </div>
                   
                </div>
                
                
                
            </div>
        </div>
    </div>
</div>

    </>
  );
};
export default Detail;
