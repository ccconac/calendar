import React from "react";
import { Link } from "react-router-dom";
import "../styles/February.css";

const february = () => {
    return (
        <div className = "main">
            <div className = "month">2월(여긴 이미지 삽입할거)</div>
            <div className = "week">S M T W T F S</div>
            <div className = "fdays1">01 02 03 04</div>
            <div className = "days2">05 06 07 08 09 10 11</div>
            <div className = "days3">12 13 14 15 16 17 18
                <Link to = "/0213">
                    <div className = "HSBD"></div>
                </Link>
            </div>
            <div className = "days4">19 20 21 22 23 24 25</div>
            <div className = "days5">26 27 28</div>
        </div>
    )
}

export default february;