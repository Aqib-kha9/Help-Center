import React, { useContext, useState, useEffect} from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import "./ShowCard.css";
import Loading from '../loader/Loading';
const ShowCards = () => {
  const { cards } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

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
        {cards?.map((card) => (
          <div key={card?._id}>
            <div className="card">
              <div  className="card-body">
                <Link to={`/card/${card.title}`} className="card-title">{card?.title}</Link>
                <hr />
                <p className="card-text">{card?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowCards;