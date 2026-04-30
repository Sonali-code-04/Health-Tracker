import React ,{useEffect, useState} from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function Heartbeat(){
    const [bpm, setBpm] = useState(78);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setBpm ((prev) =>{
                const change = Math.floor(Math.random() * 6 - 3);
                return Math.min (120, Math.max(55, prev + change));
            })
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const getStatus = () =>{
      if (bpm < 60) return "Low";
      if (bpm > 100) return "High";
      return "Normal"; 
    }

    const getColor = ()=>{
       if (bpm < 60) return "text-yellow-600";
      if (bpm > 100) return "text-red-600";
      return "text-green-600"; 
    }

     const getGlow = ()=>{
       if (bpm < 60) return "shadow-yellow-600/40";
      if (bpm > 100) return "shadow-red-600/50";
      return "shadow-green-600/40"; 
    };

    return(

           <div className="flex-1">
                              <Header/>

        <div className="min-h-screen bg-white text-black p-4 md:p-8 overflow-hidden">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">Heart Monitor</h1>
            
                     
            <div className={`bg-gray-300 rounded-3xl p-6 md:p-10 mb-6 text-center shadow-xl ${getGlow()}`}>
                
                <div className="flex justify-center mb-4">
        
                    <div className="text-red-500 text-7xl md:text-9xl animate-pulse">❤️</div>
                   
                      </div>
                        <p className="text-gray-600 text-md md:text-xl">Current BPM</p> 
                    
                  <h1 className={`text-5xl md:text-6xl font-bold mt-2 ${getColor()}`}>{bpm}</h1>
                  <p className="mt-2 text-md md:text-xl">
                    Status : <span className="font-semibold"> {getStatus()} </span>
                 </p>
            </div>
        

            <div className="bg-gray-300 rounded-2xl p-6 mb-6 overflow-hidden">
               <h2 className="text-gray-600 text-sm mb-4">Live ECG</h2>

               <div className="relative h-28 md:h-40 w-full overflow-hidden">
                <div className="absolute flex w-[200%] animate-scroll">

                  {[...Array(2)].map((_, i)=>(
                    <svg  key={i} viewBox="0 0 1000 100" className="w-full h-28 md:h-40">
                            <polyline fill="none" stroke="red" strokeWidth="4" className="drop-shadow-[0_0_6px_red]"
                             points="0,50 80, 50 100, 20 120,80 140,50 300,50 320,30 340,70 360,50 1000,50"/>
                             
                        </svg>
            
                 ))}
                </div>
               </div>
            </div>

            
                                          

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                    {label: "Resting", value: "65 BPM"},
                    {label: "Average", value: "72 BPM"},
                    {label: "Max", value:"110 BPM"},
                ].map((item, idx)=>(
                    <div key={idx} className="bg-gray-400 p-4 rounded-xl text-center shadow-md">
                        <p className="text-gray-700 text-sm">{item.label}</p>
                        <h3 className="text-xl font-semibold mt-1">{item.value}</h3>
                        </div>
                ))}

                <style> 
                    {`@keyframes scroll {
                    0% {transform: translateX(0);}
                    100% {transform: translateX(-300px);}
                    } 
                     .animate-scroll{
                         animation: scroll 4s linear infinite;
                         }`}
                </style>
            </div>
            </div>
            <BottomNav/>
            </div>
    )
}