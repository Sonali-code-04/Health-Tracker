import { useState } from "react"
import { Link } from "react-router-dom"
import {FaWalking, FaBed, FaHeartbeat, FaAppleAlt, FaUser, FaShare, FaPlusCircle, FaLock, FaHome} from "react-icons/fa"

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
    
        <header className=" bg-gradient-to-br from-blue-800 to-purple-600 z-50 w-full h-20 flex justify-between text-white px-4 py-4 items-center relative rounded-md shadow-xl md:px-2 ">  
       <h1 className="text-3xl font-bold z-50">
             🏥Health Tracker
            </h1>          
   
            <button onClick={()=>setMenuOpen(!menuOpen)} className="text-3xl  md:hidden z-50">⫶☰</button>
            
                  
            {menuOpen && (
                   <div className="fixed inset-0 bg-black/10 backdrop-blur-md z-30"
                     onClick={()=> setMenuOpen(false)}>
                   <div className=" md:hidden fixed top-20 right-0 w-86 bg-white  rounded-3xl text-gray-500 shadow-2xl z-50">
                    
                    <ul className="flex flex-col space-y-4 p-10 font-3xl">
                         <Link to="/dashboard"><FaHome className="inline mr-8 text-amber-700"/>Home</Link> 
                         <Link to="/sleep"><FaBed className="inline mr-8 text-blue-700"/>Sleep</Link>  
                        <Link to="/heartbeat"><FaHeartbeat className="inline mr-8 text-red-600"/>Heartbeat</Link>
                        <Link to="/steps"><FaWalking className="inline mr-8 text-purple-500"/>Steps</Link>
                        <Link to="/nutrition"><FaAppleAlt className="inline mr-8 text-green-700"/>Nutrition</Link>
                        <Link to="/foryou"><FaUser className="inline mr-8 text-yellow-500"/>ForYou</Link>
                        <Link to="/share"><FaShare className="inline mr-8 text-cyan-700"/>Share</Link>
                         <Link to="/healthdata"><FaPlusCircle className="inline mr-8 text-red-800"/>All Health Data</Link> 
                         <Link to="/login"><FaLock className="inline mr-8 text-slate-600"/>Log out</Link>  
            
                    </ul>
                  </div>
                       </div>
                 ) 
                }
              <ul className ="md:flex hidden font-semibold pt-9 space-x-48"> 
                 
                <li>
             <div className="w-25 h-10 bg-white text-gray-700 rounded-3xl gap-6 flex justify-between px-8 items-center" >
               <Link to="/dashboard">Home</Link> 
              <Link to="/sleep">Sleep</Link>
              <Link to="/heartbeat">Heartbeat</Link>
             <Link to="/steps">Steps</Link>
             <Link to="/nutrition">Nutrition</Link>
             <Link to="/foryou">ForYou</Link>
             <Link to="/share">Share</Link>
             </div>
              </li>
              <li className="grid grid-flow-col gap-4 ">
                <button className="bg-white text-gray-700 w-32  py-2 mb-10 rounded-full font-semibold md:w-40 md:right-1 ">
                        <Link to="/healthdata">All Health Data </Link>
                    </button>
                <button className="bg-white text-gray-700 w-32  py-2 mb-10 rounded-full font-semibold md:w-28 md:right-1">
                        <Link to="/login">Log out </Link>
                    </button>
                   </li>
                </ul>
                </header>
    )
}