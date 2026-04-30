import Header from "../components/Header";
import BottomNav from "../components/BottomNav"

export default function ForYou(){
    const  recommendations = [
        {title:"Morning Walk",desc: "Boost your energy with a 20 min walk", },
        {title:"Protein Intake",desc: " Increase protein for muscle recovery"},
        {title:"Hydration",desc: "Drink at least 2L water today" },
    ];

    const insight = [
    "You are most active on Saturdays",
    "You sleep better after workouts",
    "You hit step goals 4 days this week",
    ];

    return (
          
         <div className="flex-1">
                    <Header/>

        <div className="min-h-screen bg-white text-black p-7 md:p-10">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-semibold">For You</h1>
                <p className="text-gray-600 mt-2 text-sm md:text-lg">Personalized for your health</p>
            </div>

            <div className="bg-gradient-to-r from-indigo-400 to-emerald-400 rounded-2xl p-2 pb-4 shadow-lg">
                <h2 className="text-lg md:text-2xl font-semibold mx-4"> 🎉 Great job !</h2>
                <p className="mt-2 text-md md:text-xl mx-4">
                    You walked <span className="font-semibold">8,420 steps  </span>today
                </p>
                <p className="mt-1 text-md md:text-xl mx-4">
                    Walked 1,580 more steps to reach your goal
                </p>
            
                <button className="block ml-auto mt-4  md:mr-8 bg-black text-white px-6 py-2 rounded-xl text-sm md:text-lg hover:bg-stone-500 ">View Details</button>
            </div>

        <div className="mb-6">
            <h2 className="text-gray-600 text-sm md:text-lg mb-3">Recommendations</h2>

            <div className="flex gap-4 overflow-x-auto md:justify-around pb-4 ">
                {recommendations.map((item, idx)=>(
                    <div key={idx} className="min-w-[250px] md:min-w-[350px] bg-teal-400 p-4 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-900 text-md mt-1 md:mt-2">{item.desc}</p>
                        </div>
                ))}
            </div>
        </div>

        <div className="bg-sky-500 rounded-2xl p-6 mb-6">
            <h2 className="text-gray-900 text-lg font-semibold mb-4 md:text-lg">Insights</h2>
            <ul className="space-y-1 ml-4 ">
                {insight.map((insight, idx) =>(
                    <li key = {idx} className="text-md md:text-lg text-gray-300">
                        {insight}
                    </li>
                ))}
            </ul>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Start Workout", "Log Meal", "Drink Water", "Track Sleep"].map(
                (action, idx) => (
                    <button key={idx} className="bg-emerald-400 p-4 rounded-xl text-sm font-semibold hover:bg-green-600 transition">
                        {action}
                    </button>
                )
            )}
        </div>
        </div>
           <BottomNav/>
        </div>
    )
}