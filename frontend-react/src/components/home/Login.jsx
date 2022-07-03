import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";

function Login() {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigation = useNavigate();

    async function handleSubmit(e){
      e.preventDefault();
      try {
        let res = await fetch("http://127.0.0.1:8000/api/admin/login", {
          method: "POST",
          headers:{ 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const data = await res.json();
        console.log(data)
        if (res.status === 200) {
          setEmail("");
          setPassword("");
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
    <>
    <div className='login-form'>
      <div className='form-container'>
        <form className="add-form" onSubmit={handleSubmit}>
          <h1>Admin Panel Login</h1>
          <div className="input-field">
            <input 
              type="email"
              placeholder={"Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder={"Password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input type={"submit"} value="Login" className="loginBtn" />
          <div className='divider'/>
          <button className='back-btn'><Link className='back' to="/">Back</Link></button>
        </form>
      </div>
    </div>
    </>
  )
}
export default Login