import React from "react";
import { Form } from "semantic-ui-react";

const ChartForm = () => (
  <Form>
    <select>
      <option value="null">Select a Chart</option>
      <option value="Bar Chart">Bar Chart</option>
      <option value="Line Graph">Line Graph</option>
      <option value="Pie chart">Pie chart</option>
    </select>
  </Form>
);

export default ChartForm;
