import React ,{useState} from "react";
import Header from "../components/Header"
import BottomNav from "../components/BottomNav";


export default function Share(){

    const [metric, setMetric] = useState("Steps");
    const [theme, setTheme] = useState("blue");

    const themes = {
          
        green: "from-green-500 to-emerald-600",
        blue:"from-blue-500 to-cyan-500",
        purple: "from-purple-500 to-pink-500",
    };

    const data = {
        Steps: "8,420 steps",
        Calories: "2,200 kcal",
        Distance: "6.2 km",
    };

    return(
        <div className="flex-1">
            <Header/>
      <div className="min-h-screen bg-white text-black p-4 md:p-10">
       
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">Share Progress</h1>

        <div className={`rounded-3xl p-6  md:p-10 ,b-6 bg-gradient-to-r ${themes[theme]} shadow-lg`}>
          <h2 className="text-xl md:text-2xl font-semibold mx-4">My Health Progress</h2>

          <div className="mt-4 mx-4">
            <p className="text-md md:text-xl opacity-80">{data[metric]}</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-1">
            </h1>
          </div>

          <p className="mt-4 mx-4 text-md  md:text-xl opacity-80 ">
            Stay consistent . Stay healthy .
          </p> 
      </div>

      <div className="bg-gray-300 rounded-2xl p-6 my-8 ">
        <h2 className="text-gray-600 text-lg mb-3 md:text-2xl mx-4">Customize</h2>

        <div className="mb-4">
            <p className="text-sm md:text-lg mb-4 mx-4">Select Metric</p>
            <div className="flex justify-evenly flex-wrap">
                {["Steps", "Calories","Distance"].map((item)=>(
                    <button key={item} onClick={()=> setMetric(item)} className={`px-4 py-2 rounded-lg text-sm md:text-lg ${metric === item
                        ? "bg-emerald-400 text-black": "bg-white"
                    }`}>{item}</button>
                ))}
            </div>
        </div>

        <div>
            <p className="text-sm mb-2 md:text-lg mx-4">Theme</p>
            <div className="flex gap-0">
                {Object.keys(themes).map((color)=>(
                    <button key={color} onClick={()=> setTheme(color)} className={`w-8 h-8 rounded-full mx-4 bg-${color}-500 border-2 ${
                        theme === color ? "border-white" : "border-transparent"
                    }`}></button>
                ))}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="bg-cyan-400  p-4 rounded-xl font-semibold hover:bg-cyan-600">WhatsApp</button>
         <button className="bg-blue-400  p-4  rounded-xl font-semibold hover:bg-blue-600">Instagram</button>
          <button className="bg-sky-400  p-4 rounded-xl font-semibold hover:bg-sky-600">Download</button>
           <button className="bg-teal-400  p-4 rounded-xl font-semibold hover:bg-teal-600">Copy Link</button>
      </div>
        </div>
        <BottomNav/>
        </div>
    );
}