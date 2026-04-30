import BottomNav from "../components/BottomNav"
import Header from "../components/Header"
import SleepCard from "../components/SleepCard"

export default function Sleep(){
    return(
        <div className="flex-1">
            <Header/>
            
            <div className="flex-1">
                <SleepCard/>
                <BottomNav/>
            </div>
        </div>
       
    )
}