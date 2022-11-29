import React, { useContext } from 'react'
import { GlbVar } from '../context/Context'

const Sti = () => {
    const { sti } = useContext(GlbVar);
  return (
      <div className='sti-viser'>{sti}</div>
  )
}

export default Sti