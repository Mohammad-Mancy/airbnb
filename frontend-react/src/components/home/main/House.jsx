import React from 'react'

function House({image,description,location,rate,ppn }) {
  return (
    
    <div className='house'>
        <img className="house-image" src={image} />
        <div className='house-title-rate'>
            <div className="house-title">{description}</div>
            <div className="house-rate">{rate}</div>
        </div>
        <div className="house-location">{location} KiloMeter</div>
        <div className="house-ppn"><strong>{ppn} $</strong> night</div>
    </div>
    
  )
}

export default House