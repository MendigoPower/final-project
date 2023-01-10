import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getMostRated } from '../../helpers/getMostRated'
import RatedGame from './RatedGame'
export default function MostRated() {
  const [mostRated,setMostrated]=useState([])
  const [isMobile,setIsMobile]=useState(false)
  const handleResize=()=>{
    if(window.innerWidth <= 1000){
      setIsMobile(true)
    }
    else{
      setIsMobile(false)
    } 
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  useEffect(()=>{
    const ratedGames=Promise.resolve(getMostRated())
    ratedGames.then(data=>{
      if(isMobile){
      setMostrated(data.slice(0,4))
    }
    else{
      setMostrated(data)
    }
    })
  },[isMobile])
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center p-4 bg-zinc-900 rounded-lg'>
        <h3 className='font-poppins font-medium text-white mobile:text-5xl text-3xl '>Most Rated Games</h3>
      </div>
      <section className='bg-zinc-900 w-screen tablet:flex grid grid-cols-2 grid-rows-2 justify-around items-center tablet:my-16 mt-5 mb-10 mobile:py-16 py-7'>
        {mostRated?.map((game)=><RatedGame key={game.id}  rating={game.aggregated_rating} cover={game.cover} id={game.id}/>)}
      </section>
    </div>
  )
}
