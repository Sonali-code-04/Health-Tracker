import {Line} from "react-chartjs-2";

import{useState, useEffect} from "react"
import {
    Chart as ChartJS,
         LineElement,
         CategoryScale,
         LinearScale,
         PointElement,
         Tooltip,
         } from "chart.js";
     
    
    ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement,Tooltip);
    
    export default function ActivityChart(){
    
        const [chartData,setChartData] = useState({
            labels: Array(20).fill("70"),
            datasets: [
                {
                    label:"Heartbeat",
                    data: Array(20).fill(70),
                    borderColor: "#ef0033",
                    backgroundColor: "rgba(255,0,51,0.2)",
                    borderWidth: 1,
                    tension:0.3,
                    pointRadius:0,
                }
            ]
        } )
        useEffect(()=>{
            const interval=setInterval(()=>{
                setChartData(prev=>{
                    const newData=[...prev.datasets[0].data]
                   newData.shift()
                        const nextValue= 60 + Math.random()*30
                          newData.push(nextValue)

                          return{
                            ...prev,
                             datasets:[
                                {
                                    ...prev.datasets[0],
                                    data:newData
                                }
                            ]
                          }
                    })
                },800)
                return ()=>clearInterval(interval)
            },[])

           const options={
                responsive: true,
                maintainAspectRatio: false,
                animation: true,
             
          
                scales: {
                    x:{display:false},
                    y:{display:false}
                }
            }

        
        
            return(
                <div className="bg-white p-10 rounded-xl shadow w-full max-w-md mx-auto h-[250px] md:max-w-xl ">
                    <h2 className="text-lg font-semibold mb-1 text-center text">Live Heartbeat Activity</h2>
                    <Line data={chartData} options={options} />
                </div>

            )
        
    }
