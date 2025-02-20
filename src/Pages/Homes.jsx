import axios, { Axios } from "axios";
import { useEffect, useState, useLayoutEffect, useContext, useMemo } from "react";
import { AppContext } from "../App";
import { Link, useParams } from "react-router-dom";

const Homes = () => {

  const appContext = useContext(AppContext)
  console.log(appContext)
  const [Logement, setLogement] = useState([])
  const [Loaded, setLoaded] = useState(false)
  const [Alert, setAlert] = useState(false)
  const [Modal, setModal] = useState(false)
  const [id, setid] = useState(null)
  const [Somme, setSomme] = useState(0)
  
  function SommeTotal() {
    var somme = 0.0
    Logement.forEach(loge => {
      somme = somme + parseFloat(loge.price)
    })
    return somme
  }
  const Total = useMemo(() => {
    let sum = SommeTotal();

    console.log(sum)
  }, [Logement]);
  function  selectId(id){
    setid(id)
    setModal(true)
   
  }

  function handleDelete(id) {
    axios.delete(`https://real-estate-api-64hf.onrender.com/api/properties/${id}`)
      .then((res) => {
        console.log(res)
        setModal(false)
        let newLogement = Logement.filter(loge => loge.id != id);
        setLogement(newLogement)
      })
  }

  useLayoutEffect(() => {
    if (!Loaded) {
      axios.get(`https://real-estate-api-64hf.onrender.com/api/properties`).then((res) => {
         
        if (typeof res.data == "object" && res.data?.length > 0) {
          setTimeout(() => {
            console.log(res.data)
            setLoaded(true)
            
            setLogement(res.data)
            console.log(res.data)
          }, 2000)

        }

      })
    }

  })
  return (
    <>
    {
      Modal &&
      <div className="absolute flex justify-center items-center bg-black/60 w-[90%] h-full">
   <div className="relative bg-white shadow border rounded-lg max-w-sm">
    <div className="flex justify-end p-2">
        <button type="button" className="inline-flex items-center bg-transparent hover:bg-gray-200 ml-auto p-1.5 rounded-lg text-gray-400 hover:text-gray-900 text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>

    <div className="p-6 pt-0 text-center">
        <svg className="mx-auto w-20 h-20 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 className="mt-5 mb-6 font-normal text-gray-500 text-xl">Are you sure you want to delete this user?</h3>
        <button href="#" onClick={() => { handleDelete(id) }}
            className="inline-flex items-center bg-red-600 hover:bg-red-800 mr-2 px-3 py-2.5 rounded-lg focus:ring-4 focus:ring-red-300 font-medium text-white text-base text-center">
            Yes, I'm sure
        </button>
        <button href="#" onClick={()=>setModal(false)}
            className="inline-flex items-center bg-white hover:bg-gray-100 px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-4 focus:ring-cyan-200 font-medium text-gray-900 text-base text-center">
            No, cancel
        </button>
    </div>
</div>
   </div>
    }
   
      {
        Alert &&
        <div className="bg-green-200 p-4 border-green-600 border-l-4 text-green-600" role="alert">
          <p className="font-bold">
            Success
          </p>
          <p>
            suppression successfull.
          </p>
        </div>
      }
      Total : <span className="font-bold">
        {
          Total
        } Fcfa
      </span>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="relative mb-4 text-gray-500 focus-within:text-gray-900">
            </div>
            <div className="flex justify-start p-4 w-full">
              <Link to={"/create"}>
              <button className="bg-green-400 px-5 py-2 rounded-lg text-white">+ Ajouter un nouvel</button>
              </Link>
           
            </div>
            <div className="overflow-hidden">
              <table className="rounded-xl min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th scope="col" className="p-5 rounded-t-xl font-semibold text-gray-900 text-sm text-left capitalize leading-6"> Type </th>
                    <th scope="col" className="p-5 font-semibold text-gray-900 text-sm text-left capitalize leading-6"> Price </th>
                    <th scope="col" className="p-5 font-semibold text-gray-900 text-sm text-left capitalize leading-6"> Status </th>
                    <th scope="col" className="p-5 font-semibold text-gray-900 text-sm text-left capitalize leading-6">   address </th>
                    <th scope="col" className="p-5 rounded-t-xl font-semibold text-gray-900 text-sm text-left capitalize leading-6"> Actions </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">

                  {

                    !Loaded ? <td colSpan={4} className="text-center">En cour de chargement...</td> :
                      Logement.length == 0 ?
                        <td colSpan={4} className="text-center">Aucune valeurs dans le tableau</td> :
                        Logement.map((loge, index) => {
                          return (
                            <>
                              <tr key={index} className="bg-white hover:bg-gray-50 transition-all duration-500">
                                <td className="p-5 font-medium text-gray-900 text-sm leading-6 whitespace-nowrap"> {loge.type}</td>
                                <td className="p-5 font-medium text-gray-900 text-sm leading-6 whitespace-nowrap"> {loge.price} </td>
                                <td className="p-5 font-medium text-gray-900 text-sm leading-6 whitespace-nowrap"> {loge.status}</td>
                                <td className="p-5 font-medium text-gray-900 text-sm leading-6 whitespace-nowrap"> {loge.address}</td>
                                <td className="p-5">
                                  <div className="flex items-center gap-1">
                                    <button className="group flex item-center p-2 rounded-full transition-all duration-500" onClick={() => { selectId(loge.id) }}>
                                      <svg className="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fill-red-600" d="M4.00031 5.49999V4.69999H3.20031V5.49999H4.00031ZM16.0003 5.49999H16.8003V4.69999H16.0003V5.49999ZM17.5003 5.49999L17.5003 6.29999C17.9421 6.29999 18.3003 5.94183 18.3003 5.5C18.3003 5.05817 17.9421 4.7 17.5003 4.69999L17.5003 5.49999ZM9.30029 9.24997C9.30029 8.80814 8.94212 8.44997 8.50029 8.44997C8.05847 8.44997 7.70029 8.80814 7.70029 9.24997H9.30029ZM7.70029 13.75C7.70029 14.1918 8.05847 14.55 8.50029 14.55C8.94212 14.55 9.30029 14.1918 9.30029 13.75H7.70029ZM12.3004 9.24997C12.3004 8.80814 11.9422 8.44997 11.5004 8.44997C11.0585 8.44997 10.7004 8.80814 10.7004 9.24997H12.3004ZM10.7004 13.75C10.7004 14.1918 11.0585 14.55 11.5004 14.55C11.9422 14.55 12.3004 14.1918 12.3004 13.75H10.7004ZM4.00031 6.29999H16.0003V4.69999H4.00031V6.29999ZM15.2003 5.49999V12.5H16.8003V5.49999H15.2003ZM11.0003 16.7H9.00031V18.3H11.0003V16.7ZM4.80031 12.5V5.49999H3.20031V12.5H4.80031ZM9.00031 16.7C7.79918 16.7 6.97882 16.6983 6.36373 16.6156C5.77165 16.536 5.49093 16.3948 5.29823 16.2021L4.16686 17.3334C4.70639 17.873 5.38104 18.0979 6.15053 18.2013C6.89702 18.3017 7.84442 18.3 9.00031 18.3V16.7ZM3.20031 12.5C3.20031 13.6559 3.19861 14.6033 3.29897 15.3498C3.40243 16.1193 3.62733 16.7939 4.16686 17.3334L5.29823 16.2021C5.10553 16.0094 4.96431 15.7286 4.88471 15.1366C4.80201 14.5215 4.80031 13.7011 4.80031 12.5H3.20031ZM15.2003 12.5C15.2003 13.7011 15.1986 14.5215 15.1159 15.1366C15.0363 15.7286 14.8951 16.0094 14.7024 16.2021L15.8338 17.3334C16.3733 16.7939 16.5982 16.1193 16.7016 15.3498C16.802 14.6033 16.8003 13.6559 16.8003 12.5H15.2003ZM11.0003 18.3C12.1562 18.3 13.1036 18.3017 13.8501 18.2013C14.6196 18.0979 15.2942 17.873 15.8338 17.3334L14.7024 16.2021C14.5097 16.3948 14.229 16.536 13.6369 16.6156C13.0218 16.6983 12.2014 16.7 11.0003 16.7V18.3ZM2.50031 4.69999C2.22572 4.7 2.04405 4.7 1.94475 4.7C1.89511 4.7 1.86604 4.7 1.85624 4.7C1.85471 4.7 1.85206 4.7 1.851 4.7C1.05253 5.50059 1.85233 6.3 1.85256 6.3C1.85273 6.3 1.85297 6.3 1.85327 6.3C1.85385 6.3 1.85472 6.3 1.85587 6.3C1.86047 6.3 1.86972 6.3 1.88345 6.3C1.99328 6.3 2.39045 6.3 2.9906 6.3C4.19091 6.3 6.2032 6.3 8.35279 6.3C10.5024 6.3 12.7893 6.3 14.5387 6.3C15.4135 6.3 16.1539 6.3 16.6756 6.3C16.9364 6.3 17.1426 6.29999 17.2836 6.29999C17.3541 6.29999 17.4083 6.29999 17.4448 6.29999C17.4631 6.29999 17.477 6.29999 17.4863 6.29999C17.4909 6.29999 17.4944 6.29999 17.4968 6.29999C17.498 6.29999 17.4988 6.29999 17.4994 6.29999C17.4997 6.29999 17.4999 6.29999 17.5001 6.29999C17.5002 6.29999 17.5003 6.29999 17.5003 5.49999C17.5003 4.69999 17.5002 4.69999 17.5001 4.69999C17.4999 4.69999 17.4997 4.69999 17.4994 4.69999C17.4988 4.69999 17.498 4.69999 17.4968 4.69999C17.4944 4.69999 17.4909 4.69999 17.4863 4.69999C17.477 4.69999 17.4631 4.69999 17.4448 4.69999C17.4083 4.69999 17.3541 4.69999 17.2836 4.69999C17.1426 4.7 16.9364 4.7 16.6756 4.7C16.1539 4.7 15.4135 4.7 14.5387 4.7C12.7893 4.7 10.5024 4.7 8.35279 4.7C6.2032 4.7 4.19091 4.7 2.9906 4.7C2.39044 4.7 1.99329 4.7 1.88347 4.7C1.86974 4.7 1.86051 4.7 1.85594 4.7C1.8548 4.7 1.85396 4.7 1.85342 4.7C1.85315 4.7 1.85298 4.7 1.85288 4.7C1.85284 4.7 2.65253 5.49941 1.85408 6.3C1.85314 6.3 1.85296 6.3 1.85632 6.3C1.86608 6.3 1.89511 6.3 1.94477 6.3C2.04406 6.3 2.22573 6.3 2.50031 6.29999L2.50031 4.69999ZM7.05028 5.49994V4.16661H5.45028V5.49994H7.05028ZM7.91695 3.29994H12.0836V1.69994H7.91695V3.29994ZM12.9503 4.16661V5.49994H14.5503V4.16661H12.9503ZM12.0836 3.29994C12.5623 3.29994 12.9503 3.68796 12.9503 4.16661H14.5503C14.5503 2.8043 13.4459 1.69994 12.0836 1.69994V3.29994ZM7.05028 4.16661C7.05028 3.68796 7.4383 3.29994 7.91695 3.29994V1.69994C6.55465 1.69994 5.45028 2.8043 5.45028 4.16661H7.05028ZM2.50031 6.29999C4.70481 6.29998 6.40335 6.29998 8.1253 6.29997C9.84725 6.29996 11.5458 6.29995 13.7503 6.29994L13.7503 4.69994C11.5458 4.69995 9.84724 4.69996 8.12529 4.69997C6.40335 4.69998 4.7048 4.69998 2.50031 4.69999L2.50031 6.29999ZM13.7503 6.29994L17.5003 6.29999L17.5003 4.69999L13.7503 4.69994L13.7503 6.29994ZM7.70029 9.24997V13.75H9.30029V9.24997H7.70029ZM10.7004 9.24997V13.75H12.3004V9.24997H10.7004Z" fill="#F87171"></path>
                                      </svg>
                                    </button>
                                    <Link to={`/detail/${loge.id}`}>
                                      <button className="group flex item-center p-2 rounded-full transition-all duration-500" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                      </button>
                                    </Link>


                                    <button className="group flex item-center p-2 rounded-full transition-all duration-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                      </svg>

                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </>
                          )
                        })

                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homes;
