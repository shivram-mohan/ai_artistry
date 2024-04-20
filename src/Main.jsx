import React from 'react'
import Navbar from './Navbar';
import { signOut } from 'firebase/auth';
import auth from './firebase/config';
import {useNavigate} from "react-router-dom"
const Main = () => {
    const images = ['1st.png', '2nd.png', '3rd.png', '4th.png','5th.png','6th.png','7th.png','8th.png','9th.png'];

    const localIndex =  (localStorage.getItem("index")) || null;
    const randomIndex = (localIndex)? localIndex: localStorage.setItem("index", Math.floor(Math.random() * images.length));
    const randomImageUrl = `/images/${images[randomIndex]}`;
    const navigate = useNavigate();

  return (
    <div style={{position: 'relative'}}>
      <Navbar />
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{fontFamily:"cursive"}}>Welcome to the event! Here is your image</h1>
     <img src={randomImageUrl} alt="Random Image" style={{width: "70%", height:"70%", marginBottom: 60, borderWidth:"5px", borderRadius:"15px", borderColor:"black", borderStyle:"solid", padding:"10px"}} />
  <footer style={{marginBottom: 20, fontFamily: "monospace", fontSize:"20px"}}><a href='https://linktr.ee/ignites_students_club' target='_blank'>@Microsoft Ignite Students Club</a></footer>
      </div>
    </div>
  )
}

export default Main
