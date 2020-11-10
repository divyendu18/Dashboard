import React, { Component } from 'react';
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        series: [44, 55, 13],
        labels: ['HTML', 'CSS', 'ANGULAR'],
        dataLabels: {
          enabled: false
        },
        colors: ["#627dff", "#f9f8fd"],
      },
    };
  }
  render() {
    return (
      <div className="container">
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type="donut"
          width="100%"
        />
      </div>
    )
  }
}

export default PieChart;
