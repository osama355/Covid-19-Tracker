import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import './Styling/lineGraph.css';

export default function LineGraph({verticalAxis,horizontalAxis}) {
  const data = {
    labels: horizontalAxis.map((l)=>l.substr(0,10)),
    datasets: [
      {
        label: "My first dataset",
        fill: false,
        lineTension: 0.1,
        borderColor: "#1976D2",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#1976D2",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#1976D2",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: verticalAxis,
      },
    ],
  };
  return (
    <div className="main">
      <Line className="graph" data={data} />
    </div>
  );
}
