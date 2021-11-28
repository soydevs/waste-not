import React from 'react'

import './About.css'

import about_flower from '../../assets/svg/about_flower.svg'

function About() {
    return (
        <div className="about" id="about">
            <div className="about__left">
                <h1>CLEANER, <br /> GREENER with <br /> COLLABORATIVE ACTION</h1>
                <p>
                An app to manage waste disposal efficiently and solve all related problems. Volunteers can register to collect waste from app-users and dispose in dedicated areas. In return they are paid virtual coins which could be redeemed for money.
                </p>
                <button className="std_button">Dispose</button>
            </div>
            <div className="about__right">
                <img src={about_flower} alt="" />
            </div>
        </div>
    )
}

export default About
