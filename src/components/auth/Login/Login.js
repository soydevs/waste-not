import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AuthContext } from '../../../context/AuthContext'
import './Login.css'
import Globe from '../../UI/Globe/Globe';
import requestHandler from '../../../hooks/requestHandler';


function Login() {
    const [errorMsg, setErrorMsg] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    var timeout;
    const [hidden, setHidden] = useState(true)

    // const { handleUser, handleToken, handleName } = useContext(AuthContext);

    const history = useNavigate()

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

            const response = await requestHandler('POST', '/auth/user/login', data);
            handleResponse(response);
        }
        else {
            setErrorMsg('Enter all the fields')
        }
    }

    const handleResponse = (response) => {
        if(response.success) {
            // handleUser(response.data.user)
            // handleToken(response.data.token)
            // handleName(response.data.user.name)
            history('/dispose')
        }
        else {
            setErrorMsg(response.message)
            timeout = setTimeout(()=>{
                setErrorMsg('')
            }, 4000)
        }
    }

    useEffect(()=>{
        return ()=>{
            clearTimeout(timeout)
        }
    })

    return (
        <div className="login">
            <div className="login__signup__container">
                <div className="lsc__left">
                    <div className="lsc__left__header">
                        <h1>Login</h1>
                    </div>
                    <div className="lsc__left__form login__transform">
                        <form className="login__signup__form" onSubmit={handleLogin}>
                            <p>{errorMsg}</p>
                            <div className="ls_input_div">
                                <label>username / phone</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="ls_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="ls_input" type={hidden ? 'password' : 'text'}/>
                                {hidden ? (
                                    <BsEyeSlash onClick={togglePassView} className="pass-icon"/>
                                    ) : (
                                    <BsEye onClick={togglePassView} className="pass-icon"/>
                                )}
                            </div>
                            <div className="login__signup__btn">
                                <button type="submit" className="signup_btn">Login</button>
                                <h6>not yet signed up ?</h6>
                                <Link to="/signup"><button className="login_btn">Signup</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lsc__right">
                    <div className="lsc__right__header">
                        <h1>Welcome Back, User</h1>
                    </div>
                    <div className="lsc__right_sphere">
                        <Globe />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
