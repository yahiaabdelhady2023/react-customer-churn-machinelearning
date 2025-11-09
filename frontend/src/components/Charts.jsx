import "../styles/Charts.css"
import { Children } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

function TitleComponent({title}){
  return (
      <h2 className="chart-title">{title}</h2>
  )
}

function BarChartComponent() {
  const data = [
    {
      month: "Jan",
      active: 10,
      lost: 2,
      inactive: 20,
    },
    {
      month: "Feb",
      active: 15,
      lost: 3,
      inactive: 18,
    },
    {
      month: "Mar",
      active: 22,
      lost: 1,
      inactive: 15,
    },
    {
      month: "Apr",
      active: 28,
      lost: 4,
      inactive: 12,
    },
    {
      month: "May",
      active: 35,
      lost: 2,
      inactive: 10,
    },
    {
      month: "Jun",
      active: 42,
      lost: 5,
      inactive: 8,
    },
    {
      month: "Jul",
      active: 48,
      lost: 3,
      inactive: 7,
    },
    {
      month: "Aug",
      active: 52,
      lost: 6,
      inactive: 5,
    },
    {
      month: "Sep",
      active: 58,
      lost: 4,
      inactive: 4,
    },
    {
      month: "Oct",
      active: 65,
      lost: 2,
      inactive: 3,
    },
    {
      month: "Nov",
      active: 70,
      lost: 5,
      inactive: 2,
    },
    {
      month: "Dec",
      active: 75,
      lost: 3,
      inactive: 1,
    },
  ];

  return (
    <>
    <TitleComponent title="Customers Status" />
    <ResponsiveContainer width="100%" aspect={1}>
      <BarChart data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" label={{value:"Month", position:"insideBottom", offset:-15}} />
        <YAxis width="auto" label={{value: "Frequency of Customers", position:"insideLeft", angle:-90}} />
        <Legend />
        <Bar dataKey="active" fill="#0fc005ff" />
        <Bar dataKey="inactive" fill="#aaad02ff" />
        <Bar dataKey="lost" fill="#ad0202ff" />
      </BarChart>
    </ResponsiveContainer>
    </>

  );
}





export default BarChartComponent;
