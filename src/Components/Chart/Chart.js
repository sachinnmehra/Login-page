import React from "react";
import Linegraph from "./Linegraph/Linegraph";
import BarChart from "../Chart/Barchart/Barchart";
import Piechart from "../Chart/Piechart/Piechart";
const chartPage = () => {
  return (
    <div>
      <BarChart />
      <Piechart />
      <Linegraph />
    </div>
  );
};

export default chartPage;
