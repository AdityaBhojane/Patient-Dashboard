import { Chart } from "@/components/Chart/Chart";
import Measurements from "@/components/CommanCards/Measurements";
import ShipmentCard from "@/components/CommanCards/ShipmentCard";
import HealthCard from "@/components/HeathCard/HealthCard";
import { usePatientDetails } from "@/hooks/patient/usePatientDetails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IHeathData {
    BloodSugar?: string
    HeartRate?: string
    BloodPressure?: string
    BMI:number
    userId:{
        username:string
    }
};

export default function PatientOverview() {
    const [Heath, setHeathData] = useState<IHeathData>({
        BMI:0,
        userId:{
            username:''
        }
    });
    const navigate = useNavigate();
    const { data, isFetching, isError } = usePatientDetails();
    useEffect(() => {
        if (data) {
            setHeathData(data.data[0])
        }
    }, [data]);
    

    
    useEffect(() => {
        if (isError) {
            navigate('/error')
        }
    }, [isError, navigate])



    return (
        <>
            <div className="w-full flex flex-col px-4 pt-2">
                <div className="pb-2">
                    <h2 className="text-2xl font-semibold">Heath Overview</h2>
                    <p className="text-[#4f4f4f]">Name : {Heath.userId.username}</p>
                </div>
                <div className="flex items-center gap-5 mt-2 max-xl:flex-col">
                    <HealthCard title={"Blood Sugar"} count={Heath?.BloodSugar} status={'normal'} isFetching={isFetching} />
                    <HealthCard title={"Heart Rate"} count={Heath?.HeartRate} status={'normal'} isFetching={isFetching} />
                    <HealthCard title={"Blood Pressure"} count={Heath?.BloodPressure} status={'normal'} isFetching={isFetching} />
                </div>
                <div className="flex max-[1748px]:flex-col-reverse gap-2">
                    <div className="mt-4 w-full h-full overflow-hidden">
                        <Chart />
                    </div>
                    <ShipmentCard />
                </div>
            </div>
            <div className="">
                <Measurements BMI={Heath.BMI}/>
            </div>
        </>
    )
}
