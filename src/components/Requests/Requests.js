import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DisposeForm } from "../";
import requestHandler from "../../hooks/requestHandler";
import './Requests.css';
const sample = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/unicorn.jpg"


export default function Requests() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const reqs = [
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

    const [requests, setRequests] = useState([])

    const getData = () => {
        requestHandler('GET', '/dispose').then((res)=>{
            if(res.success) {
                if(res.data.requests.length)
                    setRequests(res.data.requests)
            }
        }).catch(()=>{});
    }
    useEffect(()=>{
        getData();
    },[])

    const handleAdd = () => {
        getData()
        handleClose();
    }

    return (
    <>
        <div className="requests">
            <h1>Current Requests</h1>
            <button onClick={handleOpen}>New Request</button>
        </div>
        <Modal
        open={open}
        onClose={handleClose} 
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
          <div>
          <DisposeForm onClose={handleClose} onAdd={handleAdd} />
          </div>
       
      </Modal>
      <div className="current__requests">
            <div className="requests__container">
                {requests.map(exp => (
                    <div className="requestCard" key={exp.id}>
                        <img src={sample} alt="" />
                        <div>
                            <h3>{exp.type}</h3>
                            <p><span>Price: </span>{exp.price}</p>
                            <p><span>Quantity: </span>{exp.quantity}</p>
                            <p><span>Date Sold: </span>{Date(exp.createdAt)}</p>
                            <p><span>Total Saved: </span>Rs 700</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}