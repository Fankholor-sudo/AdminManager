import React from "react";
import { Pie, PieChart, Legend, Tooltip } from "recharts";

export default function ChartFour() {
  const data = [
    {
      value: 100,
      name: "credit orders",
      fill: "#8884d8",
    },
    {
      value: 80,
      name: "cash orders",
      fill: "#83a6ed",
    },
    {
      value: 180,
      name: "total orders",
      fill: "#8dd1e1",
    },
  ];

  return (
    <div style={chartStyle}>
      <h3 style={titleStyle}>Summary</h3>
      <PieChart height={250} width={280}>
        <Tooltip />
        <Legend />
        <Pie dataKey="value" data={data} nameKey="name" />
      </PieChart>
    </div>
  );
}

const chartStyle = {
  marginTop: "20px",
  padding: "20px",
  color: "#000",
  background: "#f8f8f8",
  fontFamily: "serif",
  borderRadius: "10px",
  boxShadow: "1px 2px 4px 2px rgba(230, 3, 39, 1)",
};

const titleStyle = {
  fontWeight: "bold",
  paddingBottom: "40px",
  fontFamily: "Poppins",
  textAlign: "center",
};
