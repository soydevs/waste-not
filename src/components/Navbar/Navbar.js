import React, { useContext } from 'react'
import { NavHashLink } from 'react-router-hash-link';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

import './Navbar.css'

function Navbar() {
    const navigate = useNavigate()

    // const {handleLogout} = useContext(AuthContext);

    const handleLogout = () => {
        
        localStorage.removeItem('wasteNotUser')
        localStorage.removeItem('wasteNotToken')
        localStorage.removeItem('wasteNotName')        
   
    }

    const logout = () => {
        handleLogout();
        setTimeout(()=>{
            navigate('/');
            window.location.reload()
        }, 1000)
    }
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
                    <Link to="/volunteer/home">
                        <button className="navBtn nav_volunteer">Volunteer</button>
                    </Link>
                    <button className="navBtn nav_volunteer" onClick={logout}>Logout</button>
                </div> 
            </div>
        </div>
    )
}

export default Navbar
