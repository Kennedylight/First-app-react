import axios from "axios";
import { useState } from "react";


const Create = () => {
  const [FormData, setFormData] = useState({
    address: "",
    bedrooms: null,

    created_at: new Date().toISOString(),
    kitchens: null,
    living_rooms: null,
    toilets: null,
    price: "",
    status: "available",


  })
  const [Alert, setAlert] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = ["price", "toilets", "kitchens", "bedrooms", "living_rooms"];
    setFormData((prevData) => ({
    ...prevData,
    [name]: numericFields.includes(name) ? Number(value) || null : value, // Convertit en nombre ou null
  }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    delete FormData.id;

    axios
      .post(`https://real-estate-api-64hf.onrender.com/api/properties`, FormData)
      .then((res) => {
        setFormData({
          address: "",
          bedrooms: null,
          kitchens: null,
          living_rooms: null,
          toilets: null,
          price: "",
          status: "available"
        });
        setAlert(true)
        setInterval(()=>{
          setAlert(false)
        },2000)
        console.log("Réponse du serveur :", res.data);
      });



  };

  return (
    <>
     {
    Alert && 
    <div className="bg-green-200 p-4 border-green-600 border-l-4 text-green-600" role="alert">
    <p className="font-bold">
        Success
    </p>
    <p>
        congratulated , appartment created with sucess.
    </p>
</div>
   }
   <div>
  <div id="content" role="main" className="mx-auto p-6 w-[60%]">
    <div className="bg-white dark:bg-gray-800 shadow-lg mt-7 border-2 border-indigo-300 dark:border-gray-700 rounded-xl">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block font-bold text-gray-800 dark:text-white text-2xl">Create New Appartement</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Here you will create new appartement</p>
        </div>

        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="gap-4 grid grid-cols-2">
              <div>
                <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">Type</label>
                <select id="type" name="type" value={FormData.type} onChange={handleChange} className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm">
                  <option value="Appartement">Appartement</option>
                  <option value="Studio">Studio</option>
                  <option value="Seireteih">Seireteih</option>
                  <option value="Wecomundo">Wecomundo</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">Bedrooms</label>
                <input type="number" required id="bedrooms" name="bedrooms" value={FormData.bedrooms} onChange={handleChange} className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm" />
              </div>
              <div>
                <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">Kitchens</label>
                <input type="number" required id="kitchens" name="kitchens" value={FormData.kitchens} onChange={handleChange} className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm" />
              </div>
              <div>
                <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">Living Rooms</label>
                <input type="number" required id="living_rooms" name="living_rooms" value={FormData.living_rooms} onChange={handleChange} className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm" />
              </div>
              <div>
                <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">Toilets</label>
                <input type="number" required id="toilets" name="toilets" value={FormData.toilets} onChange={handleChange} className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm" />
              </div>
              <div>
                <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">Price</label>
                <input type="number" required id="price" name="price" value={FormData.price} onChange={handleChange} className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm" />
              </div>
              <div>
                <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">Address</label>
                <input type="text" required id="address" name="address" value={FormData.address} onChange={handleChange} className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm" />
              </div>
              <div>
                <label className="block mb-2 ml-1 font-bold dark:text-white text-sm">Status</label>
                <select id="status" name="status" value={FormData.status} onChange={handleChange} className="block shadow-sm px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm">
                  <option value="available">Available</option>
                  <option value="under construction">under construction</option>
                  <option value="occupied">Occupied</option>
                </select>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button type="submit" className="inline-flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-3 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 font-semibold text-white text-sm transition-all">
                Create Appartment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Create;
