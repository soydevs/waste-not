import React, { useEffect, useState } from 'react';
import requestHandler from '../../hooks/requestHandler';
import './History.css'
// const sample = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/unicorn.jpg"



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
                <h1>
               Create a request and get started!
               </h1>
            </div>
        </div>
    )
}

export default History
