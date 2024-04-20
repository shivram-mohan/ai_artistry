import React from 'react'
import Navbar from './Navbar';
import { signOut } from 'firebase/auth';
import auth from './firebase/config';
import {useNavigate} from "react-router-dom"
const Main = () => {
    const images = ['1st.png', '2nd.png', '3rd.png', '4th.png','5th.png','6th.png','7th.png','8th.png','8th.png'];

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = `/images/${images[randomIndex]}`;
    const navigate = useNavigate();


    const handleLogOut = ()=>{
        signOut(auth)
        .then(()=>{
            navigate('/')
        })
        .catch((e)=>{
            alert(e.message);

        })
    }
  return (
    <div style={{position: 'relative'}}>
      <Navbar onLogout={handleLogOut} isLoggedIn={true} />
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{fontFamily:"cursive"}}>Welcome to the event! Here is your image</h1>
     <img src={randomImageUrl} alt="Random Image" style={{width: "70%", height:"70%", paddingBottom: 60}} />
  <footer style={{marginBottom: 20, fontFamily: "monospace", fontSize:"20px"}}>@Microsoft Ignite Students Club</footer>
      </div>
    </div>
  )
}

export default Main
