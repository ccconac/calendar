import React from 'react';
import { Link } from 'react-router-dom';
import './April.css';

const April = () => {
    return (
        <div className = "main">
            <div className = "month">4월</div>
            <div className = "week">S M T W T F S</div>
            <div className = "adays1">01</div>
            <div className = "days2">02 03 04 05 06 07 08</div>
            <div className = "days3">09 10 11 12 13 14 15</div>
            <div className = "days4">16 17 18 19 20 21 22</div>
            <div className = "days5">23 24 25 26 27 28 29</div>
            <div className = "adays6">30</div>
        </div>
    )
}

export default April;