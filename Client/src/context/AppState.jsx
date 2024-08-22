import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { ToastContainer, toast, Bounce} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const AppState = (props) => {
  const url = "https://help-center-api-4ef1.onrender.com";
  const [cards, setCards] = useState([]);
  const [reload, setReaload] = useState(false);

  // Fetch Card "Data"

  useEffect(() => {
    const fetchCard = async () => {
      const api = await axios.get(`${url}/card/get`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });

      console.log(api.data.cards);
      setCards(api.data.cards);
    };
    fetchCard();
  }, [reload]);



  // Create New Card
  const createCard = async (title,description) => {
    const api = await axios.post(`${url}/card/add`,{title,description}, {
      headers: {
        "Content-Type": "Application/json",
      },
      withCredentials: true,
    });

    console.log(api.data);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setReaload(!reload);
    return api.data.success;
   
  };


  return (
    <AppContext.Provider value={{ cards,createCard}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
