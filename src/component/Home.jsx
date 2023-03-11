import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const home = () => {
    return (
        <div className = "main">
            <div className = "homeYear">2023년</div>
            <Link to = "/january">
                <div className = "jan">1월</div>
            </Link>
            <div className = "feb">2월</div>
            <div className = "mar">3월</div>
            <div className = "apr">4월</div>
            <div className = "may">5월</div>
            <div className = "jun">6월</div>
            <div className = "jul">7월</div>
            <div className = "aug">8월</div>
            <div className = "sep">9월</div>
            <div className = "oct">10월</div>
            <div className = "nov">11월</div>
            <div className = "dec">12월</div>
        </div>
    );
}

export default home;