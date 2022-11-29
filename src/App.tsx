import { useState, useContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles.css'
import "./styles/app.css"
import Header from "./pages/Header";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Main from "./pages/Main";
import ContextProvider from "./context/Context";
import Bank from './pages/Bank';
import Burger from './pages/Burger';
import Sti from './pages/Sti';


function App() {

  return (
    <div className='App'> 
    <BrowserRouter>
      <ContextProvider>
          <Header />
          <Burger />
          <Sti />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/main" element={<Main />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
        </ContextProvider>
      </BrowserRouter>
      </div>
  );
}

export default App
