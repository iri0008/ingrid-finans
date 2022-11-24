import React, { useState, useContext } from 'react'
import { GlbVar } from '../context/Context';
import "../styles.css"

const Header = () => {
  const { glb_username } = useContext(GlbVar);

  return (
    <header className="header">
      <p className="header_title"> Finansoppslag </p>
      {(glb_username === undefined) ? <p className='header_p'> Ikke innlogget  </p> : <p className='header_p'> Bruker: {glb_username} </p> }
      
    </header>
  );
}

export default Header
