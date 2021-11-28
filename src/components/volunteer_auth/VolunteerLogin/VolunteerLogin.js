import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsEye, BsEyeSlash } from "react-icons/bs";

import authentication from '../../../assets/svg/largeLeaf.svg';

import './VolunteerLogin.css'
import requestHandler from '../../../hooks/requestHandler';
import { AuthContext } from '../../../context/AuthContext';
import { Navbar } from '../..';

function VolunteerLogin() {
   
// eslint-disable-next-line
    const [errorMsg, setErrorMsg] = useState(' ')

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hidden, setHidden] = useState(true)

    const { handleUser, handleToken, handleName } = useContext(AuthContext);
    const history = useNavigate()

    var timeout;

    const togglePassView = () => {
        setHidden(!hidden)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if(username && password) {
            let data;
            let phone = /^\d+$/.test(username);

            if(phone)   data = { 'phone':username, password } 
            else data = { username, password }

            const response = await requestHandler('POST', '/auth/volunteer/login', data);
            handleResponse(response);
        }
        else {
            setErrorMsg('Enter all the fields')
        }
    }

    const handleResponse = (response) => {
        if(response.success) {
            handleUser(response.data.volunteer)
            handleToken(response.data.token)
            handleName(response.data.volunteer.name)
            history('/volunteer/home')
        }
        else {
            setErrorMsg('Try again!')
            timeout = setTimeout(()=>{
                setErrorMsg(' ')
            }, 4000)
        }
    }

    useEffect(()=>{
        return ()=>{
            clearTimeout(timeout)
        }
    })


    return (
        <>
        <Navbar/>
        <div className="volunteerLogin">
            <div className="signin__left">
                <div className="signin__leftContent">
                    <h1>wasteNot</h1>
                    <img src={authentication} alt="" />
                </div>
            </div>
            <div className="signin__right">
                <div className="signin__right_container">
                    <h1>Login</h1>
                    <form className="volunteer_input_form" onSubmit={handleLogin}>
                        <div className="signin__inputContainer">
                            <label>Username</label>
                            <input 
                                placeholder="username" 
                                type="text"
                                className="signin__input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Password</label>
                            <input 
                                type={hidden ? 'password' : 'text'}
                                placeholder="password"
                                className="signin__input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {hidden ? (
                                <BsEyeSlash onClick={togglePassView} className="pass-icon"/>
                                ) : (
                                <BsEye onClick={togglePassView} className="pass-icon"/>
                            )}
                        </div>
                        <div className="volunteer_auth_btn">
                            <button type="submit" className="signup_btn">Login</button>
                            <p>or</p>
                            <Link to="/volunteer/signup"><button className="login_btn">Signup</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default VolunteerLogin
