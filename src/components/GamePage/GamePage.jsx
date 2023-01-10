// @ts-nocheck
import React, { useEffect, useState } from "react";
import Summary from './Summary'
import Hero from './Hero'
import HowLong from './HowLong'
import Information from './Information'
import Similar from "./Similar";
import { useParams } from "react-router-dom";
import {getGamePage} from "../../helpers/getGamePage"
import CarouselImages from "./Carousel";

export default function Game() {
  // How to get the id from the parameters
  const params=useParams()
  const id=params.id
  const [gameData,setGameData]=useState()
  const [urls,setUrls]=useState()
  const [similar,setSimilar]=useState()
  useEffect(() => {
    const gamePage=Promise.resolve(getGamePage(id))
    gamePage.then(data=>{
      setGameData(data[0])
    })
  }, []);

  useEffect(()=>{
    let imageUrls=[]
    if(gameData!=undefined){ 
      gameData.screenshots.map((screenshot)=>{
        const id=screenshot.image_id
        imageUrls.push(`https://images.igdb.com/igdb/image/upload/t_1080p/${id}.jpg`)
      })
    }
    setUrls(imageUrls)
    
    let similarGames=[]
    if(gameData!=undefined){ 
      gameData.similar_games.map((similar)=>{
        const coverId=similar.cover.image_id
        const id=similar.id
        if(similarGames.length<=3){
          similarGames.push({
            id:id,
            cover:`https://images.igdb.com/igdb/image/upload/t_cover_big/${coverId}.jpg`
          })
        }
      })
    }
    setSimilar(similarGames)
  },[gameData])


  return (
    <div className='py-1 flex flex-col gap-6'>
      {gameData?<Hero name={gameData.name} cover={gameData.cover} genres={gameData.genres} platforms={gameData.platforms} rating={gameData.aggregated_rating} summary={gameData.summary} modes={gameData.game_modes} id={gameData.id} />:null}
    
      {gameData?<Summary summary={gameData.summary} />:null}

      <HowLong />
      
      {gameData?<Information engine={gameData.game_engines} release={gameData.release_dates} perspective={gameData.player_perspectives}/>:null}
      
      {urls?<CarouselImages urls={urls} />:null}

      {similar?<Similar  similar={similar}  />:null}
    </div>
  )
}
