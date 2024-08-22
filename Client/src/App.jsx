import React from 'react'
import ShowCards from './components/card/ShowCards';
import Navbar from './components/header/Navbar';
import SearchBox from './components/header/SearchBox';
import AddCard from './components/card/AddCard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchCard from './components/card/SearchCard';
import FooterDummy from './components/footer/FooterDummy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardDetail from './components/card/CardDetail';



const App = () => {
  
  return (
    <>
    <Router>
      <Navbar/>
      <ToastContainer />
        <Routes>
          <Route path='/' element={[<SearchBox/>,<ShowCards/>]}></Route>
          <Route path='/add' element={<AddCard/>}></Route>
          <Route path='/search/:card' element={<SearchCard/>}></Route>
          <Route path='/card/:title' element={<CardDetail/>}></Route>
        </Routes>
        <FooterDummy/>
    </Router>
    
    
    
    </>
  )
}

export default App