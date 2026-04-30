import { FaArrowLeft, FaChevronLeft } from "react-icons/fa";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
export default function AllHealthData(){
    const data=[
        {title:"Double Support Time", value:"29.7%", color:"bg-indigo-500"},
        {title:"Steps", value:"11865 steps", color:"bg-teal-400"},
        {title:"Sleep", value:"7hr 31 min", color:"bg-purple-500"},
        {title:"Heart", value:"68 BPM", color:"bg-red-500"},
        {title:"Burned calories", value:"850 kcal", color:"bg-yellow-400"}
    ]
    return(
           <div className="flex-1">
                    <Header/>
        <div className="min-h-screen flex justify-center items-start pt-12 bg-gradient-to-br from-purple-200 to-indigo-200">
            <div className="w-full max-w-sm mx-auto lg:max-w-4xl bg-white rounded-3xl shadow-2xl p-5">
                <div className="flex items-center gap-3 mb-5">
                    <FaArrowLeft/>
                    <h2 className="font-semibold text-lg">All Health Data</h2>
                </div>
                <div className="space-y-5 ">
                    {data.map((item,index)=>(
                        <div key={index} className="flex items-center justify-between p-4 rounded-2xl cursor-pointer hover:bg-pink-100  bg-gray-50 shadow-sm">
                            <div className="flex items-center gap-4 ml-4">
                            
                            <div className={`w-12 h-12 rounded-xl md:ml-10 ${item.color}`}></div>
                            
                            <div>
                              <p className="text-sm text-gray-500 ml-7 md:ml-60">{item.title}</p>
                               <p className="font-bold ml-7 md:ml-60">{item.value}</p>
                               </div>
                               </div>
                                  <FaChevronLeft className=" text-gray-400 mr-5 md:mr-16"/>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    <BottomNav/>
        </div>
    )
}