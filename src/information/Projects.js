import React, { Component } from 'react';
import Progress from '../Charts/Progress';
import './Info.css';

export class Projects extends Component {
    render() {
        return (
            <div className="infoCard">
                <div className="infoCard_top">
                    <p>Projects</p>
                </div>
                <span className="line"></span>
                <div className="infoCard_middle">
                    <h4>First MileStone achievement</h4>
                    <p>To start a blog, think of a topic about and first brainstorm party is ways to write details.</p>
                </div>
                <div className="infoCard_bottom">
                    <div className="progress-section">
                        <div className="progress-data">
                            <p>Progress</p>
                            <p>45%</p>
                        </div>
                        <div className="progress">
                            <Progress color="#627dff" width="45%" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
