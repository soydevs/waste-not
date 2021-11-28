import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { BsEye, BsEyeSlash } from "react-icons/bs";

import authentication from '../../../../assets/svg/authentication.svg'

import './TouristSignup.css'
import requestHandler from '../../../../hooks/requestHandler';
import { AuthContext } from '../../../../context/AuthContext';

function TouristSignup() {

    const { handleUser, handleToken, handleName } = useContext(AuthContext);
    
    //eslint-disable-next-line
    const [errorMsg, setErrorMsg] = useState('')
    var timeout;
    const [shopName, setShopName] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hidden, setHidden] = useState(true)

    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [pincode, setpincode] = useState('')

    const history = useHistory()

    const togglePassView = () => {
        setHidden(!hidden)
    }

    
    const handleSignup = async (e) => {
        e.preventDefault()
        if(username && name && phone && address && email && pincode && shopName && password) {
            const data = {
                username,
                password,
                name,
                phone, 
                address,
                email,
                pincode,
                shopName
            }
            const response = await requestHandler('POST', '/auth/volunteer/signup', data);
            handleResponse(response);
        }
        else {
            setErrorMsg('Enter all the fields')
        }
    }

    const handleResponse = (response) => {
        if(response.success) {
            handleUser(response.data.service)
            handleToken(response.data.token)
            handleName(response.data.service.name)
            history.push('/home')
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
        <div className="touristSignup">
            <div className="signin__left">
                <div className="signin__leftContent">
                    <h1>wasteNot</h1>
                    <img src={authentication} alt="" />
                </div>
            </div>
            <div className="signin__right">
                <div className="signin__right_container">
                    <h1>Sign Up</h1>
                    <form className="tourist_input_form" onSubmit={handleSignup}>
                        <div className="signin__inputContainer">
                            <label>Service Name</label>
                            <input 
                                placeholder="Hawaii tours" 
                                type="text"
                                className="signin__input"
                                value={shopName}
                                onChange={(e) => setShopName(e.target.value)}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Name</label>
                            <input 
                                placeholder="HRT" 
                                type="text"
                                className="signin__input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Phone</label>
                            <input 
                                placeholder="91923654789" 
                                type="text"
                                className="signin__input"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Email</label>
                            <input 
                                placeholder="jason.bourne@gmail.com" 
                                type="text"
                                className="signin__input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Address</label>
                            <input 
                                placeholder="here and there hahaha" 
                                type="text"
                                className="signin__input"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Pincode</label>
                            <input 
                                placeholder="PIN Code" 
                                type="text"
                                className="signin__input"
                                value={pincode}
                                onChange={(e) => setpincode(e.target.value.replace(/[^0-9]/g, ""))}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Username</label>
                            <input 
                                placeholder="hhhrrrttt" 
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
                        <div className="tourist_auth_btn">
                            <button type="submit" className="signup_btn">Sign Up</button>
                            <p>or</p>
                            <Link to="/service/login"><button className="login_btn">Log in</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TouristSignup
