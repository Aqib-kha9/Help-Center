import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../loader/Loading';


const CardDetail = () => {
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://help-center-api-4ef1.onrender.com";

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

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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