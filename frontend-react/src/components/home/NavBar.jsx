import React from 'react'
import BottomNavBar from './navbar/BottomNavBar'
import TopNavBar from './navbar/TopNavBar'

function NavBar() {
  return (
    <div className='navbar'>
        <TopNavBar />
        <BottomNavBar />
        
    </div>
  )
}

export default NavBar