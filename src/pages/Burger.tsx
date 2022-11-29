import React from 'react'
import { useRef, useContext } from 'react';
import { GlbVar } from '../context/Context';
import "../styles.css"


const Burger = () => {
      const { burgerVisible} = useContext(GlbVar);
    
  return (
     <div className={burgerVisible ? "burger-visible" : "burger-false"}>
                  <p className='burger-visisble-p'> Testobjekt 1</p>
                  <p className='burger-visisble-p'> Testobjekt 2 </p>
          </div>
  )
}

export default Burger