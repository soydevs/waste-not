import "./DisposeForm.css";
import largeLeaf from "../../assets/svg/largeLeaf.svg";

const DisposeForm = ({ onClose, onAdd }) => {
  const handleAdd = () => {
    onAdd();
  };
  return (
    <>
      <div className='dispose__container'>
        <h2>New Dispose Request</h2>
        <img
          style={{ position: "relative" }}
          height={20}
          width={40}
          src={largeLeaf}
          alt='Large Green Leaf'
        />
        <section className='dispose__form'>
          <div>
            <label>Item Type</label>
            <input name='type' placeholder='Steel'></input>
          </div>
          <div>
            <label>Quantity</label>
            <input className='qty' name='qty' placeholder='40'></input>
            <span>kg</span>
          </div>
          <div>
            <label>Time Slot</label>
            <select>
              <option>Morning (9 AM to 12 AM)</option>
            </select>
          </div>
          <div>
            <label>Description</label>
            <textarea rows='5'>
              Id id culpa elit ex id ullamco deserunt consequat officia ipsum
              aliqua ea. Cillum officia adipisicing adipisicing laboris aute
              pariatur occaecat. Consequat consectetur qui elit labore nisi
              eiusmod.
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

export default DisposeForm;
