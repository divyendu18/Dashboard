import React, { Component } from 'react';
import './Info.css';

export class Announcements extends Component {
    render() {
        return (
            <div className="infoCard">
                <div className="infoCard_top">
                    <p>Announcements</p>
                </div>
                <span className="line"></span>
                <div className="infoCard_middle">
                    <h4>Incredibely positive reviews</h4>

                    <p>To start a blog, think of a topic about and first brainstorm party is ways to write details.</p>
                </div>
                <div className="infoCard_bottom">
                    <p className="bottom_1">10th Nov, 2020</p>
                    <p className="bottom_2">View</p>
                </div>
            </div>
        )
    }
}

export default Announcements
