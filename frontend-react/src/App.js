import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/home/Login';
import Admin from './components/Admin'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddCollection from './components/admin/AddCollection';
import AddHouse from './components/admin/AddHouse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/admin/addCollection' element={<AddCollection />}/>
          <Route path='/admin/addHouse' element={<AddHouse />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
