import { BloodPressureGraph, BloodSugarGraph, HeartRateGraph } from "@/assets";

type HeathCardProp = {
  image: string
  title: "BloodSugar" | "HeartRate" | "BloodPressure";
  status: string
  count: number
};

export default function HealthCard({ image, title, count, status }: HeathCardProp) {

  const unitType = {
    BloodSugar: 'mg/dl',
    HeartRate: 'bpm',
    BloodPressure: '/72 mmhg'
  }
  const graphType = {
    BloodSugar: BloodSugarGraph,
    HeartRate: HeartRateGraph,
    BloodPressure: BloodPressureGraph
  }
  const statusType = {
    BloodSugar: 'bg-[#F8DEBD]',
    HeartRate: 'bg-[#FBF0F3]',
    BloodPressure: 'bg-[#D0FBFF]'
  }

  return (
    <div className="w-[200px] h-[250px] border rounded-lg">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <img src={image} alt="icon" />
          <p className="font-semibold">{title}</p>
        </div>
        <div>
          <div className="flex items-end gap-1 pt-4 mb-2">
            <p className="text-3xl ">{count}</p><span>{unitType[title]}</span>
          </div>
          <span className={`text-[12px] py-1 px-2 ${statusType[title]} rounded-sm`} >{status}</span>
        </div>
        <img src={graphType[title]} alt="graph-image" />
      </div>
    </div>
  )
}
