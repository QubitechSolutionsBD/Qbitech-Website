import React from 'react';

import html from "../../assets/pageservice/html5.png";
import css from "../../assets/pageservice/css3.png";
import js from "../../assets/pageservice/js.png";
import react from "../../assets/pageservice/react.png";
import redux from "../../assets/pageservice/redux.png";
import firebase from "../../assets/pageservice/firebase.png";
import node from "../../assets/pageservice/node.png";
import php from "../../assets/pageservice/php.png";
import mysql from "../../assets/pageservice/mysql.png";
import mongo from "../../assets/pageservice/mongo.png";

function Technologies() {
    return (
        <div className="service__technologies">
            <h1>
            <div><span id="aboutwhatwedoHeading">USED</span></div>
            <div><span id="aboutwhatwedoHeading">TECHNOLOGIES</span></div>
            </h1>

            <div className="technologies">
                <div className="tech">
                    <img src={html} alt="" />
                </div>
                <div className="tech">
                    <img src={css} alt="" />
                </div>
                <div className="tech">
                    <img src={js} alt="" />
                </div>
                <div className="tech">
                    <img src={react} alt="" />
                </div>
                <div className="tech">
                    <img src={redux} alt="" />
                </div>
                <div className="tech">
                    <img src={firebase} alt="" />
                </div>
                <div className="tech">
                    <img src={node} alt="" />
                </div>
                <div className="tech">
                    <img src={php} alt="" />
                </div>
                <div className="tech">
                    <img src={mongo} alt="" />
                </div>
                <div className="tech">
                    <img src={mysql} alt="" />
                </div>
                <div className="tech">
                    <div>& more</div>
                </div>
            </div>
        </div>
    )
}

export default Technologies
