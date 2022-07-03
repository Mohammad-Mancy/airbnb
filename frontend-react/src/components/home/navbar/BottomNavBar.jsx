import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import House from '../main/House'

function BottomNavBar() {
  
  //Getting Categories
  const [items, setItems] = React.useState([]);
  function getItems(){ 
      fetch('http://127.0.0.1:8000/api/getCollections')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        
       
      }).then((data) => {setItems(data.collection)})
      .catch((err) => {
        console.log(err.message);
      });
  } 
  React.useEffect(() => {
    getItems();
  },[])

//Getting Houses and filtering
  const [houses, setHouses] = React.useState([]);

  const [filteredHouses,setFilteredHouses]=React.useState(houses);
  const filterResult=(houseItem)=>{
    const result=houses.filter((curData)=>{
      return curData.collection_id===houseItem;
    }

    );
    setFilteredHouses(result);
  }
  
  function getHouses(){ 
    fetch(`http://127.0.0.1:8000/api/getHouses`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      
    }).then((data) => {setHouses(data.houses); setFilteredHouses(data.houses)})
    .catch((err) => {
      console.log(err.message);
    });
} 

React.useEffect(() => {
  getHouses();
},[])
  
  //const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    () =>{console.log("clicked")}
    // ({ getItemById, scrollToItem }) => {
    //   const itemSelected = isItemSelected(id);

    //   setSelected((currentSelected) =>
    //     itemSelected
    //       ? currentSelected.filter((el) => el !== id)
    //       : currentSelected.concat(id)
    //   );
    // };

  return (
     <>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName="bottom-nav">
      {items.map(({ id,icon,collection_name }) => (
        <div className='category' onClick={()=>filterResult(id)}>
        <img src={icon}/>
        <div className='cat-title'>{collection_name}</div>
      </div>
      ))}
    </ScrollMenu>
    <div>
            <div className='house-container'>
            {filteredHouses.map(({ id,image,description,location,rate,ppn }) => (
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
    </>
  );


 
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <span  className="arrow" disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <AiOutlineLeft/>
    </span>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <span className="arrow" disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <AiOutlineRight/>
    </span>
  );
}

function Card({ onClick, selected, title, itemId,logo }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    
    <div className='category' onClick={onClick}>
        <img src={logo}/>
        <div className='cat-title'>{title}</div>
      </div>
      
  );
}

export default BottomNavBar;


