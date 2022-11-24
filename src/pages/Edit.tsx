import React, { useContext } from 'react'
import { GlbVar } from '../context/Context'

const Edit = () => {
  const { glb_saksnummer } = useContext(GlbVar);
  return (
    <div className='edit'>
      <h1> REDIGER </h1>

      {glb_saksnummer !== undefined ? <p> Saksnummer du har valgt: {glb_saksnummer}</p> : <p> Det har skjedd en feil, du har ikke valgt en sak...</p>}
    
    </div>
  )
}

export default Edit