import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Statistics extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                chart: {
                    background: '#ffffff',
                    foreColor: '#333',
                    toolbar: {
                        show: false
                    },
                },
                xaxis: {
                    categories: ['1Aug', '2Aug', '3Aug', '4Aug', '5Aug', '6Aug']
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '25%',
                        endingShape: 'rounded'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: 'Sales Statistics',
                    padding: '2px',
                    offsetY: 20
                },
                colors: ["#627dff", "#f9f8fd"]
            },
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }]
        }
    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="500px"
                />
            </div>
        )

    }
}

export default Statistics;
