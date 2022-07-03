import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import AddCollection from './admin/AddCollection'
import AddHouse from './admin/AddHouse'

function Admin() {
  return (
    <div>
      <h1 className='adminpanel-title'>Admin Panel</h1>
      <div className='addcollection-div'>
          <Link className='addcollection-link' to='addCollection'>Add Collection</Link>
      </div>
      <div className='addhouse-div'>
      <Link className='addhouse-link' to='addHouse'>Add House</Link>
      </div>
    </div>
  )
}

export default Admin