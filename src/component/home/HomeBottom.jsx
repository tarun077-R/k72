import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottom() {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <p className='absolute lg:w-[20vw] w-64 lg:right-2 right-2 bottom-18  lg:bottom-35 font-[font1] lg:text-sm text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <Link className='lg:text-[6.5vw] text-[6vw] uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 mb-3 leading-[5vw] border-white rounded-full py-1 lg:pt-5 lg:px-10   px-3 pt-1.5' to='/project'>Projets</Link>
      <Link className='lg:text-[6.5vw] text-[6vw] uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 mb-3 leading-[5vw]  border-white rounded-full py-1 lg:pt-5 lg:px-10 px-3 pt-1.5' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottom