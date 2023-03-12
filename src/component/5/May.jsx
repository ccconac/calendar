import React from 'react';
import { Link } from 'react-router-dom';
import './May.css';

const May = () => {
    return (
        <div className = "main">
            <div className = "month">5월</div>
            <div className = "week">S M T W T F S</div>
            <div className = "mdays1">01 02 03 04 05 06</div>
            <div className = "days2">07 08 09 10 11 12 13</div>
            <div className = "days3">14 15 16 17 18 19 20</div>
            <div className = "days4">21 22 23 24 25 26 27</div>
            <div className = "days5">28 29 30 31</div>
        </div>
    )
}

export default May;