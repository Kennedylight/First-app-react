import axios from "axios";
import { useState } from "react";


const Create = () => {
    const [FormData , setFormData] = useState({
      address:"",
      bedrooms :null,
         
      created_at :new Date().toISOString(),
            kitchens:null,
      living_rooms:null,
      toilets:null,
      price:"",      
      status:"available",
      
      
    })
    const handleChange = (e) => {
      setFormData({
          ...FormData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    delete FormData.id;

    axios
    .post(`https://real-estate-api-64hf.onrender.com/api/properties` , FormData)
    .then((res) => {
      setFormData({
        address:"",
      bedrooms :null,
      kitchens:null,
      living_rooms:null,
      toilets:null,
      price:"",      
      status:"available"
      });
      console.log("Réponse du serveur :", res.data);
    });
      
        
    
};

  return (
    <div>
      <div id="content" role="main" className="mx-auto p-6 w-[40%]">
        <div className="bg-white dark:bg-gray-800 shadow-lg mt-7 border-2 border-indigo-300 dark:border-gray-700 rounded-xl">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block font-bold text-gray-800 dark:text-white text-2xl">
                Create New Appartement
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                Here you will create newappartement
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="gap-y-4 grid">
                  <div>
                    <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">
                      Type
                    </label>
                    <div className="relative">
                      <input
                        type="text" required
                        id="type"
                        name="type" value={FormData.type} onChange={handleChange}
                        className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm"
                        
                      />
                    </div>

                    <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">
                      bedrooms
                    </label>
                    <div className="relative">
                      <input
                        type="number" required
                        id="bedrooms" value={FormData.bedrooms} onChange={handleChange}
                        name="bedrooms"
                        className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm"
                       
                      />
                    </div>
                    <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">
                      kitchens
                    </label>
                    <div className="relative">
                      <input
                        type="number" required
                        value={FormData.kitchens} onChange={handleChange}
                        id="kitchens"
                        name="kitchens"
                        className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm"
                        
                      />
                    </div>
                    <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">
                      living-rooms
                    </label>
                    <div className="relative">
                      <input
                        type="number" required
                        value={FormData.living_rooms} onChange={handleChange}
                        id="living_rooms"
                        name="living_rooms"
                        className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm"
                       
                      />
                    </div>
                    <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">
                      toilets
                    </label>
                    <div className="relative">
                      <input
                        type="number" required
                        value={FormData.toilets} onChange={handleChange}
                        id="toilets"
                        name="toilets"
                        className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm"
                        
                      />
                    </div>
                    <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">
                      price
                    </label>
                    <div className="relative">
                      <input
                        type="number" required
                        value={FormData.price} onChange={handleChange}
                        id="price"
                        name="price"
                        className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm"
                      
                      />
                    </div>
                    <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">
                      address
                    </label>
                    <div className="relative">
                      <input
                        type="text" required
                        value={FormData.address} onChange={handleChange}
                        id="address"
                        name="address"
                        className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm"
                       
                      />
                    </div>
                    <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">
                      status
                    </label>
                    <div className="relative">
                      <input
                        type="text" required
                        value={FormData.status} onChange={handleChange}
                        
                        id="status"
                        name="status"
                        className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm"
                       
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-3 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 font-semibold text-white text-sm transition-all"
                  >
                    Create Appartment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <p className="flex justify-center items-center mt-3 divide-x divide-gray-300 dark:divide-gray-700 text-center">
          <a
            className="inline-flex items-center gap-x-2 pr-3.5 text-gray-600 hover:text-blue-600 dark:hover:text-gray-200 dark:text-gray-500 text-sm decoration-2 hover:underline"
            href="#"
            target="_blank"
          >
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View Github
          </a>
          <a
            className="inline-flex items-center gap-x-2 pl-3 text-gray-600 hover:text-blue-600 dark:hover:text-gray-200 dark:text-gray-500 text-sm decoration-2 hover:underline"
            href="#"
          >
            Contact us!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Create;
