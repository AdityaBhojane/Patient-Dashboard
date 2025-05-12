/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react'
import MeasureCard from './MeasureCard'
import { BMIScale, Body } from '@/assets'
import { DotIcon } from 'lucide-react'
import BodyMeasureCard from './BodyMeasureCard'
import { usePatientMeasurement } from '@/hooks/patient/usePatientMeasurement'
import { useNavigate } from 'react-router-dom'



interface IUserMeasurement {
  weight?: string
  height?: string
  hip?: string
  waist?: string
  chest?: string
  RecordAt?:any
}
export default function Measurements({ BMI }: { BMI: number }) {
  const [heath, setHealth] = useState('loading...');
  const navigate = useNavigate()
  const [measurement, setMeasurement] = useState<IUserMeasurement>({})
  const { data, isError } = usePatientMeasurement();
  const [bmi, setBmi] = useState(0)

  useEffect(() => {
    if (data) {
      setMeasurement(data.data[0])
    }
  }, [data]);

  useEffect(() => {
    const range = Math.round(255 / 25);
    const min = 15;
    const bmi = Math.round(BMI)
    const count = (bmi - min) * range;
    setBmi(count);
    if (bmi > 25) {
      setHealth("Overweight")
    } else {
      setHealth("Normal")
    }
  }, [BMI]);

  useEffect(() => {
    if (isError) {
      navigate('/error')
    }
  }, [isError, navigate]);

 
  return (
    <div className='w-[600px] max-lg:w-full bg-[#303030] min-h-fit h-full p-10 rounded-l-4xl overflow-hidden  max-2xl:h-fit'>
      <div className="flex max-2xl:flex-col ">
        <div className="flex flex-col gap-4 p-1 px-3">
          <MeasureCard type="Weight" count={`${measurement?.weight}`} />
          <MeasureCard type="Height" count={`${measurement?.height} cm`} />
        </div>
        <div className='w-full h-[180px] p-4 bg-[#4A4949] rounded-xl text-white max-2xl:p-4  max-2xl:mt-4'>
          <p>Body Mass Index (BMI)</p>
          <div className="flex h-[50px] justify-between items-center">
            <span className='text-xl font-light'>{BMI}</span>
            <span className={`bg-[#D6FFDD] text-sm text-black rounded-lg py-1 px-3`}>{heath}</span>
          </div>
          <div className='max-w-[255px] h-[100px] flex flex-col justify-center relative  max-2xl:w-1/2'>
            <DotIcon className={`text-red-300 size-12 absolute -top-2 left-[142px]`} style={{ left: `${bmi}px` }} />
            <img src={BMIScale} alt="scale" className='w-full' />
          </div>
        </div>
      </div>
      <hr className='my-10 border border-[#5b5b5b]' />
      <div className="flex justify-between">
        <div >
          <div className="text-white">
            <h3 className='text-2xl'>Body Measurements</h3>
            <p className='my-2 text-sm mb-6 text-[#ccc]'>Last Check {new Date(measurement.RecordAt).toLocaleString("en-US", { month: "long" })}</p>
            <span className='py-1 px-4 text-sm bg-[#5E5E5E] rounded-md'>Inverted Triangle Body Shape</span>
          </div>
          <div className=' flex flex-col h-[400px] gap-4 justify-end'>
            <BodyMeasureCard type={"Chest"} count={measurement.chest} />
            <BodyMeasureCard type={"Waist"} count={measurement.waist} />
            <BodyMeasureCard type={"Hip"} count={measurement.hip} />
          </div>
        </div>
        <div className="h-[600px] ">
          <img src={Body} alt="Body-Snapshot" className='h-full' />
        </div>
      </div>
    </div>
  )
}
