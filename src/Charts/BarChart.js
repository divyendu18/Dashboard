import React, { Component } from 'react';
import Chart from "react-apexcharts";

class BarChart extends Component {
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
                    stacked: true,
                    stackType: '100%'
                },
                grid: {
                    show: false
                },
                xaxis: {
                    categories: ['1Aug', '2Aug', '3Aug', '4Aug', '5Aug', '6Aug'],
                    labels: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
                        // endingShape: 'rounded'
                    }
                },
                dataLabels: {
                    enabled: false,
                    style: {
                        colors: ['red', 'green']
                    }

                },
                colors: ["#627dff", "#f9f8fd", "#2343df"],
            },
            series: [{
                name: 'PRODUCT A',
                data: [44, 55, 41, 67, 22, 43, 21, 49]
            }, {
                name: 'PRODUCT B',
                data: [13, 23, 20, 8, 13, 27, 33, 12]
            }]
        }
    }

    render() {
        return <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
        />

    }
}

export default BarChart;
