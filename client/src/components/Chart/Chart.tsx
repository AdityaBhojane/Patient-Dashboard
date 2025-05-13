"use client"

import { BarChart, Bar, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { usePatientProgress } from "@/hooks/patient/usePatientProgress"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Loader2 } from "lucide-react"


const chartConfig = {
  weight: {
    label: "weight",
    color: "#F8DEBD",
  },
} satisfies ChartConfig

interface ProgressData {
  recordedAt: string | number | Date
  month: string;
  weight: string;
}


export function Chart() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<ProgressData []>([])
  const { data, isFetching, isError } = usePatientProgress();

 
  useEffect(() => {
    if (data) {
      setProgress(data.data)
    }
  }, [data])

  useEffect(() => {
    if (isError) {
      navigate('/error')
    }
  }, [isError, navigate]);

  const chartData = progress.map((items)=>{
    return {
      month:new Date(items.recordedAt).toLocaleString("en-US", { month: "long" }),
      weight:parseInt(items.weight)
    }
  });



  return (
    <Card >
      <CardHeader>
        <CardTitle>Activity Growth</CardTitle>
        <CardDescription>
          Showing total weight for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isFetching ? <div className="w-full h-full flex justify-center"><Loader2 /></div> :
          <ChartContainer className="" config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              // margin={{
              //   left: 5,
              //   right: 5,
              // }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="weight"
                type="linear"
                fill="var(--color-weight)"
                fillOpacity={0.4}
                stroke="var(--color-weight)"
              />
            </BarChart>
          </ChartContainer>}
      </CardContent>

    </Card>
  )
}
