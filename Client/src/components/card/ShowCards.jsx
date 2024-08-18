import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import "./ShowCard.css";
const ShowCards = () => {
  const { cards } = useContext(AppContext);

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