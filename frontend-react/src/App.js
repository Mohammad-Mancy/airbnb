import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/home/Login';
import Admin from './components/Admin'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/admin' element={<Admin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
