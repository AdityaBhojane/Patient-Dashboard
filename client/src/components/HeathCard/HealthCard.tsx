import { BloodPressure, BloodPressureGraph, BloodSugar, BloodSugarGraph, HeartRate, HeartRateGraph } from "@/assets";

type HeathCardProp = {
  title: "BloodSugar" | "HeartRate" | "BloodPressure";
  status: string
  count: number
};

export default function HealthCard({ title, count, status }: HeathCardProp) {

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

  const imageType = {
    BloodSugar: BloodSugar,
    HeartRate: HeartRate,
    BloodPressure: BloodPressure
  }

  return (
    <div className="w-full h-[250px] max-xl:h-fit border rounded-lg overflow-hidden">
      <div className="p-4 max-xl:flex max-xl:justify-between max-xl:items-center max-xl:flex-wrap">
        <div className="flex items-center gap-3">
          <img src={imageType[title]} alt="icon" />
          <p className="font-semibold">{title}</p>
        </div>
        <div>
          <div className="flex items-end gap-1 pt-4 mb-2">
            <p className="text-3xl ">{count}</p><span>{unitType[title]}</span>
          </div>
          <span className={`text-[12px] py-1 px-2 ${statusType[title]} rounded-sm`} >{status}</span>
        </div>
        <img src={graphType[title]} alt="graph-image" className="w-full h-[70px] max-xl:hidden" />
      </div>
    </div>
  )
}
