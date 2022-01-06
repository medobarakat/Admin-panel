import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";
export default function Charts() {
  const data = [
    {
      name: "Jan",
      ActiveUser: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      ActiveUser: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      ActiveUser: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      ActiveUser: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      ActiveUser: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      ActiveUser: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      ActiveUser: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chart-title">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey="ActiveUser" stroke="#5550bd"></Line>
          <Tooltip />
          <CartesianGrid />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
