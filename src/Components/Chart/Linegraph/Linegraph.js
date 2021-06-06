import React, { Component } from "react";
import { Line } from "react-chartjs-2";
const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: true,
      lineTension: 0.5,
      backgroundColor: "#FFD9E1",
      borderColor: "rgba(0,0,0,.4)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

class Linegraph extends Component {
  render() {
    return (
      <div>
        <h1>Line Graph</h1>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default Linegraph;
