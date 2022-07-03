import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";

function BottomNavBar() {
  
  
  const [items, setItems] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
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
  }, [])
  
  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
     
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName="bottom-nav">
      {/* <div className='bottom-nav'> */}
      {items.map(({ id,icon,collection_name }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={collection_name}
          logo={icon}
          
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
      {/* </div> */}
    </ScrollMenu>
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
    
    <div className='category'>
        <img src={logo}/>
        <div className='cat-title'>{title}</div>
      </div>
  );
}

export default BottomNavBar;


