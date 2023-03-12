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
            <Link to = "/february">
                <div className = "feb">2월</div>
            </Link>
            <Link to = "/march">
                <div className = "mar">3월</div>
            </Link>
            <Link to = "/april">
                <div className = "apr">4월</div>
            </Link>
            <Link to = "/may">
                <div className = "may">5월</div>
            </Link>
            <Link to = "/june">
                <div className = "jun">6월</div>
            </Link>
            <Link to = "/july">
                <div className = "jul">7월</div>
            </Link>
            <Link to = "/august">
                <div className = "aug">8월</div>
            </Link>
            <Link to = "/september">
                <div className = "sep">9월</div>
            </Link>
            <Link to = "/october">
                <div className = "oct">10월</div>
            </Link>
            <Link to = "/november">
                <div className = "nov">11월</div>
            </Link>
            <Link to = "/december">
                <div className = "dec">12월</div>
            </Link>
        </div>
    );
}

export default home;