export default function HealthScore(){
    const score = 78
    return(
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
            <div>
                <h2 className="text-xl font-semibold">Health Score</h2>
                <p className="text-gray-500">Based on your activity</p>
            </div>
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-8 border-orange-400 flex items-center justify-center">
                    <span className="text-xl font-bold">{score}</span>
                </div>
            </div>
        </div>
    )
}