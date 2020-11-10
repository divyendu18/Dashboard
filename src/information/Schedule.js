import React, { Component } from 'react';
import './Info.css';

export class Schedule extends Component {
    render() {
        return (
            <div className="infoCard">
                <div className="infoCard_top">
                    <p>Schedule</p>
                </div>
                <span className="line"></span>
                <div className="infoCard_middle">
                    <h4>UI/UX Design Updates</h4>
                    <p style={{ color: "blue" }}>11:00 AM- 12:00 PM</p>
                </div>
                <div className="infoCard_bottom">
                    <p className="bottom_1">Location</p>
                    <p className="bottom_2">View Map</p>
                </div>
            </div>
        )
    }
}

export default Schedule
