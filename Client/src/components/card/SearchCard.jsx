import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { Link,useParams } from "react-router-dom";
import "./ShowCard.css";
import Loading from '../loader/Loading';
const SearchCard = () => {
  const { cards } = useContext(AppContext);
  const [searchCard, setSearchCard] = useState([])
  const {card} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setSearchCard(cards.filter((data)=>data?.title?.toLowerCase().includes(card?.toLowerCase())))
  }, [card,cards]);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <h1 style={{textAlign:"center", marginTop:"3rem"}}>Search Results</h1>
      <div className="card-container">
        
        {searchCard?.map((card) => (
          <div key={card?._id}>
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
