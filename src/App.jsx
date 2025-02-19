
import { BrowserRouter , Routes, Route  } from 'react-router-dom'
import './App.css'
import Homes from './Pages/Homes'
import Detail from './Pages/detail'
import Create from './Pages/create'

function App() {

  return (
   
    <BrowserRouter>
    <Routes>    
        <Route path='/' element={<Homes />}  />
        <Route path='/detail'  element={<Detail />} />
        <Route path='/create' element={<Create />}  />
      
    </Routes>
    </BrowserRouter>
    
  )
}
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
       
            
             <nav className="hidden md:flex md:flex-grow justify-center">
               <ul className="flex justify-center space-x-4 text-white">
                 <li><a href="#home" className="font-bold hover:text-secondary">Home</a></li>
                 <li><a href="#aboutus" className="font-bold hover:text-secondary">About us</a></li>
                 <li><a href="#results" className="font-bold hover:text-secondary">Results</a></li>
                 <li><a href="#reviews" className="font-bold hover:text-secondary">Reviews</a></li>
                 <li><a href="#portfolio" className="font-bold hover:text-secondary">Portfolio</a></li>
                 <li><a href="#team" className="font-bold hover:text-secondary">Team</a></li>
                 <li><a href="#contact" className="font-bold hover:text-secondary">Contact</a></li>
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
