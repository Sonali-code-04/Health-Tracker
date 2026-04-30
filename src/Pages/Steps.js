import BottomNav from "../components/BottomNav"
import Header from "../components/Header"
import StepsCard from "../components/StepsCard"

export default function Steps(){
    return(
        <div className="flex-1">
            <Header/>

            <div className="">
              <StepsCard/>
            </div>
          <BottomNav/>
        </div>
    )
}