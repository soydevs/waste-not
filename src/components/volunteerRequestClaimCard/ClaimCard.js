import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from '..';
import { AuthContext } from '../../context/AuthContext';
import requestHandler from '../../hooks/requestHandler';
import {images} from '../../utils/data';
import './ClaimCard.css'
const sample = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/unicorn.jpg"


function ClaimCard() {
    const { token }  = useContext(AuthContext);
    const [available, setAvailable] = useState([])
    const [accepted, setAccepted] = useState([])
    useEffect(()=>{
        requestHandler('GET', '/dispose/volunteer', undefined, token).then((res)=>{
            if(res.success) {
                if(res.data.requests.length)
                    setAvailable(res.data.requests)
            }
        })
        .catch(e=>{})

    },[])

    useEffect(()=>{
        requestHandler('GET', '/dispose/volunteer/claims', undefined, token).then((res)=>{
            if(res.success) {
                if(res.data.claims.length)
                console.log(res.data)
                    setAccepted(res.data.claims)
            }
        })
        .catch(e=>{})
    },[available])

    const handleClaim = (index) => (e) => {
        e.preventDefault()
        requestHandler('POST', '/dispose/volunteer', {data:available[index]}, token).then((res)=>{
            if(res.success) {
                setAvailable(prev => {
                    return prev.filter((el,i)=>{
                        return i!==index;
                    })
                })
            }
        })
        .catch(e=>{})
        
    }
    return (
        <>
        <Navbar/>
            <div className="claim__card__">
                <h1>Available Requests</h1>

                <div className="claim__card____container">
                    {available.length ? available.map((exp, i) => (
                        <div className="claim__card__Card" key={exp.id}>
                            <img src={images[exp.type.toLowerCase()]?images[exp.type.toLowerCase()]:sample} alt="" />
                            <div>
                                <h3>{exp.type}</h3>
                                <p><span>Qty: </span>{exp.quantity}</p>
                                <p><span>Amount: </span>{exp.price}</p>
                                <p><span>Date of Req: </span>{Date(exp.createdAt).split(' GMT')[0]}</p>
                                <p><span>Phone: </span>{exp.user.phone}</p>
                                <button className="claim__button" onClick={handleClaim(i)}>Claim</button>
                            </div>
                        </div>
                    )) : <h1>No requests found! Try again later</h1>}
                </div>
            </div>
            <div className="claim__card__">
            <h1>Accepted Requests</h1>

            <div className="claim__card____container">
                {accepted.map((exp, i) => (
                    <div className="claim__card__Card" key={exp.id}>
                        <img src={images[exp.type.toLowerCase()]?images[exp.type.toLowerCase()]:sample} alt="" />
                        <div>
                            <h3>{exp.type}</h3>
                            <p><span>Qty: </span>{exp.quantity}</p>
                            <p><span>Amount: </span>{exp.price}</p>
                            <p><span>Date of Req: </span>{Date(exp.createdAt).split(' GMT')[0]}</p>
                            <p><span>Phone: </span>{exp.user.phone}</p>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default ClaimCard
