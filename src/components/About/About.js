import React from 'react'

import './About.css'

import about_flower from '../../assets/svg/about_flower.svg'

function About() {
    return (
        <div className="about" id="about">
            <div className="about__left">
                <h1>INNOVATIONS, <br /> TECHNOLOGIES & <br /> COLLABORATIVE ACTION</h1>
                <p>
                    We solve the world’s toughest problems with our powerful minds. Lorem epsum solve the world’s toughest problems with our powerful minds. 
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
