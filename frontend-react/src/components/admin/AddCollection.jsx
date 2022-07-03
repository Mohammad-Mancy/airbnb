import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
function AddCollection() {

    const [icon , setIcon] = useState("");
    const [collection_name , setCollection_name] = useState("");
    const navigation = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try {
          let res = await fetch("http://127.0.0.1:8000/api/admin/login", {
            method: "POST",
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify({
              icon: icon,
              collection_name: collection_name,
            }),
          });
          const data = await res.json();
          console.log(data)
          if (res.status === 200) {
            setIcon("");
            setCollection_name("");
            console.log(res)
            navigation('/admin')
          } else {
            alert("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      }

  return (
    <div>
        <h1>Admin Panel Add Collection</h1>
        <form className="add-collection-form" onSubmit={handleSubmit}>
          <div className="input-collection-field">
            <span>Choose an Icon :</span>
            <input 
              type="file"
              placeholder={"Icon URL"}
              value={icon}
              onChange={(e) => {
                setIcon(e.target.value);
              }}
            />
          </div>

          <div className="input-collection-field">
            <input
            className='input-collection-name'
              type="text"
              placeholder={"NewCollection"}
              value={collection_name}
              onChange={(e) => {
                setCollection_name(e.target.value);
              }}
            />
          </div>
          <input type={"submit"} value="addCollection" className="add-collection-btn" />
          <div className='divider'/>
          <button className='back-collection-btn'><Link className='back-collection' to="/admin">Back</Link></button>
        </form>
    </div>
  )
}

export default AddCollection