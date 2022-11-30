import React from 'react'
import { useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { GlbVar } from '../context/Context';
import "../styles.css"
import Header from './Header';
import Burger from './Burger';


const Login = () => {
  let navigate = useNavigate();   //Tidligere het denne useHistory!
  const inputRef = useRef<HTMLInputElement>(null);
  const { glb_username, set_username } = useContext(GlbVar);
  const { sti, setSti } = useContext(GlbVar);
  let lcl_user: string | undefined = "";

  const onInput = () => {
    lcl_user = inputRef.current?.value;
    console.log(lcl_user);
  }

  const onClickReroute = () => {
    navigate("/bank");
    set_username?.(lcl_user); //må ha ?. fordi den er i interfacet satt som optional, og kand erfor være undefined. Hvis referansen er udefined eller null så returnerer den bare undefined uten å kjøre funksjonen for å unngå feilmelding, hvis den ikke er undefined/null så kjøres funksjonen.
    setSti?.({ sti } + "Logg-inn/Main");
    console.log({ glb_username });
  }
  

  return (
    <div className='login_main'>
      <p>Logg inn </p>
      
      <form className='input' onSubmit={onClickReroute}>
        <div className='login_input_brukernavn'> 
        <label>Brukernavn</label>
          <input ref={inputRef} type="text" id="username" name="username" onChange={(e) => { onInput() }} />
        </div>
        <div className='login_input_passord'> 
        <label>Passord</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type='submit' className='login_button'> Logg inn</button>
      </form>
      </div>
  )
};

export default Login