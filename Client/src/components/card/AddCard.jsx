import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import './AddCard.css';
import {useNavigate} from 'react-router-dom'
const AddCard = () => {
  const Navigate = useNavigate();
  const { createCard } = useContext(AppContext);
  const [formData, setFormData] = useState({
    title:"",
    description:"",
  })


  const onChangeHandler = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }

  const {title,description} = formData;
    const submitHandler = async(e) =>{
        e.preventDefault();
        const result = await createCard(title,description);
        if(result){
            Navigate("/")
        }
        console.log(result);
      setFormData("");

    }

  return (
    <>
      <div className="parent-register">
        <div className="container_register">
          <form onSubmit={submitHandler}>
            <h3>Create Card</h3>
            <div className="mb-3">
              <input
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
                required
                placeholder="Enter Your Title"
                type="text"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="titleHelp"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="description"
                value={formData.description}
                onChange={onChangeHandler}
                required
                placeholder="Enter Description"
                type="text"
                className="form-control"
                id="exampleInputDescription"
              />
            </div>
            <button type="submit" className="btn btn-outline-dark btn-add">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCard;
