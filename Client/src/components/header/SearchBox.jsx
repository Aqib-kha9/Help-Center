import React, { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const Navigate = useNavigate();
  const [searchCard, setSearchCard] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    Navigate(`/search/${searchCard}`);
    setSearchCard("");
    console.log(searchCard);
  };
  return (
    <>
      <div className="hero">
        
        <form onSubmit={searchHandler} className="inner-div">
          <p>How Can We Help?</p>
          <input
            value={searchCard}
            onChange={(e) => setSearchCard(e.target.value)}
            className="search-box"
            placeholder="Search"
            type="text"
          />
          <i className="fa-solid fa-arrow-right icon-search"></i>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
