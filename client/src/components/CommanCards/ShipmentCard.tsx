import { Activity, Dumbbell, Package, Truck } from 'lucide-react'


export default function ShipmentCard() {
    return (
        <div className='w-1/2 h-fit border p-6 max-[1748px]:p-4 mt-3 max-2xl:my-4 max-2xl:mx-0 rounded-2xl max-[1748px]:w-full '>
            <h3 className=' text-3xl mb-6 max-[1748px]:mb-3 max-[1850px]:text-[22px]'>Shipment and Medication</h3>
            <div className=' max-[1748px]:flex max-2xl:flex-wrap  max-[1748px]:items-center max-[1748px]:gap-4 max-[1748px]:text-sm '>
                <div>
                    <p className='bg-amber-400 text-lg max-[1748px]:text-sm font-semibold py-1 px-4 max-[1748px]:mt-1 rounded-2xl my-2 mt-8 max-[1850px]:mt-4 max-[1850px]:py-0.5'>Last Shipment </p>
                    <span className='px-4 max-[1748px]:text-sm text-[#5d5d5d]  font-semibold flex gap-4'><Truck /> 24 March 2025 </span>
                </div>
                <div>
                    <p className='bg-green-400 text-lg max-[1748px]:text-sm font-semibold py-1 px-4 rounded-2xl max-[1748px]:mt-1 my-2 mt-8 max-[1850px]:mt-4 max-[1850px]:py-0.5'>Delivery </p>
                    <span className='px-4 max-[1748px]:text-sm text-[#5d5d5d] font-semibold flex gap-4'><Package /> 24 March 2025</span>
                </div>
                <div>
                    <p className='bg-purple-300 max-[1748px]:text-sm text-lg font-semibold py-1 px-4 rounded-2xl my-2  mt-8 max-[1850px]:mt-4 max-[1748px]:mt-1 max-[1850px]:py-0.5'>Last Medication</p>
                    <span className='px-4 max-[1748px]:text-sm text-[#5d5d5d] font-semibold flex gap-4'><Dumbbell /> Daily Exercise</span>
                </div>
                <div className="flex justify-center mt-10 max-[1850px]:mt-4 max-[1850px]:mb-1 max-[1748px]:mt-1 ">
                    <button className='flex items-center gap-2 bg-blue-500 py-2 px-4 rounded-2xl text-white text-xl cursor-pointer max-[1748px]:text-sm max-[1748px]:py-1'>
                        Track Shipment
                        <Activity />
                    </button>
                </div>
            </div>
        </div>
    )
}
