import React, {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import auth from "./firebase/config"
import { useNavigate  } from 'react-router-dom';
import Navbar from './Navbar';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email, password)
        .then((userCredential)=>{
            console.log(userCredential);
            navigate('/main');
        })
        .catch((error)=>{
            alert(error)
            console.log(error);
        })
    }
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar /> 
      <h2 style={{fontFamily:"cursive"}}>Login using your college email, your password is your registration number, <span style={{fontStyle:"italic"}}>for example, "eac22049" , "cse22152"</span> </h2>
      <div style={{display:"flex", justifyContent:"center", minHeight:"100vH", fontFamily:"sans-serif"}} >
        <form onSubmit={signIn} >
          <div style={{ marginBottom:"20px", marginTop:"30px" }}>
            <label style={{fontFamily:"cursive", fontWeight:"bold"}} htmlFor="email">Email:</label>
            <input style={{marginLeft:"15px", borderRadius:"5px", width:"500px"}} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{fontFamily:"cursive", fontWeight:"bold"}} htmlFor="password">Password:</label>
            <input style={{marginLeft:"15px",  borderRadius:"5px", width:"500px"}} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" style={{marginTop:"15px", padding: "5px 10px", borderRadius: "5px",width:"200px", background: "#01034a", color: "white", cursor: "pointer", fontFamily:"cursive", fontSize:"1rem" }}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
