import axios from "axios";
import { useEffect,  useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    
    var params = useParams()
    const {id} = params
    console.log(id , "voici l'id")    
    const [Logement, setLogement] = useState({})
    console.log("logement" , Logement)

    useEffect(() => {
        axios
        .get(`https://real-estate-api-64hf.onrender.com/api/properties/${id}`)
        .then((res) => {
          console.log("yo");
          setLogement(res.data);
          })
        .catch((error) => {
          console.error("Erreur lors de la requête API :", error);
        });
        
      }, []);
        // useEffect(()=>{
        //     if(!Logement){
        //     console.log("je suis dedans ")
        //     axios.get(`https://real-estate-api-64hf.onrender.com/api/properties/${id}`)
        //     .then((res)=>{
        //         console.log(res.data)
        //     })
        // }
        // })
   
      
    
    
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
                                    <p className="font-bold text-[40px]">{Logement.bedrooms}</p>
                                    <p className="text-[18px]">Beds</p>
                                </div>
                                <div className="">
                                    <p className="font-bold text-[40px]">{Logement.toilets}</p>
                                    <p className="text-[18px]">Baths</p>
                                </div>
                                <div className="">
                                    <p className="font-bold text-[40px]">{Logement.living_rooms}</p>
                                    <p className="text-[18px]">living_rooms</p>
                                </div>
                                <div className="">
                                    <p className="font-bold text-[40px]">{Logement.kitchens}</p>
                                    <p className="text-[18px]">kitchens</p>
                                </div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="mr-4">

                                    <span className="font-bold text-[30px] text-black">{Logement.price} FCFA</span>
                                </div>
                                <div>
                                    <button className="px-6 py-1 border border-black rounded-full">spilt option</button>
                                </div>

                            </div>
                            <div className="flex justify-between bg-gray-300 py-3 rounded-lg w-full h-32">
                                <div className="flex px-4 w-[40%]">
                                    <div className="space-y-2">
                                        <div className="bg-black rounded-full w-12 h-12"></div>
                                       <div>
                                       <p className="font-semibold">Kennedy</p>
                                       <p className="font-semibold">Kouonga</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="flex justify-end px-4 w-[40%] h-full">
                                    <div className="space-y-10">
                                      <p>agent</p>
                                      <button className="px-6 py-1 border border-black rounded-full">spilt option</button>

                                    </div>
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
