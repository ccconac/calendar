import React from "react";
import { Link } from "react-router-dom";
import "./October.css";

const October = () => {
    return (
        <div className = "main">
            <div className = "month">10월</div>
            <div className = "week">S M T W T F S</div>
            <div className = "days1">01 02 03 04 05 06 07</div>
            <div className = "days2">08 09 10 11 12 13 14</div>
            <div className = "days3">15 16 17 18 19 20 21</div>
            <div className = "days4">22 23 24 25 26 27 28</div>
            <div className = "days5">29 30 31</div>
        </div>
    )
}

export default October;