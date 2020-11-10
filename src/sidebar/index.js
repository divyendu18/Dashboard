import React, { Component } from 'react';
import './Sidebar.css';
import { FaAngleRight } from "react-icons/fa";
// import { FaAlignRight } from "react-icons/fa";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li>
                        <i className="fas fa-home icon_src" />
                        <span className="title">Home<FaAngleRight /></span>
                    </li>
                    <li>
                        <i className="fab fa-blogger-b icon_src" />
                        <span className="title">Blogs<FaAngleRight /></span>
                    </li>
                    <li>
                        <i className="fab fa-intercom icon_src" />
                        <span className="title">Custom<FaAngleRight /></span>
                    </li>
                    <li>
                        <i className="fas fa-external-link-alt icon_src" />
                        <span className="title">Extended<FaAngleRight /></span>
                    </li>
                    <li>
                        <i className="fab fa-blogger-b icon_src" />
                        <span className="title">Widgets<FaAngleRight /></span>
                    </li>
                    <li>
                        <i className="fal fa-wrench icon_src" />
                        <span className="title">Icon<FaAngleRight /></span>
                    </li>
                    <li>
                        <i className="far fa-bags-shopping icon_src" />
                        <span className="title">Portfolios<FaAngleRight /></span>
                    </li>
                    <li>
                        <i className="fas fa-calendar-week icon_src" />
                        <span className="title">Calender<FaAngleRight /></span>
                    </li>
                    <li>
                        <i className="fas fa-chart-bar icon_src" />
                        <span className="title">Charts<FaAngleRight /></span>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Sidebar;
