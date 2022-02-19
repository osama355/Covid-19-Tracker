import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My first dataset",
      fill: false,
      lineTension: 0.1,
      backgoundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const style = {
    main:{
        marginTop: '20px',
        textTransform:"uppercase"
    },
  graph: {
    width: "600px",
    height: "600px",
    margin: "10px auto",
  },
};
export default function LineGraph() {
  return (
    <div style={style.main}>
      {/* <h3>Graphical represntation of Corona</h3> */}
      <Line style={style.graph} data={data} />
    </div>
  );
}
