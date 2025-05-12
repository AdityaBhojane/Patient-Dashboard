
import { useState } from 'react'
import MeasureCard from './MeasureCard'
import { BMIScale, Body } from '@/assets'
import { DotIcon } from 'lucide-react'
import BodyMeasureCard from './BodyMeasureCard'

export default function Measurements() {
  const [heath, setHealth] = useState('loading...')


  return (
    <div className='w-[600px] max-lg:w-full bg-[#303030] min-h-fit h-full p-10 rounded-l-4xl overflow-hidden  max-2xl:h-fit'>
      <div className="flex max-2xl:flex-col ">
        <div className="flex flex-col gap-4 p-1 px-3">
          <MeasureCard type="Weight" />
          <MeasureCard type="Height" />
        </div>
        <div className='w-full h-[180px] p-4 bg-[#4A4949] rounded-xl text-white max-2xl:p-4  max-2xl:mt-4'>
          <p>Body Mass Index (BMI)</p>
          <div className="flex h-[50px] justify-between items-center">
            <span className='text-xl font-light'>44</span>
            <span className={`bg-[#D6FFDD] text-sm text-black rounded-lg py-1 px-3`}>{heath}</span>
          </div>
          <div className='w-full h-[100px] flex flex-col justify-center relative  max-2xl:w-1/2'>
            <DotIcon className='text-red-300 size-12 absolute -top-2' />
            <img src={BMIScale} alt="scale" />
          </div>
        </div>
      </div>
      <hr className='my-10 border border-[#5b5b5b]' />
      <div className="flex justify-between">
        <div >
          <div className="text-white">
            <h3 className='text-2xl'>Body Measurements</h3>
            <p className='my-2 text-sm mb-6 text-[#ccc]'>Last Check 2 days Ago</p>
            <span className='py-1 px-4 text-sm bg-[#5E5E5E] rounded-md'>Inverted Triangle Body Shape</span>
          </div>
          <div className=' flex flex-col h-[400px] gap-4 justify-end'>
            <BodyMeasureCard type={"Chest"} count={44.5} />
            <BodyMeasureCard type={"Waist"} count={34} />
            <BodyMeasureCard type={"Hip"} count={42} />
          </div>
        </div>
        <div className="h-[600px] ">
          <img src={Body} alt="Body-Snapshot" className='h-full' />
        </div>
      </div>
    </div>
  )
}
