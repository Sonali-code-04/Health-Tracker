import Header from "../components/Header"
import HealthCharts from "../components/HealthCharts"
import ActivityChart from "../components/ActivityChart"
import BottomNav from "../components/BottomNav"
import { FaWalking,FaBed,FaHeartbeat, FaAppleAlt } from "react-icons/fa"
import all_images from "../components/Assets/all_img"
import { Link } from "react-router-dom"


export default function Dashboard(){
      return(
          <div className="flex-1 bg-gray-100 min-h-screen">
            <Header/>
                
          <div className="min-h-screen flex justify-center bg-gradient-to-br from-purple-200 to-indigo-200 py-6 ">
        
              <div className="w-full max-auto px-8 space-y-6">

                    <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center"> 
                           <img src={all_images.img1} alt="fitness" className= "rounded-full w-56 h-56  md:w-72 md:h-72 md:ml-14 md:mb-8"/>
                          <p className="font-semibold text-3xl font-serif md:text-6xl mt-4 text-center text-gray-600 md:py-20">
                                   Track your daily health activity</p>
                </div>
                  <div className="bg-white rounded-2xl p-5 md:mx-6  shadow relative">
                      <p className="font-semibold md:text-xl">Health Score</p>
                      <p className="text-md md:text-lg text-gray-500">
                          Based on your overview health tracking , your score is 78 and consider good..</p>
                         <div className="absolute  right-2 md:right-10 bottom-2 bg-green-500 text-white px-3  py-2 md:py-3 md:px-4 rounded-full font-md">78</div>
                          </div>
    
                          <div>
                              <div className="flex justify-between items-center my-4 px-5">
                                  <h3 className="font-semibold md:text-xl">Highlights</h3>
                                  <p className="text-md text-indigo-500 md:text-lg">View more</p>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  <div className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white p-4 rounded-2xl md:h-32 md:py-7 md:px-8">
                                     <Link to="/steps"><FaWalking className="inline mr-2"/>Steps</Link>
                                      <p className="text-xl font-bold ">11,865</p>
                                      <p className="text-xs md:text-sm">updated 15 min ago</p>
                        
                                  </div>
                                  <div className="bg-blue-700 text-white p-4 rounded-2xl md:py-7 md:px-8 ">
                                        <Link to="/sleep"><FaBed className="inline mr-2"/>Sleep</Link>
                                      <p className="text-xl font-bold">7h 31m</p>
                                      <p className="text-xs  md:text-sm">updated a day ago</p>
                                  </div>
                                    <div className="bg-teal-600 text-white p-4 rounded-2xl md:py-7 md:px-8">
                                      <Link to="/nutrition"><FaAppleAlt className="inline mr-2"/>Nutrition</Link>
                                      <p className="text-xl font-bold">960 kcal</p>
                                      <p className="text-xs  md:text-sm">updated 5 min ago</p>
                                  </div>
                                    <div className="bg-red-600 text-white p-4 rounded-2xl md:py-7 md:px-8">
                                      <Link to="/heartbeat"><FaHeartbeat className="inline mr-2"/>Heartbeat</Link>
                                      <p className="text-xl font-bold">72 BPM</p>
                                      <p className="text-xs  md:text-sm">updated 1 min ago</p>
                                  </div>
                              </div>
                          </div>
                          <div className="grid grid-cols-1  md:grid md:grid-cols-2 gap-8  md:gap-12 max-w-7xl mx-auto py-4 md:px-15">
                            <div className="bg-white p-4 rounded-2xl shadow md:h-[350px] w-full ">
                                      <h3 className="font-semibold mb-2">Weekly Steps</h3>
                                      <div className="h-full">
                                          <HealthCharts/>
                                      </div>
                                      </div>
                              <div className="bg-white p-4 rounded-2xl shadow md:h-[350px] mb-8">
                                      <h3 className="font-semibold mb-2">Weekly Activity</h3>
                                      
                                          <ActivityChart/>
                                      
                                      </div>         
                                </div>    
                          </div>  
                              
              </div>
                 <BottomNav/>
      
             </div>
          
      )
  }
  