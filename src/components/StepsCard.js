import React from "react";
import { FaFire, FaHandPointUp, FaLandmark, FaLocationArrow, FaMap, FaMapMarked, FaMapMarkedAlt, FaMarkdown, FaMarker, FaMeteor, FaMousePointer, FaRoute, FaSearchLocation } from "react-icons/fa";

export default function StepsCard (){
        const steps = 8420;
        const goal = 10000;
        const progress = (steps/goal)* 100;

        const weeklyData = [4000, 6500,8000, 7200, 9000, 10000,8420];

        return(
            <div className="min-h-screen bg-white text-black p-6 md:p-10 ">
                <div className="flex md:flex-row justify-between items-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-semibold">Steps Tracker</h1>
                    <input type="data" className="bg-gray-200 px-3 py-1 md:px-10 md:py-3 rounded-lg text-sm "/>
                </div>
                 
                 <div className="md:grid md:grid-cols-2 gap-6  md:gap-12 max-w-9xl  md:py-8 ">
                <div className="bg-gray-300 rounded-2xl p-6 mb-6 shadow-lg">
                 <h2 className="text-gray-600 text-sm md:text-lg">Today's Steps</h2>

                 <div className="flex items-center justify-between mt-4">
                    <div>
                        <h1 className="text-4xl font-bold md:text-5xl">{steps}</h1>
                        <p className="text-gray-600 text-sm mt-4 md:text-lg">Goal: {goal}</p>
                    </div>

                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-green-500 flex items-center justify-center">
                        <span className="text-sm md:text-xl">{Math.round(progress)}%</span>
                    </div>
                 </div>

                 <div className="w-full bg-gray-500 h-2 rounded-full mt-8">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: `${progress}%`}}>
                        
                    </div>
                 </div>

                 <div className="flex justify-between mt-4 text-sm text-gray-600">
                    <span><FaFire className="inline mr-2 text-yellow-300"/>320 kcal</span>
                    <span><FaRoute className="inline mr-2 text-blue-600"/> 6.2 km</span>
                 </div>
                </div>

                <div className="bg-gray-300 rounded-2xl p-6 mb-6">
                    <h2 className="text-gray-600 text-sm mb-4 md:mb-12">Weekly Activity</h2>

                    <div className="flex items-end justify-around h-40 ">
                        {weeklyData.map((value, index)=>(
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-emerald-600 w-8 rounded-lg  " style = {{height: `${value / 100}px`}}></div>
                                <span className="text-xs md:text-lg mt-2 text-gray-600">
                                    {["M", "T", "W","T","F","S","S"] [index]}
                                </span>
                            </div>    
                        ))}
                    </div>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4 ">
                    <div className="bg-gray-300 p-4 rounded-xl">
                        <p className="text-gray-600 text-sm">Best Day</p>
                        <h3 className="text-lg font-semibold">Saturday</h3>
                    </div>

                    <div className="bg-gray-300 p-4 rounded-xl">
                        <p className="text-gray-600 text-sm">Avg Steps</p>
                        <h3 className="text-lg font-semibold">7,800</h3>
                    </div>

                    <div className="bg-gray-300 p-4 rounded-xl">
                        <p className="text-gray-600 text-sm">Goal Completion</p>
                        <h3 className="text-lg font-semibold">84%</h3>
                    </div>

                    <div className="bg-gray-300 p-4 rounded-xl">
                        <p className="text-gray-600 text-sm">Active Time</p>
                        <h3 className="text-lg font-semibold">1h 45m</h3>
                    </div>
                </div>
            </div>
        )
}