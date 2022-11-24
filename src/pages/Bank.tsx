import React, { useContext } from 'react'
import Select from 'react-select';
import { GlbVar } from '../context/Context';
import { useNavigate } from "react-router-dom";

const possibleBanks = [
  { label: 'Nordea', value: 'nordea' },
  { label: 'DnB', value: 'dnb' },
  { label: 'Sbanken', value: 'sbanken' },
  { label: 'Sparebanken 1', value: 'sparebank1' },
  { label: 'Eika', value: 'eika' },
  { label: 'Bank Norwegian', value: 'banknorwegian' },
];


const Bank = () => {
  let navigate = useNavigate();   //Tidligere het denne useHistory!
  const { glb_username } = useContext(GlbVar);
  const {set_bank } = useContext(GlbVar);

  let selectedBank: string | undefined;
  
  const UpdateBankInfo = () => {
    navigate("/main");
    set_bank?.(selectedBank);
  }

  return (
    <div className='bank'>
      <div className="bank_content">
        <h4>Hei, {glb_username} <br/> Velg hvilken bank du vil representere</h4>
        <Select className='bank_selector'
          options={possibleBanks}
          onChange={opt => selectedBank = opt?.label}
        />
        <button className='bank_button' onClick={UpdateBankInfo}> Gå videre </button>
      </div> 
    </div>
  )
}

export default Bank