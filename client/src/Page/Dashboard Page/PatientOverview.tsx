import { Chart } from "@/components/Chart/Chart";
import Measurements from "@/components/CommanCards/Measurements";
import ShipmentCard from "@/components/CommanCards/ShipmentCard";
import HealthCard from "@/components/HeathCard/HealthCard";

export default function PatientOverview() {
    return (
        <>
            <div className="w-full flex flex-col px-4 pt-2">
                <div className="pb-2">
                    <h2 className="text-2xl font-semibold">Heath Overview</h2>
                    <p className="text-[#4f4f4f]">Name : </p>
                </div>
                <div className="flex items-center gap-5 mt-2 max-xl:flex-col">
                    <HealthCard title={"Blood Sugar"} count={44} status={'normal'} />
                    <HealthCard title={"Heart Rate"} count={44} status={'normal'} />
                    <HealthCard title={"Blood Pressure"} count={44} status={'normal'} />
                </div>
                <div className="flex max-[1748px]:flex-col-reverse gap-2">
                    <div className="mt-4 w-full h-full overflow-hidden">
                        <Chart />
                    </div>
                    <ShipmentCard />
                </div>
            </div>
            <div className="">
                <Measurements />
            </div>
        </>
    )
}
