import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillXCircleFill } from 'react-icons/bs'
export default function FavoriteCard({cover,id,handleDelete,name}) {
  const image=`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
  const erraseId=()=>{
    handleDelete(id)
  }
  return (
        <div className=" w-fit">
            <div className='flex'>
          <Link to={`/game/${id}`} onClick={() => {window.location.href=`/game/${id}`}} >
                <img src={image} alt="cover of the games" className="rounded-lg shadow-lg"></img>
          </Link>  
                <h2 className='hover:cursor-pointer text-white h-fit w-fit rounded-full -mt-2 transition-all hover:bg-white hover:text-black duration-300 ease-linear' onClick={erraseId}>X</h2>
            </div>
        </div>
  )
}
