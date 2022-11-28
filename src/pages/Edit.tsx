import React, { useContext, useState } from 'react'
import { GlbVar } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import { ROWS1 } from '../data/Data';

const Edit = () => {
  const { glb_saksnummer } = useContext(GlbVar);
  const navigate = useNavigate();

  const datarows = ROWS1;

  const godkjenn = () => {
    navigate("/main");
    const sak = ROWS1.find((s) => {
      return s.id === glb_saksnummer;
    });

    if (sak !== undefined) {
       sak.status = "godkjent";
    } else {
      alert("FANT IKKE RIKTIG SAKSNUMMER");
    }
  }

  return (
    <div className='edit'>
      <h1> Rediger </h1>

      {glb_saksnummer !== undefined ?
        <p> Saksnummer du har valgt: {glb_saksnummer}</p>
        : <p> Det har skjedd en feil, du har ikke valgt en sak...</p>
      }


      <div className='melding'>
        <input className='melding_tekst' placeholder='Skriv din melding her...'/>
        <button onClick={godkjenn}>Oppdater sak</button>
      </div>
        
    
    </div>
  )
}

export default Edit