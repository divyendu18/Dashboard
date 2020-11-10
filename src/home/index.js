import React, { Component } from 'react';
import './Home.css';
import Navbar from '../navbar';
import Cards from '../cards/Cards';
import Information from '../information';
import Statistics from '../statistics';
import Products from '../Products';
import DateTime from '../date';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Navbar />
                <div className="home_header">
                    <div className="home_left col-xs-12 col-md-10">
                        <div className="home_header_value">
                            <p id="head_value">Dashboard</p>
                        </div>
                        <div className="home_header_value">
                            <p>Dashboards</p>
                        </div>
                        <div className="home_header_value">
                            <p>Navy Aside</p>
                        </div>
                    </div>
                    <div className="home_right col col-lg-2">
                        <div className="date"> <DateTime /></div>
                    </div>

                </div>
                <Cards />
                <Information />
                <div className="container-fluid" style={{ marginBottom: "2em" }}>
                    <div className="row" style={{ width: "100%" }}>
                        <div className="col-xs-12 col-lg-4"><Products /></div>
                        <div className="col-xs-12 col-lg-8"><Statistics /></div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home;
