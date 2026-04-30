import {BrowserRouter, Routes, Route} from "react-router-dom"


import Welcome from "./Pages/Welcome"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import AllHealthData from "./Pages/AllHealthData"


import Steps from "./Pages/Steps"
import Sleep from "./Pages/Sleep"
import Nutrition from "./Pages/Nutrition"
import Heartbeat from "./Pages/Heartbeat"
import ForYou from "./Pages/ForYou"
import Share from "./Pages/Share"

import { useEffect, useState } from "react"
import BottomNav from "./components/BottomNav"

function App(){
    return(
        <BrowserRouter>
   
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/healthdata" element={<AllHealthData/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/steps" element={<Steps/>}/>
            <Route path="/sleep" element={<Sleep/>}/>
            <Route path="/nutrition" element={<Nutrition/>}/>
            <Route path="/heartbeat" element={<Heartbeat/>}/>
            <Route path="/foryou" element={<ForYou/>}/>
            <Route path="/share" element={<Share/>}/>
        
          
            </Routes>
         
            </BrowserRouter>
          
    )

    const [bpm,setBpm]= useState(72)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setBpm(60 + Math.floor(Math.random()*20))
        },2000)
        return ()=>clearInterval(interval)
    },[])
}



export default App