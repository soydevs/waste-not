import "./DisposeForm.css";
import largeLeaf from "../../assets/svg/largeLeaf.svg";
import { useRef, useState } from "react";
import requestHandler from "../../hooks/requestHandler";

export default function DisposeForm({ onClose, onAdd }) {

    const handleAdd = async (e) => {
        e.preventDefault()
        let data={
            type, quantity:qty, availableTime:timeSlot, description, address:'Somewhere under blue sky', pincode:'123456'
        }
        console.log([type, qty, timeSlot, description])
        const res = await requestHandler('POST', '/dispose', data);
        if(res.success) onAdd()
        else alert("Try again!")
    };
    const [type, setType] = useState('');
    const [qty, setQty] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [description, setDescription] = useState('');

    
  return (
    <>
      <div className='dispose__container'>
        <h2>New Dispose Request</h2>
        <img
          src={largeLeaf}
          alt='Large Green Leaf'
        />
        <section id="dispose__form" className='dispose__form'>
          <div>
            <label>Item Type</label>
            {/* <input onChange={e=>setType(e.target.value)} value={type} name='type' placeholder='Steel'></input> */}
            <select onChange={e=> {
                setType(e.target.children[e.target.selectedIndex].innerHTML)
                }} >
              <option>Steel</option>
              <option>Electronic</option>
              <option>Organic</option>
              <option>Wood</option>
            </select>
          </div>
          <div>
            <label>Quantity</label>
            <input onChange={e=>setQty(e.target.value)} value={qty} className='qty' name='qty' placeholder='40'></input>
            <span>kg</span>
          </div>
          <div>
            <label>Time Slot</label>
            <select onChange={e=> {
                setTimeSlot(e.target.children[e.target.selectedIndex].innerHTML)
                }} >
              <option>Morning (9 AM to 12 AM)</option>
              <option>Evening (5 PM to 7 PM)</option>
            </select>
          </div>
          <div>
            <label>Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows='5'>
            
            </textarea>
          </div>
          <div className='dispose__form__controls'>
            <button className='dispose__control__add' onClick={handleAdd}>
              Add
            </button>
            <button className='dispose__control__cancel' onClick={onClose}>
              Cancel
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
