import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Rainfall",
      fill: true,
      lineTension: 0.5,
      backgroundColor: "#FFD9E1",
      borderColor: "rgba(0,0,0,0.5)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 63, 65, 59, 80, 81, 56, 63],
      barPercentage: 0.5,
      barThickness: 116,
      maxBarThickness: 48,
      minBarLength: 2,
    },
  ],
};
class Barchart extends Component {
  render() {
    return (
      <div>
        <h1>BarChart</h1>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            maintainAspectRatio: true,
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default Barchart;
