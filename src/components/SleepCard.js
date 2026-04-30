import { useEffect, useState } from "react";

export default function SleepCard(){
  const size = 220;
  const strokeWidth = 16;
  const radius= (size- strokeWidth)/2;
  const circumference = 2* Math.PI * radius;

  const segments = [
    {value: 0.6, color:"#2563eb"},//Deep
    {value:0.25, color:"#60a5fa"},//Light
     {value:0.1, color:"#a855f7"},//REM
     {value:0.05, color:"#f472b6"},//Awake
  ];

  const [displayTime, setDisplayTime] = useState(0);
  const targetMinutes = 435;
  
  useEffect(()=> {
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const increment = targetMinutes / (duration / stepTime);


    const interval = setInterval(()=>{
        start += increment;
        if(start >= targetMinutes){
            start = targetMinutes;
            clearInterval(interval);
        }
        setDisplayTime(Math.floor(start));
        
    }, stepTime);
    return ()=> clearInterval(interval);
  }, []);

  const formatTime = (mins) => {
    const h= Math.floor(mins / 60);
    const m = mins % 60;
    return `${h} h ${m} m`;
  };


  let accumulated = 0;
  return(
    < div className="min-h-screen bg-white text-black flex flex-col items-center p-4">
        <div className="w-full text-2xl md:text-4xl font-semibold ml-6 md:ml-12">
            Sleep
        </div>
     <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-80 items-center">
  
     <div className="flex justify-center">
        <div className="relative mb-3">
            <svg width = {size} height = {size}>

             <defs>
                <linearGradient id="sleepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset ="50%" stopColor="#a855f7"/>
                    <stop offset="100%" stopColor="#f472b6"/>
                </linearGradient>
             </defs>

                <circle
                cx= {size/2} 
                cy={size/2} 
                r={radius}
                stroke = "#3b82f6"
                strokeWidth={strokeWidth +1}
                fill="none"
                opacity={0.1}
                />
                  <circle
                cx= {size/2}
                cy={size/2}
                r={radius}
                stroke = ""
                strokeWidth={strokeWidth}
                fill="none"
                opacity={0.15}
                className="blur-sm"
                />

                {segments.map((seg, i)=>{
                    const dash = circumference * seg.value;
                    const offset = circumference * (1-accumulated);
                    accumulated += seg.value;

                    return (
                        <circle
                        key={i}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={seg.color}
                        strokeWidth={strokeWidth}
                        fill='none'
                        strokeDasharray={`${dash} ${circumference}`}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                        style={{
                            transition: "stroke-dashoffset 1.5s ease",
                        }}
                        />
                    )
                })}
            </svg>

          <div className="absolte inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold mt-3">
                {formatTime(displayTime)}
            </span>
            <span className="text-gray-500 text-md mt-2">Total Sleep</span>
          </div>
      </div>
      </div>

   <div className="w-full max-w-md grid grid-cols-2 gap-4 my-6 ml-20 md:gap-10 ">
        <div>
            <p className="text-xl">5 h 52 m</p>
            <p className="text-blue-400 text-sm">⚪ Deep</p>
        </div>
        <div>
            <p className="text-xl">1h 23 m</p>
            <p className="text-blue-400 text-sm ">⚪ Light</p>
        </div>
        <div>
            <p className="text-xl">----</p>
            <p className="text-blue-400 text-sm">⚪ REM</p>
        </div>
        <div>
            <p className="text-xl">0 h 32 m</p>
            <p className="text-blue-400 text-sm">⚪ Awake</p>
        </div>
    </div>
    </div>

     <div className="mt-6 grid grid-cols-4 gap-12 text-sm">
        {[
            {label: "Deep", value:0.6, color:"bg-blue-700"},
             {label: "Light", color:"bg-blue-400"},
              {label: "REM", color:"bg-purple-500"},
               {label: "Awake", color:"bg-pink-400"},
        ].map((item, i)=>(
            <div key={i} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`}/>
                <span className="text-gray-500">{item.label}</span>
                </div>
        ))}
    </div>

    <div className="w-full max-w-6xl my-5">
        <p className="mb-2 text-sm md:text-lg text-gray-600">Stages Timeline</p>
        <div className="h-28 rounded-2xl flex overflow-hidden group">
            {["66%","16%","8%","10%"].map((w,i)=>(
                <div
                key={i}
                className={`relative h-full transition-all duration-500 cursor-pointer flex items-center justify-center group/segment ${[
                    "bg-blue-700",
                    "bg-blue-400",
                    "bg-purple-400",
                    "bg-pink-400",
                ][i]}
                 hover:scale-y-110 z-10`}
               style={{
                width: w,
                transitionDelay: `${i * 0.1}s`,
               }}
                >

            <span className="opacity-0 group-hover/segment:opacity-100 transition-opacity duration-300 text-white text-md font-bold pointer-events-none">
                {w}
            </span>
      </div>
            ))}
        </div>

        <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>00:46</span>
            <span>08:01</span>
        </div>
    </div>
       
        <div className="w-full max-w-6xl">
        <h2 className="text-gray-600 text-sm md:text-lg mb-2 ml-0">Sleep Tips</h2>
       <div className=" bg-indigo-700 rounded-2xl p-6">
       
        <ul className="list-disc list-inside text-gray-400 text-sm md:text-md space-y-1">
            <li>Avoid screens 30 minutes brfore bed</li>
            <li>Maintain a consistent sleep schedule</li>
            <li>Keep your room cool and dark</li>
        </ul>
       </div>
       </div>
    </div>
  )
}