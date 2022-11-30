import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect, cloneElement } from 'react';
import { GlbVar } from '../context/Context';



const COLUMNS1: GridColDef[] = [
  {
    headerName: "Saksnummer",
    field: "id",
    width: 100,
    headerClassName: 'super-app-theme--header',
  },
  {
    headerName: "Navn",
    field: "name",
    width: 150,
    headerClassName: 'super-app-theme--header',

  },
  {
    headerName: "Personnummer",
    field: "personnummer",
    width: 150,
    headerClassName: 'super-app-theme--header',
  },
  {
    headerName: "Dato",
    field: "dato",
    headerClassName: 'super-app-theme--header',
  },
  {
    headerName: "Status",
    field: "status",
    width: 100,
    headerClassName: 'super-app-theme--header',
  },
  {
    headerName: "Rediger status",
    field: "rediger",
    width: 130,
    headerClassName: 'super-app-theme--header',
    sortable: false,
    renderCell: (params) => {
      let navigate = useNavigate();   //Tidligere het denne useHistory!
      const { glb_saksnummer, set_saksnummer } = useContext(GlbVar);
      const { glb_name, set_name } = useContext(GlbVar);
      const { glb_persnr, set_persnr } = useContext(GlbVar);
      const {sti, setSti } = useContext(GlbVar);
      
      const onClick = (e: any) => {
        navigate("/edit");
        console.log(params.id);
        set_saksnummer?.(params.id);
        set_name?.(params.row.name);
        set_persnr?.(params.row.personnummer);
        setSti?.(sti+"/Rediger");
      };
      
      return (
        <Stack direction="row" spacing={2}>
          <Button sx={{"&:hover": {background: "#ffcf00"}}} variant="outlined" color="primary" size="small" onClick={onClick}>Rediger</Button>
        </Stack>
      );
  },
  }
  ];
  
let ROWS1= [
  {
    name: "Jon Johnsen",
    id: "12345",
    personnummer: "230567xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Ida Jensen",
    id: "12346",
    personnummer: "260197xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Gunnar Gunnersen",
    id: "12347",
    personnummer: "010203xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Jon Johnsen",
    id: "12348",
    personnummer: "230567xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Ida Jensen",
    id: "12349",
    personnummer: "260197xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Gunnar Gunnersen",
    id: "12350",
    personnummer: "010203xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Jon Johnsen",
    id: "12351",
    personnummer: "230567xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Ida Jensen",
    id: "12352",
    personnummer: "260197xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Gunnar Gunnersen",
    id: "12353",
    personnummer: "010203xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Jon Johnsen",
    id: "12354",
    personnummer: "230567xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Ida Jensen",
    id: "12355",
    personnummer: "260197xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Gunnar Gunnersen",
    id: "12356",
    personnummer: "010203xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Jon Johnsen",
    id: "12357",
    personnummer: "230567xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Ida Jensen",
    id: "12358",
    personnummer: "260197xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  {
    name: "Gunnar Gunnersen",
    id: "12359",
    personnummer: "010203xxxx",
    dato: "120345",
    status: "pending",
    rediger: "rediger",
  },
  ];

export { COLUMNS1, ROWS1 };



  function set_personummer(personnummer: any) {
    throw new Error('Function not implemented.');
  }

