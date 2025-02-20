
import { BrowserRouter , Routes, Route ,Outlet, Link  } from 'react-router-dom'
import './App.css'
import Homes from './Pages/Homes'
import Detail from './Pages/detail'
import Create from './Pages/create'
import { createContext } from 'react'

function App() {
  var listeLogements = [
    {
      id: 1,
      type: 'Appartement',
      nb_salons: 2,
      nb_douches: 2,
      nb_chambres: 3,
      nb_cuisines: 1,
      loyer: 50000,
      etat: "Occupe",
      adresse: "Rue Cleremont feront"
    },
    {
      id: 2,
      type: 'Duplex',
      nb_salons: 1,
      nb_douches: 2,
      nb_chambres: 4,
      nb_cuisines: 1,
      loyer: 200000,
      etat: "Occupe",
      adresse: "Rue Boulevard"
}
]
  return (
    <AppContext.Provider value={listeLogements}>
    <BrowserRouter>
    <Routes>    
      <Route element={<NavbarMenu />}>
     
        <Route path={'/'} element={<Homes />}  />
        <Route path={'/detail/:id'}  element={<Detail />} />
        <Route path={'/create'} element={<Create />}  />
        </Route>
      
    </Routes>
    </BrowserRouter>
    </AppContext.Provider>
    
  )
}
var AppContext = createContext([])
export {AppContext}
  const NavbarMenu = () =>{
      return (
        <div>
          <header className="top-0 z-50 sticky bg-gray-500 px-4">
           <div className="flex justify-between items-center mx-auto py-4 container">
            
             <div className="flex items-center">
               {/* <img src="https://spacema-dev.com/blue-star/assets/images/blue-logo.png" alt="Logo" className="mr-4 w-auto h-14"> */}
             </div>
       
             
             <div className="md:hidden flex">
               <button id="hamburger" className="focus:outline-none text-white">
                
               </button>
             </div>
       
            
             <nav className="hidden md:flex md:flex-grow">
               <ul className="flex justify-center space-x-4 text-white">
                 <Link to={"/"}>
                 <li><a href="" className="font-bold hover:text-secondary">Home</a></li>
                 </Link>
               
               </ul>
             </nav>
             <div className="hidden lg:flex items-center space-x-4">
               <a href="#" className="inline-block bg-green-500 hover:bg-blue-500 px-4 py-2 rounded font-semibold text-white">Github</a>
               <a href="#" className="inline-block bg-blue-500 hover:bg-green-500 px-4 py-2 rounded font-semibold text-white">Download</a>
             </div>
           </div>
         </header>
       
       <nav id="mobile-menu-placeholder" className="hidden md:hidden flex-col items-center space-y-8 px-8 mobile-menu">
         <ul className="w-full text-center">
           <li className="pt-4 pb-4 border-gray-300 border-b"><a href="#home" className="font-bold hover:text-secondary">Home</a></li>
           <li className="pt-4 pb-4 border-gray-300 border-b"><a href="#aboutus" className="font-bold hover:text-secondary">About us</a></li>
           <li className="pt-4 pb-4 border-gray-300 border-b"><a href="#results" className="font-bold hover:text-secondary">Results</a></li>
           <li className="pt-4 pb-4 border-gray-300 border-b"><a href="#reviews" className="font-bold hover:text-secondary">Reviews</a></li>
           <li className="pt-4 pb-4 border-gray-300 border-b"><a href="#portfolio" className="font-bold hover:text-secondary">Portfolio</a></li>
           <li className="pt-4 pb-4 border-gray-300 border-b"><a href="#team" className="font-bold hover:text-secondary">Team</a></li>
           <li className="pt-4 pb-4"><a href="#contact" className="font-bold hover:text-secondary">Contact</a></li>
         </ul>
         <div className="flex flex-col items-center space-y-2 mt-6">
           <a href="#" className="inline-block flex justify-center items-center bg-green-500 hover:bg-blue-500 px-4 py-2 rounded min-w-[110px] font-semibold text-white">Github</a>
           <a href="#" className="inline-block flex justify-center items-center bg-blue-500 hover:bg-green-500 px-4 py-2 rounded min-w-[110px] font-semibold text-white">Download</a>
         </div>
       </nav>
             <Outlet/>
        </div>
      )   
       
     
    
      
      
   
  }

export default App
