export default function NutritionCard(){
   
    const dailyMacros = [
        {label: "Calories", value: 2200, goal: 2500, color:"border-yellow-500"},
        {label: "Protein", value: 120, goal: 150, color:"border-blue-500"},
        {label: "Carbs", value: 280, goal: 300, color:"border-green-500"},
        {label: "Fats", value: 70, goal: 80, color:"border-red-500"},
    ];

    const meals = [
        {time: "08:00 AM", meal: "Breakfast", items:["Oatmeal", "Banana"], calories:450},
        {time: "12:30 PM", meal: "Lunch", items:["Chicken Salad", "Brown Rice"], calories:650},
        {time: "06:30 PM", meal: "Dinner", items:["Grilled Salmon", "Veggies"], calories:700},
        {time: "09:00 PM", meal: "Snacks", items:["Protein Shake"], calories: 400},
    ];

    const macroTrend = [2000, 2100, 2200, 2300, 2250, 2150, 2200];

    return(
        <div className="min-h-screen bg-white text-black p-4 md:p-6 ">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 mx-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-6">Nutrition Overview</h1>
         </div>

            <div className="flex flex-wrap justify-between gap-4 mb-6 ml-6">
                {dailyMacros.map((macro, idx)=>{
                    const progress = Math.min((macro.value / macro.goal)* 100 , 100);
                    return(
                        <div key={idx} className="flex flex-col items-center w-24 md:w-32">
                            <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-x-8 md:border-x-12 ${macro.color} -500 flex items-center justify-evenly`}>
                                <span className="text-sm md:text-base">{Math.round(progress)}%</span>
                        </div>
                        <p className=" mt-2 text-center text-gray-600 text-sm md:text-base">{macro.label}</p>
                        <p className="text-gray-500 text-sm md:text-base font-semibold">{macro.value} {macro.label === "Calories"  ?  "kcal" : "g"}</p>
                        </div>
                    );
                })}
            </div>

            <div className="bg-gray-200 rounded-2xl p-6 mb-6 md:mx-4">
                <h2 className="text-gray-700 text-sm mb-4">Meal Timeline</h2>
                <div className="flex flex-col space-y-4">
                    {meals.map((meal,idx)=>(
                        <div key={idx} className="flex items-start space-y-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                                {idx !== meals.length - 1 && <div className="w-0.5 flex-1 bg-gray-600"></div>}
                         </div>
                         <div>
                            <p className="text-green-500 font-semibold">{meal.meal}  ({meal.time})</p>
                            <p className="text-gray-600 text-sm p-1">{meal.items.join("   ,  ")} </p>
                            </div>
                            <div className="ml-auto font-semibold">{meal.calories} kcal</div>
                            </div>
                    ))}
                </div>
            </div>


            <div className="bg-gray-200 rounded-2xl p-6 mb-6 overflow-x-auto md:mx-4">
                <h2 className=" text-gr text-sm mb-4">Macro Trend (kcal)</h2>
                <div className="flex items-end h-39 min-w-[350px] md:min-w-full justify-between md:justify-evenly">
                    {macroTrend.map((val, idx) =>(
                        <div key={idx} className="flex flex-col items-center">
                            <div className="bg-blue-500 w-4 rounded-lg transition-all duration-300" style ={{height: `${val / 10}px`}}>
                        </div>
                        <span className="text-xs mt-2 text-gray-600">{["M","T","W","T","F","S","S"][idx]}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className=" bg-gray-200 rounded-2xl p-6 md:mx-4">
                <h2 className="text-gray-800 text-sm mb-2">Daily Tips</h2>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Include at least 5 servings of vegetables today.</li>
                    <li>Drink 2-3 litres of water.</li>
                    <li>Prefer whole grains over refined carbs.</li>
                </ul>
            </div>
        </div>
    );
}