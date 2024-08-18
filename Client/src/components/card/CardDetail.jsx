import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CardDetail = () => {
  const [card, setCard] = useState();
  const url = "http://localhost:8080";

  const { title } = useParams();
  console.log(title);
  useEffect(() => {
    const fetchCard = async () => {
      const api = await axios.get(`${url}/card/${title}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      
      setCard(api.data.card);
    };

    fetchCard();
  },[title]);

  return (
    <>
      <div className="card-container">
          <div key={card?.id}>
          <h1>Card Detail</h1>
            <div className="card">
              <div  className="card-body">
                <h5 className="card-title">{card?.title}</h5>
                <hr />
                <p className="card-text">{card?.description}</p>
              </div>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default CardDetail