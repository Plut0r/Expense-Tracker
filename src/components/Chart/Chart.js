import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar"

function Chart(props) {
  const dataPointValues = props.datapoints.map(datapoint => datapoint.value)
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
