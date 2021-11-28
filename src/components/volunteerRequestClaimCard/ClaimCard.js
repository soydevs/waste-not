import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from '..';
import { AuthContext } from '../../context/AuthContext';
import requestHandler from '../../hooks/requestHandler';
import './ClaimCard.css'
const sample = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/unicorn.jpg"

const cards = [
    {
        id: 1,
        title: 'Kuttanad',
        subtitle: 'Backwater',
        amount:'Rs 200',
        date:'20/3/2021',
        saved:'150 X 5kg = Rs 750',
        image: sample
    },
    {
        id: 2,
        title: 'Jaipur',
        subtitle: 'Ride',
        amount:'Rs 200',
        date:'20/3/2021',
        saved:'150 X 5kg = Rs 750',
        image: sample
    },
    {
        id: 3,
        title: 'Agra',
        subtitle: 'Historic',
        amount:'Rs 200',
        date:'20/3/2021',
        saved:'150 X 5kg = Rs 750',
        image: sample
    },
    {
        id: 4,
        title: 'Chennai',
        subtitle: 'Place',
        amount:'Rs 200',
        date:'20/3/2021',
        saved:'150 X 5kg = Rs 750',
        image: sample
    },
    {
        id: 5,
        title: 'Rajasthan',
        subtitle: 'Place',
        amount:'Rs 200',
        date:'20/3/2021',
        saved:'150 X 5kg = Rs 750',
        image: sample
    },
    
]

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
                    {available.map((exp, i) => (
                        <div className="claim__card__Card" key={exp.id}>
                            <img src={sample} alt="" />
                            <div>
                                <h3>{exp.type}</h3>
                                <p><span>Qty: </span>{exp.quantity}</p>
                                <p><span>Amount: </span>{exp.price}</p>
                                <p><span>Date Sold: </span>{Date(exp.createdAt).split(' GMT')[0]}</p>
                                <p><span>Total Saved: </span>Rs 700</p>
                                <button className="claim__button" onClick={handleClaim(i)}>Claim</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="claim__card__">
            <h1>Accepted Requests</h1>

            <div className="claim__card____container">
                {accepted.map((exp, i) => (
                    <div className="claim__card__Card" key={exp.id}>
                        <img src={sample} alt="" />
                        <div>
                            <h3>{exp.type}</h3>
                            <p><span>Qty: </span>{exp.quantity}</p>
                            <p><span>Amount: </span>{exp.price}</p>
                            <p><span>Date Sold: </span>{Date(exp.createdAt).split(' GMT')[0]}</p>
                            <p><span>Total Saved: </span>Rs 700</p>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default ClaimCard
