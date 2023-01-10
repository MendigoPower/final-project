import React from 'react'
import { Link } from 'react-router-dom'
export default function RatedGame({cover,id}) {
  return (
    <div className='mt-3'>
      <Link to={`/game/${id}`} onClick={() => {window.location.href=`/game/${id}`}} >
        <figure className='mobile:mx-9 mx-3'><img className='min-w-full rounded-md opacity-80 hover:opacity-100 transition-all duration-300 ease-linear' src={cover} alt="cover of the games" /></figure>
      </Link>
    </div>
  )
}