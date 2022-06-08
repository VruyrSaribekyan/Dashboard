import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { GET_AMOUNTS } from "../query/users";

export default function ComposedCharter() {
  const {data, loading, error} =useQuery(GET_AMOUNTS)
  const [amount, setAmount]=useState([])
  useEffect(()=>{
      if(!loading){
    setAmount(data.getAmountA)
  }
},[data])


return (
    <div style={{ width: "100%", height: 230 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={amount}
         
        >
          <CartesianGrid stroke="#f5f5f5" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={30} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
