import React from 'react'
import navBarSass from "./sass/NavBar.module.scss"

function Navbar({ isLoggedIn, onLogout }) {

  return (
    <div className={navBarSass.navBar}>
      <div className={navBarSass.textDiv}>
        <p className={navBarSass.text}>
            Welcome to AI Artistry          
        </p>
      </div>
      <div className={navBarSass.buttonDiv}>
        <img src="logo.png" alt="MISC LOGO" style={{width:"150px", height:"150px"}}/>
      </div>
    </div>
  )
}

export default Navbar