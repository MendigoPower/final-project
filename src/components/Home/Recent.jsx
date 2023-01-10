import React from 'react'
import { useState,useEffect } from 'react'
import { getRecent } from '../../helpers/getRecent'
import RecentCard from './RecentCard'
import RecentCardNoUser from "./RecentCopy";
import { useAuth } from '../../context/AuthContext'
export default function Recent() {
  const [recent,setRecent]=useState([])
  const {currentUser}=useAuth()
  useEffect(()=>{
    const recentGames=Promise.resolve(getRecent())
    recentGames.then(data=>{
      setRecent(data)
    })
  },[])
  return (
    <div className='flex flex-col justify-center items-center pb-16'>
      <div className='flex justify-center items-center p-4  bg-zinc-900 rounded-lg'>
        <h3 className='font-poppins font-medium text-white mobile:text-5xl text-3xl'>Recent Games</h3>
      </div>
      <div className='tablet:grid gap-16 grid-cols-2 grid-rows-3 mobile:mt-16 mt-5 '>
        {currentUser ?
         recent.map((game)=><RecentCard key={game.id} cover={game.cover} id={game.id} name={game.name} platforms={game.platforms} genres={game.genres} rating={game.aggregated_rating}/>)
         : 
         recent.map((game)=><RecentCardNoUser key={game.id} cover={game.cover} id={game.id} name={game.name} platforms={game.platforms} genres={game.genres} rating={game.aggregated_rating}/>)
        }
      </div>
    </div>
  )
}
