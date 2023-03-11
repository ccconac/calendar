import React from "react";
import { Link } from "react-router-dom";
import "./January.css";

const january = () => {
    return (
        <div className = "main">
            <div className = "month">
                <img src = "/assets/january-month.png"/>
            </div>
            <div className = "week">S M T W T F S</div>
            <div className = "days1">01 02 03 04 05 06 07
                <Link to = "/january/0101">
                    <div className = "SEBD"></div>
                </Link>
            </div>
            <div className = "days2">08 09 10 11 12 13 14
                <Link to = "/january/0110">
                    <div className = "SHBD"></div>
                </Link>
            </div>
            <div className = "days3">15 16 17 18 19 20 21</div>
            <div className = "days4">22 23 24 25 26 27 28</div>
            <div className = "days5">29 30 31</div>
        </div>
        
    )
}

export default january;