import * as React from "react";
import { LineChart, Line } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 6000,
    pv: 2400,
    amt: 1400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 8398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 4800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 2300,
    amt: 2100
  }
];

export default function LineCharterB() {
  return (
    <LineChart width={152} height={100} data={data}>
      <Line type="monotone" dataKey="pv" stroke="#F3C522" strokeWidth={1} />
    </LineChart>
  );
}
