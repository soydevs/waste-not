import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsEye, BsEyeSlash } from "react-icons/bs";

import authentication from '../../../assets/svg/largeLeaf.svg'

import './VolunteerSignup.css'
import requestHandler from '../../../hooks/requestHandler';
import { AuthContext } from '../../../context/AuthContext';
import { Navbar } from '../..';

function VolunteerSignup() {
    
    //eslint-disable-next-line
    const [errorMsg, setErrorMsg] = useState('')
    var timeout;
    const [aadhaarNo, setAadhaarNo] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hidden, setHidden] = useState(true)

    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [pincode, setpincode] = useState('')

    const history = useNavigate()

    const togglePassView = () => {
        setHidden(!hidden)
    }

    const { handleUser, handleToken, handleName } = useContext(AuthContext);

    
    const handleSignup = async (e) => {
        e.preventDefault()
        if(username && name && phone && address && email && pincode && aadhaarNo && password) {
            const data = {
                username,
                password,
                name,
                phone, 
                address,
                email,
                pincode,
                aadhaarNo
            }
            console.log(aadhaarNo)
            const response = await requestHandler('POST', '/auth/volunteer/signup', data);
            handleResponse(response);
        }
        else {
            setErrorMsg('Enter all the fields')
        }
    }

    const handleResponse = (response) => {
        if(response.success) {
            setTimeout(()=>{
                history('/volunteer/home');
                window.location.reload()
            }, 1000)
        }
        else {
            alert('Try again!')
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
        <div className="volunteerSignup">
            <div className="signin__left">
                <div className="signin__leftContent">
                    <h1>wasteNot</h1>
                    <img src={authentication} alt="" />
                </div>
            </div>
            <div className="signin__right">
                <div className="signin__right_container">
                    <h1>Sign Up</h1>
                    <form className="volunteer_input_form" onSubmit={handleSignup}>
                        <div className="signin__inputContainer">
                            <label>Aadhaar No</label>
                            <input 
                                placeholder="Your Aadhar No" 
                                type="text"
                                className="signin__input"
                                value={aadhaarNo}
                                onChange={(e) => setAadhaarNo(e.target.value)}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Name</label>
                            <input 
                                placeholder="Sandy Somerville" 
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
                                placeholder="youremail@gmail.com" 
                                type="text"
                                className="signin__input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Address</label>
                            <input 
                                placeholder="Somewhere under the blue sky" 
                                type="text"
                                className="signin__input"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Pincode</label>
                            <input 
                                placeholder="682021" 
                                type="text"
                                className="signin__input"
                                value={pincode}
                                onChange={(e) => setpincode(e.target.value.replace(/[^0-9]/g, ""))}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Username</label>
                            <input 
                                placeholder="parker123" 
                                type="text"
                                className="signin__input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="signin__inputContainer">
                            <label>Password</label>
                            <input 
                            placeholder="strong__password"
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
                        <div className="volunteer_auth_btn">
                            <button type="submit" className="signup_btn">Sign Up</button>
                            <p>or</p>
                            <Link to="/volunteer/login"><button className="login_btn">Log in</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default VolunteerSignup
