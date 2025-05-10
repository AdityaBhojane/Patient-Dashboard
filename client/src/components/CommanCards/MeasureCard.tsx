import { MeasureScale } from '@/assets'

export default function MeasureCard({ type }: { type: "Height" | "Weight" }) {
  const colorType = {
    Height: "bg-[#F8DEBD]",
    Weight: "bg-[#D0FBFF]"
  }
  return (
    <>
      <div className={`flex justify-between ${colorType[type]} w-[200px] h-[80px] p-4 rounded-xl`}>
        <p className='self-end'>{type}</p>
        <div className="flex flex-col justify-between items-start">
          <img src={MeasureScale} alt="scale" className='w-[70px] h-[20px] ' />
          <span className='text-sm'>170 cm</span>
        </div>
      </div>
    </>
  )
}
