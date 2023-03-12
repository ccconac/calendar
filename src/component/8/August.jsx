import React from 'react';
import { Link } from "react-router-dom";
import "./August.css";

const August = () => {
    return (
        <div className = "main">
            <div className = "month">8월</div>
            <div className = "week">S M T W T F S</div>
            <div className = "apdays1">01 02 03 04 05</div>
            <div className = "days2">06 07 08 09 10 11 12</div>
            <div className = "days3">13 14 15 16 17 18 19</div>
            <div className = "days4">20 21 22 23 24 25 26</div>
            <div className = "days5">27 28 29 30 31</div>
        </div>
    )
}

export default August;