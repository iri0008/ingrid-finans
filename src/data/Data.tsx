import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from 'react';
import { GlbVar } from '../context/Context';



const COLUMNS1: GridColDef[] = [
  {
    headerName: "Saksnummer",
    field: "id",
    width: 100,
  },
  {
    headerName: "Navn",
    field: "name",
    width: 200,
  },
  {
    headerName: "Personnummer",
    field: "personnummer",
    width: 350,
  },
  {
    headerName: "Dato",
    field: "dato",
  },
  {
    headerName: "Status",
    field: "status",
    width: 100,
  },
  {
    headerName: "Rediger",
    field: "rediger",
    width: 200,
    sortable: false,
    renderCell: (params) => {
      let navigate = useNavigate();   //Tidligere het denne useHistory!
      const { glb_saksnummer, set_saksnummer } = useContext(GlbVar);
      const onClick = (e: any) => {
        navigate("/edit");
        //AURORA: SE HER :D VI MÅ FÅ HENTET UT SAKSNUMMERET FRA RADEN OG SÅ SATT DET I GLB_SAKSNUMMER.
        console.log({ glb_saksnummer });
        
      };
      
      return (
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="warning" size="small" onClick={onClick}>Edit</Button>
          <Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>
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









