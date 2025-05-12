import { LayoutDashboard, LogOut, Package, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import LogoImage from '../../assets/Standard Collection 10.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(true)

    const sidebarMenu = [
        {
            title: 'Dashboard',
            icon: <LayoutDashboard className='size-10 text-[#707070] hover:text-white hover:bg-[#303030] transition-all p-1 rounded-md' />,
            path:'/dashboard'
        },
        {
            title: 'Shipments',
            icon: <Package className='size-10 text-[#707070] hover:text-white hover:bg-[#303030] transition-all p-1 rounded-md' />,
            path:'/shipment'
        },
        {
            title: 'LogOut',
            icon: <LogOut className='size-10 text-[#707070] hover:text-red-400 hover:bg-[#303030] transition-all p-1 rounded-md' />,
            path:"/signin"
        },
    ]

    return (
        <div className={`${isOpen? "w-[200px]":"w-[80px]"} h-screen  border transition-all`}>
            <div onClick={() => setIsOpen((pre) => !pre)} className={`m-6 flex justify-end-safe cursor-pointer`}>
                {isOpen? <PanelLeftClose/>:<PanelLeftOpen/>}
            </div>
            <div className="m-5">
                <img onClick={() => setIsOpen((pre) => !pre)} src={LogoImage} alt="logo" className='cursor-pointer' />
                <h2 className='font-bold text-[#D08726]'>Acme</h2>
            </div>
            <div className={`flex flex-col gap-8 ml-5`}>
                {sidebarMenu.map((item, index) => {
                    return (
                        <div key={index} onClick={()=> navigate(item.path)} className={`${isOpen? "flex":""} hover:font-semibold items-center gap-2 cursor-pointer `}>
                            {item.icon}
                            {isOpen ? item.title : ""}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
