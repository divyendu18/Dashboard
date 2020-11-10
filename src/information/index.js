import React, { Component } from 'react';
import Schedule from './Schedule';
import Announcements from './Announcements';
import Projects from './Projects';
import './Information.css';

class Information extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ maxWidth: "1800px", marginBottom: "1em" }}>
                <div className="row">
                    <div className="col-xs-12 col-lg-4"><Announcements /></div>
                    <div className="col-xs-12 col-lg-4"><Projects /></div>
                    <div className="col-xs-12 col-lg-4"><Schedule /></div>
                </div>
            </div>
        )
    }
}

export default Information;
