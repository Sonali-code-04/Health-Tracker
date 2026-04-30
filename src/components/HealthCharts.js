import {Line} from 'react-chartjs-2';

import {
    Chart as ChartJS,
     LineElement,
     CategoryScale,
     LinearScale,
     PointElement,
     Title,
     Tooltip,
     Legend,
     } from "chart.js";

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement,Title,Tooltip,Legend);
export default function HealthCharts(){

      const data = {

    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

    datasets: [
        {
            label:"Steps",
            data:[5000,7000,9000,8000,11000,12000,10000],
            borderColor: "rgb(59,130,246)",
            backgroundColor: "rgba(59,130,246,0.3)",
            fill: true,
            tension: 0.4,
        }
    ]

      }

const options ={
    responsive: true,
    maintainAspectRatio: false,
      plugins: {
        legend: {
            display:true,
            position:"top"
        },
        title: {
            display:true,
            text: "Weekly Steps Activity"
        }
    }
}

 return(
    <div className='bg-white p-6 rounded-xl shadow w-full max-w-md mx-auto h-[250px] md:max-w-xl'>
    <Line data={data} options={options}/>
    </div>
 )

}

