import React from 'react'
import logo from '../../../assets/Airbnb-logo.jpg';
import adminlogo from '../../../assets/admin-logo.png'

function TopNavBar() {
  return (
    <div className='top-navbar'>
      <div className='logo'>
          <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div className="search">
        <input className="input-search" type="text" />
      </div>
      <div className="login-admin">
          <img className="admin-logo" src={adminlogo} alt="adminlogo"/>
      </div>
    </div>
  )
}

export default TopNavBar