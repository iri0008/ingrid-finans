import React, { useContext, useState } from 'react'
import { GlbVar } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import { ROWS1 } from '../data/Data';
import "../styles.css";

const Edit = () => {
  const { glb_saksnummer } = useContext(GlbVar);
  const { glb_name } = useContext(GlbVar);
  const { glb_persnr} = useContext(GlbVar);
  const navigate = useNavigate();

  const datarows = ROWS1;

  const godkjenn = () => {
    navigate("/main");
    const sak = datarows.find((s) => {
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
      <h1>Banknavn - Kontonummer</h1>
      
      {glb_saksnummer !== undefined ?
        <p><b>Saksnummer du har valgt: </b>{glb_saksnummer}</p>
        : <p className='edit_p_error'> Det har skjedd en feil, du har ikke valgt en sak...</p>
      }

      <div className='edit_person'>
        <p>Navn: {glb_name}</p>
        <p>Personnummer: {glb_persnr}</p>
      </div>

      <div className='what_when'>
        <p>Kontonummer: </p>
        <p>Hjemmel: </p>
        <p>Ønsker kontoutskrifter for følgende periode: </p>
        <p>dato til dato</p>
      </div>

      <div className='melding'>
        <p className='add_melding'>Legg til en melding (valgfritt)</p>
        <input className='melding_tekst' placeholder='Skriv din melding her...' />
        <p>Legg til filer: </p>
        <input className="melding_fil" placeholder='Legg til vedlegg ved å droppe filen her, eller klikk for å åpne dialog-boks'></input>
        <button onClick={godkjenn} className='melding_button'>Oppdater sak</button>
      </div>

      <div className='hjemmel'>
        <h3>Hjemmel</h3>
        <p>Referanse (DokID): </p>
        <p>Besluttet av: </p>
        <p>Fil av signert dokument</p>
      </div>
        
    </div>
  )
}

export default Edit
