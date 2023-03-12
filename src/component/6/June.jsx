import React from 'react';
import { Link } from 'react-router-dom';
import './June.css';

const May = () => {
    return (
        <div className = "main">
            <div className = "month">6월</div>
            <div className = "week">S M T W T F S</div>
            <div className = "jdays1">01 02 03</div>
            <div className = "days2">04 05 06 07 08 09 10</div>
            <div className = "days3">11 12 13 14 15 16 17</div>
            <div className = "days4">18 19 20 21 22 23 24</div>
            <div className = "days5">25 26 27 28 29 30</div>
        </div>
    )
}

export default May;