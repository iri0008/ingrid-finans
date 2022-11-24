import React, { useState, useContext, useEffect } from 'react';
import { GlbVar } from '../context/Context';
import "../styles.css"
import { COLUMNS1, ROWS1 } from "../data/Data";
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';


const Main = () => {
  const { glb_username } = useContext(GlbVar);
  const { glb_bank } = useContext(GlbVar);
  const { glb_saksnummer, set_saksnummer } = useContext(GlbVar);
  const { glb_name, set_name } = useContext(GlbVar);
  const [data, setData] = useState({}); //Only exists in this file.

  const dataRows = ROWS1;
  const dataColumns = COLUMNS1;
  let navigate = useNavigate();


  return (
    <div className='main'>
      <div className='main_content'>
        <h1>Saker til godkjenning</h1>
        <p>Ditt brukernavn: {glb_username}</p>
        <p>Du representerer bank: {glb_bank}</p> 

        <div className='main_table'>
          <h1> Forespørsler </h1>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
  rows={dataRows}
  columns={dataColumns}
  pageSize={5}
  rowsPerPageOptions={[5]}
            />
            </div>

        </div>
      </div>
      </div>
  )
}

export default Main