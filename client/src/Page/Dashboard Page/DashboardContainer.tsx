
import SideBar from "@/components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";

export default function DashboardContainer() {
  return (
    <>
      <div className="w-full h-screen flex">
        <SideBar />
        <div className="w-full flex justify-between max-lg:flex-col">
          <Outlet/>
        </div>
      </div>
    </>
  )
}
