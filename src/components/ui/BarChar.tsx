import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar
} from "recharts";



const data = [
 
{
  name: "Jan",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Feb",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Mar",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Apr",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "May",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Jun",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Jul",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Aug",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Sep",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Oct",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Nov",
  total: Math.floor(Math.random() * 5000) + 1000
},
{
  name: "Dec",
  total: Math.floor(Math.random() * 5000) + 1000
}
];

// Correctly type the props parameter using the Props interface.
// If Props is empty and you don't plan to use it, you can simply pass an empty object.
export default function BarChart() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} fill="#FFF" radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
