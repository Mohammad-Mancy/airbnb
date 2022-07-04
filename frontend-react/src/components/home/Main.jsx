import React from 'react'
import BottomNavBar from './navbar/BottomNavBar'
import TopNavBar from './navbar/TopNavBar'

function Main() {
  //nav bar represent the whole page
  return (
    <div className='navbar'>
        <TopNavBar /> {/*just Top navbar */}
        <BottomNavBar /> {/* Main content houses and Bottom nav bar */}
    </div>
  )
}

export default Main