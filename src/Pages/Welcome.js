import { useNavigate } from "react-router-dom";
import all_images from "../components/Assets/all_img";

export default function Welcome(){
    const navigate = useNavigate()
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500" >
            <div className="w-full max-w-sm mx-auto lg:max-w-4xl bg-white rounded-3xl overflow-hidden shadow-4xl">
                <div className="relative">
                    <img src={all_images.img} alt="fitness" className="w-full h-64 object-cover "/>
                    <div className="absolute bottom-0 left-0 w-full h-6 md:h-0 bg-white rounded-t-[100px]"></div>
                </div>
                <div className="p-6 text-center bg-indigo-500 text-white">
                    <div className="mb-4">
                        <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center">
                            <span className="text-indigo-500 font-bold text-xl">🔺</span>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mb-4">Let's start your health journey today with us!</h2>
                    <button onClick={()=>navigate("/login")} className="bg-white text-gray-700 w-full py-3 rounded-full font-semibold md:w-80">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}