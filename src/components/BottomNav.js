import {FaFacebookF, FaInstagram, FaYoutube, FaGoogle} from "react-icons/fa";

    const BottomNav=()=>{
    return(
           <footer className="w-full bg-gray-100 text-black py-4 px-11 flex flex-col items-center justify-center rounded-lg text-sm">
    
            <div className="mb-3 flex flex-col items-center">
             
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2">
                    <span className="text-black font-black text-xl">h</span>
                </div>
                <h2 className="tracking-[0.2em] font-semibold mt-3 text-lg">HEALTH TRACKER</h2>
            </div>
            <div className="flex gap-4 mb-5 text-gray-500 md:gap-8">
                <a href="#" className="hover:text-black">About</a>
                <span>|</span>
                <a href="#" className="hover:text-black">Careers</a>
                <span>|</span>
                <a href="#" className="hover:text-black">Advertise with us</a>
            </div>
             <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-8 max-w-4xl md:grid-cols-4">
                <a href="#" className="hover:underline font-semibold">Privacy Policy</a>
                <a href="#" className="hover:underline font-semibold">Content Integrity</a>
                <a href="#" className="hover:underline font-semibold">Privacy Settings</a>
                <a href="#" className="hover:underline font-semibold">Advertising Policy</a>
            </div>

              <div className="mb-6">
                <a href="#" className="font-bold text-lg">Health Topics</a>
            </div>
            <div className="text-xs leading-relaxed text-gray-600 max-w-3xl md:max-w-full">
                <p className="mb-2">Ⓒ 2026 Health Tracker Media LLC. All rights reserved. This website does not provide medical advice, diagnosis, or treatment. <a href="#" className="underline">See additional information</a></p>
            </div>
            <div className="w-full bottom-0 left-0 right-0 text-black/50 shadow-3xl flex justify-around py-3 rounded-lg cursor-pointer">
             <FaGoogle size={24}/>
            <FaFacebookF size={24}/>
            <FaYoutube size={24}/>
            <FaInstagram size={24}/>
               </div>
             
            <div className="mt-2">
                <div className="border-2 border-blue-400 rounded-full px-4 py-1 flex items-center bg-white">
                    <span className="text-blue-800 font-bold text-xs italic">@TRUST</span>
                </div>
            </div>
            </footer>
    )
};
export default BottomNav;
