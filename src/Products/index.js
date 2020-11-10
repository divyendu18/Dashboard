import React, { Component } from 'react';
import './Products.css';
import { FaLayerGroup } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import Progress from '../Charts/Progress';


class Products extends Component {
    render() {
        return (
            // <div className="container">
            // col-xs-12 col-md-4 mr-2
            <div className="products">
                <div className="products_top">
                    <p>Top Products</p>
                    <p>...</p>
                </div>
                <p className="line"></p>
                <div className="products_bottom">
                    <div className="flex-container">
                        <div className="active"><FaCog />Settings</div>
                        <div><FaUserCog />Code</div>
                        <div><FaLayerGroup />Design</div>
                    </div>
                    <div className="products_value">
                        <p className="mr-2">eCommerce</p>
                        <div className="products_line">
                            <Progress color="blue" width="32%" />
                        </div>
                    </div>
                    <div className="products_value">
                        <p className="mr-2">HTML5</p>
                        <div className="products_line">
                            <Progress color="blue" width="46%" />
                        </div>
                    </div>
                    <div className="products_value">
                        <p className="mr-2">WordPress</p>
                        <div className="products_line">
                            <Progress color="blue" width="87%" />
                        </div>
                    </div>
                    <div className="products_value">
                        <p className="mr-2">HTML5</p>
                        <div className="products_line " >
                            <Progress color="blue" width="63%" />
                        </div>
                    </div>
                </div>
            </div>
            // </div>
        )
    }
}

export default Products;
