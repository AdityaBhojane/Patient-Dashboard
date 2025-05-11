import { Activity, Dumbbell, Package, Truck } from 'lucide-react'


export default function ShipmentCard() {
    return (
        <div className='w-1/2 h-fit border p-6 m-5 max-2xl:my-4 max-2xl:mx-0 rounded-2xl max-2xl:w-full'>
            <h3 className=' text-xl font-semibold '>Shipment and Medication</h3>
            <div className=' max-2xl:flex max-2xl:flex-wrap max-2xl:justify-center max-2xl:items-center max-2xl:gap-4 max-2xl:text-sm '>
                <div>
                    <p className='bg-amber-400 font-bold py-1 px-4 rounded-2xl my-2'>Last Shipment </p>
                    <span className='px-4 text-[#5d5d5d] font-semibold flex gap-4'><Truck /> 24 March 2025 </span>
                </div>
                <div>
                    <p className='bg-green-400 font-bold py-1 px-4 rounded-2xl my-2 mt-5'>Delhivery </p>
                    <span className='px-4 text-[#5d5d5d] font-semibold flex gap-4'><Package /> 24 March 2025</span>
                </div>
                <div>
                    <p className='bg-purple-300 font-bold py-1 px-4 rounded-2xl my-2  mt-5'>Last Medication</p>
                    <span className='px-4 text-[#5d5d5d] font-semibold flex gap-4'><Dumbbell /> Daily Exercise</span>
                </div>
                <div className="flex justify-center mt-6 mb-3">
                    <button className='flex items-center gap-2 bg-blue-500 py-2 px-4 rounded-2xl text-white text-xl cursor-pointer'>
                        Track Shipment
                        <Activity />
                    </button>
                </div>
            </div>
        </div>
    )
}
