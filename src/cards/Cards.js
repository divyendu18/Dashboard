import React, { Component } from 'react';
import './Cards.css';
import Card from './Card';
import AreaChart from '../Charts/AreaChart';
import PieChart from '../Charts/PieChart';
import BarChart from '../Charts/BarChart';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ maxWidth: "1800px", marginBottom: "1em" }}>
                <div className="row">
                    <div className="col-xs-12 col-lg-4"><Card name="Author Sales" value="$64M" type={<BarChart />} /></div>
                    <div className="col-xs-12 col-lg-4"><Card name="Technologies" value="9.3M" type={<PieChart />} /></div>
                    <div className="col-xs-12 col-lg-4"><Card name="Total Orders" value="17M" type={<AreaChart />} /></div>
                </div>
            </div>
        )
    }
}

export default Cards;
