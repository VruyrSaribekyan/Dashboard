import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 250 },
  { name: "Group B", value: 350 },
  { name: "Group C", value: 450 },
];

const COLORS = ["#FF7777", "#00C49F", "#694BDB", "#FF8042"];

export default function AroundCharter() {
  return (
    <PieChart width={220} height={220}>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
          
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
