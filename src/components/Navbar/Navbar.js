import React from 'react'

import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="nc__left">
                    <h1>Kollect</h1>
                    <div className="nc__left_items">
                        <NavHashLink to="/#about" smooth activeClassName="nav__active" className="nav__item">
                            <span>About</span>   
                        </NavHashLink>
                        <NavHashLink to="/#vision" smooth activeClassName="nav__active" className="nav__item">
                            <span>Our Vision</span> 
                        </NavHashLink>
                        <NavHashLink to="/" smooth activeClassName="nav__active" className="nav__item">
                            <span>Impacts</span> 
                        </NavHashLink>
                        <NavHashLink to="/" smooth activeClassName="nav__active" className="nav__item">
                            <span>Contribute</span> 
                        </NavHashLink>
                        <NavHashLink to="/" smooth activeClassName="nav__active" className="nav__item">
                            <span>Contact</span> 
                        </NavHashLink>
                    </div>
                </div>
                <div className="nc__right">
                    <Link to="/dispose">
                        <button className="navBtn nav_dispose">Dispose Waste</button>
                    </Link>
                    <Link to="/volunteer">
                        <button className="navBtn nav_volunteer">Volunteer</button>
                    </Link>
                </div> 
            </div>
        </div>
    )
}

export default Navbar
