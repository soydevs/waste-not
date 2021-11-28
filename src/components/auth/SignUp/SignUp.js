import React, { useState , useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import './SignUp.css'
import { AuthContext } from '../../../context/AuthContext'
import Globe from '../../UI/Globe/Globe';
import requestHandler from '../../../hooks/requestHandler';
import { Navbar } from '../..';

function SignUp() {

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const [hidden, setHidden] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    var timeout;
    const navigate = useNavigate()
    const { currentUser, handleName, handleUser, handleToken }  = useContext(AuthContext);

    if (currentUser) {
        navigate('/dispose')
    }


    const togglePassView = () => {
        setHidden(!hidden)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        if(username && name && phone && password) {
            const data = {
                username,
                password,
                name,
                phone
            }
            const response = await requestHandler('POST', '/auth/user/signup', data);
            handleResponse(response);
        }
        else {
            setErrorMsg('Enter all the fields')
        }
    }

    const handleResponse = (response) => {
        if(response.success) {
            handleUser(response.data.user)
            handleToken(response.data.token)
            handleName(response.data.user.name)
            setTimeout(()=>{
                navigate('/dispose');
                window.location.reload()
            }, 1000)
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
        <>
        <Navbar/>
        <div className="signUp">
            <div className="login__signup__container">
                <div className="lsc__left">
                    <div className="lsc__left__header">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="lsc__left__form">
                        <form className="login__signup__form" onSubmit={handleSignUp}>
                            <p>{errorMsg}</p>
                            <div className="ls_input_div">
                                <label>Username</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="ls_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="ls_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Phone</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} className="ls_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="ls_input" type={hidden ? 'password' : 'text'}/>
                                {hidden ? (
                                    <BsEyeSlash onClick={togglePassView} className="pass-icon"/>
                                    ) : (
                                    <BsEye onClick={togglePassView} className="pass-icon"/>
                                )}
                            </div>
                            <div className="login__signup__btn">
                                <button type="submit" className="signup_btn">Sign Up</button>
                                <h6>already signed up ?</h6>
                                <Link to="/login"><button className="login_btn">Log in</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lsc__right">
                    <div className="lsc__right__header">
                        <h1>Your journey begins here...</h1>
                    </div>
                    <div className="lsc__right_sphere">
                        <Globe />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp
