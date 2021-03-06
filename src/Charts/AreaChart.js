import React, { Component } from 'react';
import Chart from "react-apexcharts";

class AreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          foreColor: '#333',
          toolbar: {
            show: false
          },
        },
        fill: {
          type: 'gradient'
        },
        grid: {
          show: false
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          labels: {
            show: false
          }
        },
        stroke: {
          curve: 'smooth'
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#627dff"]
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="100%"
        />
      </div>
    )
  }
}

export default AreaChart;
