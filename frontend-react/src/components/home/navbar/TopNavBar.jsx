import React from 'react'
import logo from '../../../assets/Airbnb-logo.jpg';
import adminlogo from '../../../assets/admin-logo.png'
import { useNavigate } from "react-router-dom";

function TopNavBar() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/Login')
  }
  return (
    <div className='top-navbar'>
      <div className='logo'>
          <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div className="search">
        <input className="input-search" type="text" />
      </div>
      <div className="login-admin">
          <img className="admin-logo" src={adminlogo} alt="adminlogo" onClick={handleClick} />
      </div>
    </div>
  )
}

export default TopNavBar