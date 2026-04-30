import BottomNav from "../components/BottomNav"
import Header from "../components/Header"
import NutritionCard from "../components/NutritionCard"

export default function Nutrition(){
    return(
        <div className="flex-1">
            <Header/>
                <NutritionCard/>
                <BottomNav/>
            </div>
    )
}