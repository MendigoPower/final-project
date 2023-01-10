import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
export default function GameItem({cover,id,name,platforms,genres,rating}) {
  const image=`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
  const stars=Math.round(rating)*5/100
  const formatedRating=stars.toFixed(1)
  return (
    <div className='bg-darker-grey h-80 w-600 rounded-lg drop-shadow-sm flex justify-around'>
         <figure className='ml-9 mr-9 flex items-center'>
        <Link to={`/game/${id}`}>
          <img className='h-auto w-44' src={image} alt="cover of the games" />
        </Link>
      </figure>
      <section className='flex justify-center flex-col items-center ml-9 mr-9 max-w-[14rem]'>
      <span className='flex justify-center w-fit'>
      <Link to={`/game/${id}`}>
        {<h3 className='text-2xl font-bold text-center underline underline-offset-4 decoration-1 min-w-[11rem]'>{name}</h3>}
      </Link>
      </span>
        <span className='flex  items-center justify-center mt-3 mb-3'>
            <h4 className='font-poppins mr-1 text-xl'>{formatedRating}</h4>
            <AiFillStar className='text-amber-600 w-7 h-auto'/>
        </span>
        <h3 className='font-semibold mb-1'>Genres:</h3>
        <div className='flex justify-center items-center flex-wrap min-w-[12.5rem]'>
            {genres?genres.map((genre)=><h4 className='ml-1 mr-1' key={genre.id}>{genre.name}</h4>):null}
        </div>
        <h3 className='font-semibold mb-1 mt-1'>Platforms:</h3>
        <div className='flex justify-between max-w-[10rem] flex-wrap'>
            {platforms?platforms.map((platform)=><h4 key={platform.id} className='ml-1 mr-1 h-fit'>{platform.abbreviation}</h4>):null}
        </div>
      </section>
    </div>
  )
}
