import { useNavigate } from "react-router-dom";
import {FaFacebookF, FaInstagram, FaYoutube, FaGoogle} from "react-icons/fa";


export default function Login(){
    const navigate = useNavigate()
    
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-500">
            <div className="w-[350px] bg-white rounded-3xl shadow-2xl p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Welcome Back
                </h2>
                <div className="mb-4">
                    <label className="text-sm">Email</label>
                    <input type="email" placeholder="Enter email" className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"/>
                    <div className="mb-2">
                        <label className="text-sm">Password</label>
                    <input type="email" placeholder="Enter password" className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"/>
                    </div>
                </div>
                <p className="text-right text-sm text-indigo-500 mb-4 cursor-pointer">Forgot password?</p>
             <button onClick={()=>navigate("/dashboard")} className="w-full bg-indigo-500 text-white py-3 rounded-full font-semibold">Sign In</button>
                <p className="text-center text-gray-400 my-4 text-sm">OR LOG IN WITH</p>
               <div className="flex justify-center gap-4 mb-4">
                     <div className="w-full shadow-2xl flex justify-around rounded-3xl text-slate-600 py-3 bg-gray-50 cursor-pointer">
                                 <FaGoogle size={20}/>
                                <FaFacebookF size={20}/>
                                <FaYoutube size={20}/>
                                <FaInstagram size={20}/>
                            </div>
                </div>
                 <p className="text-center text-sm">Don't have an account?<span className="text-indigo-500 cursor-pointer ml-1">Sign up</span></p>
            </div>
        </div>
    )

 }
    
