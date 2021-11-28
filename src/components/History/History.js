import React, { useEffect, useState } from 'react';
import requestHandler from '../../hooks/requestHandler';
import './History.css'
const sample = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/unicorn.jpg"

const history = [
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

function History() {
    const [past, setPast] = useState([])
    useEffect(()=>{
        requestHandler('GET', '/dispose').then((res)=>{
            if(res.success) {
                if(res.data.requests.length)
                    setPast(res.data.requests)
            }
        })
        .catch(e=>{})
    },[])
    return (
        <div className="history">
            <h1>Your Dispose History</h1>

            <div className="history__container">
                {past.map(exp => (
                    <div className="historyCard" key={exp.id}>
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
    )
}

export default History
