import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiPencil, HiOutlineUserCircle, HiOutlineCake, HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlinePencil, HiOutlineTemplate } from "react-icons/hi";
import './Profile.css'
import { AuthContext } from '../../../context/AuthContext'
import requestHandler from '../../../hooks/requestHandler';

function Profile() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [pincode, setPincode] = useState('')
// eslint-disable-next-line
    const [user, setUser] = useState(
        {
            name:'', phone:'', pincode:'', address:'', email:''
        }
    )
    
    const { token, handleLogout } = useContext(AuthContext);

    
    const navigate = useNavigate()

    useEffect(() => {
        requestHandler('GET','/users', undefined, token).then(response => {
            if(response.success) {
                setUser(response.data)
                setPincode(response.data.pincode ? response.data.pincode : '')
                setAddress(response.data.address ? response.data.address : '')
                setName(response.data.name)
                setPhone(response.data.phone)
                setEmail(response.data.email)
            }
        }) // eslint-disable-next-line
    }, [])

    const handleSave = () => {
        const data = { name, email, pincode, address, phone }
        requestHandler('PATCH','/users', data , token).then(response => {
            console.log(response.success)
            if(response.success) {
                console.log(response)
                setUser(response.data.user)
                setName(response.data.user.name)
                setPhone(response.data.user.phone)
                setEmail(response.data.user.email)
                setAddress(response.data.user.address ? response.data.user.address : '')
                setPincode(response.data.user.pincode ? response.data.user.pincode : '')
            } else {
                setName(user.name ? user.name : '')
                setPhone(user.phone ? user.phone :'')
                setEmail(user.email ? user.email :'')
                setAddress(user.address ? user.address : '')
                setPincode(user.pincode ? user.pincode : '')
            }
        }) 
    }

    
    const logout = () => {
        handleLogout()
        navigate('/login')
    }


    return (
        <div className="profile">
            <div className="profile__header">
                <button onClick={logout} className="logout">Logout</button>
                <div className="profile__header__info">
                    <div className="phi_img">
                        <img src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                        <HiPencil className="edit_image"/>
                    </div>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </div>
            </div>
            <div className="profile__body">
                <div className="profile_body_details">
                    <label>Name</label>
                    <div className="profile_input_container">
                        <HiOutlineUserCircle className="profile__input_icon"/>
                        <input value={name || ''} onChange={(e) => setName(e.target.value)} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>
                <div className="profile_body_details">
                    <label>Address</label>
                    <div className="profile_input_container">
                        <HiOutlineLocationMarker className="profile__input_icon"/>
                        <input value={address || ''} onChange={(e) => setAddress(e.target.value)} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>
                <div className="profile_body_details">
                    <label>Pincode</label>
                    <div className="profile_input_container">
                        <HiOutlineTemplate className="profile__input_icon"/>
                        <input value={pincode || ''} onChange={(e) => setPincode(e.target.value)} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>
                <div className="profile_body_details">
                    <label>Phone</label>
                    <div className="profile_input_container">
                        <HiOutlinePhone className="profile__input_icon"/>
                        <input value={phone || ''} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>
                <div className="profile_body_details">
                    <label>Email</label>
                    <div className="profile_input_container">
                        <HiOutlineMail className="profile__input_icon"/>
                        <input value={email || ''} onChange={(e) => setEmail(e.target.value)} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>

                <button className="profile__save" onClick={handleSave}>Save Changes</button>
            </div>
        </div>
    )
}

export default Profile
