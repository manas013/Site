import React from 'react'
import "./App.css";
import Form from './Form';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route  path="/Form"  element={<Form/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="Home" element={<Home/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App