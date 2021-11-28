import React, { useEffect, useState } from 'react'
import './Items.css'
import sample from '../../assets/svg/largeLeaf.svg';
import requestHandler from '../../hooks/requestHandler';

const item = [
    {
        id: 1,
        title: 'Kuttanad',
        subtitle: 'Backwater',
        image: sample
    },
    {
        id: 2,
        title: 'Jaipur',
        subtitle: 'Ride',
        image: sample
    },
    {
        id: 3,
        title: 'Agra',
        subtitle: 'Historic',
        image: sample
    },
    {
        id: 4,
        title: 'Chennai',
        subtitle: 'Place',
        image: sample
    },
    {
        id: 5,
        title: 'Rajasthan',
        subtitle: 'Place',
        image: sample
    },
    
]

function Item() {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        requestHandler('GET','/prices').then((res)=>{
            if(res.success) {
                setItems(res.data.prices)
            }
        })
    },[])
    return (
        <div className="item">
            <h1>Today's Prices</h1>

            <div className="item__container">
                {items.map(exp => (
                    <div className="itemCard" key={exp.id}>
                        <img src={sample} alt="" />
                        <h3>{exp.item}</h3>
                        <p>Rs {exp.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Item
