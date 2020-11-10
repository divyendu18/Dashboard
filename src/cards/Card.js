import React, { Component } from 'react';
import Splash from '../assets/splash.svg';
import './Card.css';

class Card extends Component {
    render() {
        const { name, value, type } = this.props;
        return (
            <div className="card">
                <div className="card_top">
                    {name}
                    <p>...</p>
                </div>
                <span className="line"></span>
                <div className="card_bottom">
                    <div className="card_bottom-data">
                        <div className="splash-img">
                            <img src={Splash} alt="splash" />
                        </div>
                        {value}
                    </div>
                    <div className="card_bottom-graph">
                        {type}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
