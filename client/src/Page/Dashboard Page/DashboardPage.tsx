
import { Chart } from "@/components/Chart/Chart";
import Measurements from "@/components/CommanCards/Measurements";
import ShipmentCard from "@/components/CommanCards/ShipmentCard";
import HealthCard from "@/components/HeathCard/HealthCard";
import SideBar from "@/components/Sidebar/SideBar";

export default function DashboardPage() {
  return (
    <>
      <div className="w-full h-screen flex">
        <SideBar />
        <div className="w-full flex justify-between max-lg:flex-col">
          <div className="w-full flex flex-col p-6">
            <div className="pb-4">
              <h2 className="text-2xl">Heath Overview</h2>
              <p className="text-[#4f4f4f]">Name : </p>
            </div>
            <div className="flex items-center gap-5 mt-2 max-xl:flex-col">
              <HealthCard title={"BloodSugar"} count={44} status={'normal'} />
              <HealthCard title={"HeartRate"} count={44} status={'normal'} />
              <HealthCard title={"BloodPressure"} count={44} status={'normal'} />
            </div>
            <div className="flex max-2xl:flex-col-reverse">
              <div className="mt-4 w-full h-full overflow-hidden">
                <Chart />
              </div>
              <ShipmentCard />
            </div>
          </div>
          <div className="">
            <Measurements />
          </div>
        </div>
      </div>

    </>
  )
}
