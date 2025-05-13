import { useAuthStore } from "@/store/authStore";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function LoaderScreen() {
    const token = useAuthStore();
    const navigate = useNavigate()
    useEffect(()=>{
        if(token){
            navigate("/dashboard")
        }else{
            navigate('/signin')
        }
    },[token])
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <Loader2 className="animate-spin size-12"/>
    </div>
  )
}
