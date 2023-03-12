import React from 'react';
import { Link } from "react-router-dom";
import "./December.css";

const December = () => {
    return (
        <div className = "main">
            <div className = "month">12월</div>
            <div className = "week">S M T W T F S</div>
            <div className = "sdays1">01 02</div>
            <div className = "days2">03 04 05 06 07 08 09</div>
            <div className = "days3">10 11 12 13 14 15 16</div>
            <div className = "days4">17 18 19 20 21 22 23</div>
            <div className = "days5">24 25 26 27 28 29 30</div>
            <div className = "adays6">31</div>
        </div>
    )
}

export default December;