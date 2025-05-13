import { Logo } from "@/assets";
import { Outlet } from "react-router-dom";


export default function AuthPage() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h2 className="text-3xl text-[#a6814d] font-semibold relative bottom-20 flex items-center gap-4"> <img src={Logo} alt="logo" /> Acme</h2>
        <Outlet/>
    </div>
  )
}
