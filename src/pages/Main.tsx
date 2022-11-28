import React, { useState, useContext } from 'react';
import { GlbVar } from '../context/Context';
import "../styles.css"
import { COLUMNS1, ROWS1 } from "../data/Data";
import { useNavigate } from "react-router-dom";
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import { TableRow } from '@mui/material';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
        <p><b>Ditt brukernavn: </b> {glb_username}</p>
        <p> <b>Du representerer bank:</b> {glb_bank}</p>
        <br/>

        <div className='main_table'>
          <h1> Forespørsler </h1>
          <Box
            sx={{  //styling av tabellen
              height: 390,
              width: 720,
              '& .super-app-theme--header': {
              backgroundColor: '#abcae9',
            },
            }}>
            <DataGrid
            rows={dataRows}
            columns={dataColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            />
          </Box>

        </div>
      </div>
      </div>
  )
}

export default Main