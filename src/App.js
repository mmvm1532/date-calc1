import './App.css';
import { Routes, Route, Link, useNavigate} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import { useState } from 'react';
import { signOut } from 'firebase/auth' 
import {auth} from './firebase-config'


function App() {

  

  const [isAuth, setIsAuth] = useState(false)
  //initially when we open a page, we are logged out
  let navigate = useNavigate()
  const signUserOut= () => {
    signOut(auth).then(() => {
      
      //clearing localStorage that contains true
      localStorage.clear()
      //setting it back to false
      setIsAuth(false)
      //We can't use useNavigate, so we go with window.location from js
      navigate('/login')
    })
  }

  return (
    <>
       <nav> 
         <Link to="/"> Home </Link>
         {!isAuth ? <Link to="/login"> Login </Link>: <button className="log-out-btn" onClick={signUserOut}>Log Out</button>}
       </nav>
       <Routes>
         <Route path="/" element={<Home isAuth={isAuth}/>} />
         <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
       </Routes>
       </>
  );
}

export default App;