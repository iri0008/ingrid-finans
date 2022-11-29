import React, { useState, createContext } from 'react'

// 1) INTERFACE 
export type SetValue = (value?: any) => void;

export interface GlbProps {
  glb_username?: string,
  set_username?: SetValue,
  glb_bank?: string,
  set_bank?: SetValue,
  glb_saksnummer?: string,
  set_saksnummer?: SetValue,
  glb_name?: string,
  set_name?: SetValue,
  burgerVisible?: boolean,
  setBurgerVisible?: SetValue,
  sti?: string,
  setSti?: SetValue,
}

// 2) DEFAULT VALUE(S)
const initState: GlbProps = {
  glb_username: "Testbruker AI",
  glb_bank: "Nordea",
  burgerVisible: false,
  sti: "Logg-Inn",
}

// 3) CREATE CONTEXT
export const GlbVar = React.createContext<GlbProps>(initState);

// 4) PROVIDER
const ContextProvider = ({children}:{children: React.ReactNode}) => {
  const [glbUsername, setGlbUsername] = React.useState();
  const [glbBank, setGlbBank] = React.useState();
  const [glbSaksnummer, setGlbSaksnummer] = React.useState();
  const [glbName, setGlbName] = React.useState();
  const [burgerVisible, setBurgerVisible] = React.useState();
  const[sti, setSti] = React.useState();
  
  return (
    <GlbVar.Provider value={{glb_username: glbUsername, set_username: setGlbUsername, glb_bank: glbBank, set_bank: setGlbBank ,glb_saksnummer: glbSaksnummer, set_saksnummer: setGlbSaksnummer,glb_name: glbName,set_name: setGlbName, burgerVisible: burgerVisible, setBurgerVisible: setBurgerVisible, sti: sti, setSti: setSti}}>
      {children}
    </GlbVar.Provider>
  )
}

//USECONTEXT 


export default ContextProvider;
