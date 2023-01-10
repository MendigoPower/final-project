import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function RatedGame({rating,cover,id}) {
const image=`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
const stars=Math.round(rating)*5/100
const formatedRating=stars.toFixed(1)
  return (
    <div className='mt-3'>
      <Link to={`/game/${id}`}>
        <figure className='mobile:mx-9 mx-3'><img className='min-w-full rounded-md opacity-80 hover:opacity-100 transition-all duration-300 ease-linear' src={image} alt="cover of the games" />
          <span className='flex  items-center justify-center py-5'>
            <h4 className='text-white font-poppins mr-1 mobile:text-3xl text-xl'>{formatedRating}</h4>
            <AiFillStar className='text-amber-600 mobile:w-7 w-5 h-auto'/>
          </span>
        </figure>
      </Link>
    </div>
  )
}
