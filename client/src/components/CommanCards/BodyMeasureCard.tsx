import { ArrowDown, ArrowUp } from "lucide-react"

export default function BodyMeasureCard({type,count}:{type:string, count:number}) {
  const Icon = {
    arrowUp:<ArrowDown/>,
    arrowDown:<ArrowUp/>
  }
  return (
    <div className="w-[150px] h-[100px] bg-white flex flex-col justify-center gap-1 items-center rounded-2xl">
        <p >{type} (in)</p>
        <div className="flex items-center gap-1">
            <span className="text-xl">{count}</span>
            <ArrowDown className="text-red-500"/>
        </div>
    </div>
  )
}
