import { Modal } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DisposeForm } from "../";
import { AuthContext } from "../../context/AuthContext";
import requestHandler from "../../hooks/requestHandler";
import { images } from '../../utils/data';
import './Requests.css';
const sample = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/unicorn.jpg"


export default function Requests() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {token} = useContext(AuthContext);

    const [requests, setRequests] = useState([])

    const getData = () => {
        requestHandler('GET', '/dispose', undefined, token).then((res)=>{
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
                        <img src={images[exp.type.toLowerCase()]?images[exp.type.toLowerCase()]:sample} alt="" />
                        <div>
                            <h3>{exp.type}</h3>
                            <p><span>Price: </span>{exp.price}</p>
                            <p><span>Quantity: </span>{exp.quantity}</p>
                            <p><span>Date: </span>{Date(exp.createdAt)}</p>
                            <p><span>Total Saved: </span>{exp.price} x {exp.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}