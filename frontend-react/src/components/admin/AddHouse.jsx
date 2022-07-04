import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
function AddHouse() {
    
    const [imageUrl , setImageUrl] = useState("");
    const [description , setDescription] = useState("");
    const [location , setLocation] = useState("");
    const [ppn , setPpn] = useState("");
    const [collection_id , setCollection_id] = useState("");
    const navigation = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try {
          let res = await fetch("http://127.0.0.1:8000/api/admin/addHouse", {
            method: "POST",
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify({
              image:imageUrl,
              description: description,
              location:location,
              ppn:ppn,
              collection_id:collection_id,
            }),
          });
          const data = await res.json();
          console.log(data)
          if (res.status === 200) {
            setImageUrl("");
            setDescription("");
            setLocation("");
            setPpn("");
            setCollection_id("")
            console.log(res)
            navigation('/admin')
          } else {
            alert("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      }
    
      //Getting Categories
        // const [items, setItems] = React.useState([]);
        // function getItems(){ 
        //     fetch('http://127.0.0.1:8000/api/getCollections')
        //     .then((response) => {
        //         if (response.ok) {
        //         return response.json();
        //         }
                
            
        //     }).then((data) => {setItems(data.collection)})
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
        // } 
        // React.useEffect(() => {
        //     getItems();
        // },[])
      

  return (
    <div>
    <h1>Admin Panel Add House</h1>
    <form className="add-house-form" onSubmit={handleSubmit}>
      <div className="input-house-field">
        <input 
          className='input-image-url'
          type="text"
          placeholder={"Url for image"}
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
      </div>

      <div className="input-house-field">
        <input
        className='input-house-name'
          type="text"
          placeholder={"NewHouse"}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className="input-house-field">
        <input
        className='input-house-location'
          type="text"
          placeholder={"Location"}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </div>
      <div className="input-house-field">
        <input
        className='input-house-ppn'
          type="text"
          placeholder={"Price Per Night"}
          value={ppn}
          onChange={(e) => {
            setPpn(e.target.value);
          }}
        />
      </div>
      <div className="input-house-field">
        <input
        className='input-house-ppn'
          type="text"
          placeholder={"collection id"}
          value={collection_id}
          onChange={(e) => {
            setCollection_id(e.target.value);
          }}
        />
      </div>
      <input type={"submit"} value="addHouse" className="add-house-btn" />
      <div className='divider'/>
      <button className='back-house-btn'><Link className='back-house' to="/admin">Back</Link></button>
    </form>
    </div>
  )
}

export default AddHouse