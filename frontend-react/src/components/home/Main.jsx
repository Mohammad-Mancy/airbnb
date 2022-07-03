import React from 'react'
import House from './main/House'

export default function Main() {

    const [houses, setHouses] = React.useState([]);

    function getHouses(){ 
        fetch('http://127.0.0.1:8000/api/getHouses')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          
         
        }).then((data) => {setHouses(data.houses)})
        .catch((err) => {
          console.log(err.message);
        });
    } 
  
    React.useEffect(() => {
      getHouses();
    }, [])
    return (
        <div>
            <div className='house-container'>
            {houses.map(({ id,image,description,location,rate,ppn }) => (
        <House
          itemId={id} // NOTE: itemId is required for track items
          image={image}
          description={description}
          location={location}
          rate={rate}
          ppn={ppn}
          
        //   onClick={handleClick(id)}
        />
      ))}
      </div>
        </div>
  )
}
