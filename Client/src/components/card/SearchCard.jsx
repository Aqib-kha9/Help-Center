import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { Link,useParams } from "react-router-dom";
import "./ShowCard.css";
const SearchCard = () => {
  const { cards } = useContext(AppContext);
  const [searchCard, setSearchCard] = useState([])
  const {card} = useParams();
  useEffect(() => {
    setSearchCard(cards.filter((data)=>data?.title?.toLowerCase().includes(card?.toLowerCase())))
  }, [card,cards])
  return (
    <>
      <h1 style={{textAlign:"center"}}>Search Results</h1>
      <div className="card-container">
        
        {searchCard?.map((card) => (
          <div key={card?.id}>
            <div className="card">
              <div  className="card-body">
                <Link to={"/card"} className="card-title">{card?.title}</Link>
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

export default SearchCard;
