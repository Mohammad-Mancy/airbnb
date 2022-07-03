import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


    

  


// [{
//   "id": 1,
//   "icon": "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
//   "collection_name": "pool",
//   "created_at": "2022-07-02T12:16:32.000000Z",
//   "updated_at": "2022-07-02T12:16:32.000000Z"
// },{
//   "id": 2,
//   "icon": "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
//   "collection_name": "pool",
//   "created_at": "2022-07-02T12:16:32.000000Z",
//   "updated_at": "2022-07-02T12:16:32.000000Z"
// },{
//   "id": 3,
//   "icon": "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
//   "collection_name": "pool",
//   "created_at": "2022-07-02T12:16:32.000000Z",
//   "updated_at": "2022-07-02T12:16:32.000000Z"
// }];

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
    <span disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </span>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <span disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
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




// function BottomNavBar() {
//   return (
//     <div className='bottom-nav'>
      // <div className='category'>
      //   <img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"/>
      //   <div className='cat-title'>island</div>
      // </div>

      // <div className='category'>
      //   <img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"/>
      //   <div className='cat-title'>island</div>
      // </div>
      // <div className='category'>
      //   <img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"/>
      //   <div className='cat-title'>island</div>
      // </div>
      // <div className='category'>
      //   <img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"/>
      //   <div className='cat-title'>island</div>
      // </div>
      // <div className='category'>
      //   <img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"/>
      //   <div className='cat-title'>island</div>
      // </div>
//     </div>

    
//   )
// }

// export default BottomNavBar