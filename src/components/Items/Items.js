import React, { useEffect, useState } from 'react'
import './Items.css'
import sample from '../../assets/svg/largeLeaf.svg';
import requestHandler from '../../hooks/requestHandler';
import {images} from '../../utils/data';

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
                        <img src={images[exp.item.toLowerCase()]?images[exp.item.toLowerCase()]:sample} alt="" />
                        <h3>{exp.item}</h3>
                        <p>Rs {exp.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Item
