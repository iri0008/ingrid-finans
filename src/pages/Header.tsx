import React, { useState, useContext } from 'react'
import { GlbVar } from '../context/Context';
import "../styles.css"

const Header = () => {
  const { glb_username } = useContext(GlbVar);

  return (
    <header className="header">
      <div className='grid-x'>
        <div className='cell'>
          <div className='header__content'>
            <div className='header__left'>Hamburger-meny</div>
            <div className='header__logo'>
              <svg className="header__logo-svg" xmlns="http://www.w3.org/2000/svg">
            <path className="header__logo-svg-path-a" d="M43.877 0h-15.58l-28.3 57.058h15.58z"></path>
            <path className="header__logo-svg-path-c" d="M62.927 24.952h-15.58l-28.3 57.059h15.58z"></path>
              </svg>
               <div><p className="header_title">Finansoppslag </p></div>
            </div>
            
            <div className='header__right'>
               {(glb_username === undefined) ? <p className='header_p'> Ikke innlogget  </p> : <p className='header_p'> Bruker: {glb_username} </p> }
            </div>
          </div>
        </div>
        </div>           
    </header>
  );
}

export default Header
