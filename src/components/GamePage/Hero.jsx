import { React, useState,useEffect } from 'react'
import { AiFillStar, AiFillHeart } from 'react-icons/ai'
import {useAuth} from '../../context/AuthContext'
export default function Hero({ cover, rating, name, genres, platforms, modes,id }) {
    const imageSmall = `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
    const image = `https://images.igdb.com/igdb/image/upload/t_1080p/${cover.image_id}.jpg`
    const stars = Math.round(rating) * 5 / 100
    const formatedRating = stars.toFixed(1)
    const [likeColor, setLikeColor] = useState(false);
    const[click,setClick]=useState(false)
    const { currentUser,addGame } = useAuth()
    useEffect(() => {
        if(currentUser){
          currentUser.games.map(game => {
            if (game === id) {
              setLikeColor(true)
            }
          })
        }else{
            ('no games')
        }
      }, [currentUser])
      useEffect(() => {
        if (likeColor&&click) {
          addGame(id)
        }
      }, [likeColor])
    const handleFavorite = () => {
        if(likeColor){
            setClick(false)
          }else{
            setLikeColor(true);
            setClick(true)
          }
    }
    return (
        <div className='flex min-h-fit relative'>
            <div className='h-140 w-screen min-w-full  '>
                <figure style={{ backgroundImage: `url(${image})` }} className='bg-no-repeat bg-cover bg-center blur-md min-h-full min-w-full bg-fixed '></figure>
            </div>
            <div className='absolute min-w-full  mobile:p-16 p:7 mt-16' >

                <div className='laptop:grid grid-cols-2 laptop:gap-10'>

                    <div className='mx-auto tablet:w-128 mobile:w-96 w-72  h-132  laptop:mb-0 mb-10 '>
                        <img src={imageSmall} alt="" className='mx-auto w-screen  rounded-xl border-solid border-4 border-black shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear ' />
                    </div>
                    <div className='mx-auto xl:w-140 backdrop-blur-xl bg-white/80 mobile:w-128 w-72 rounded-xl shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear '>
                        <div className='text-center'>
                            <h2 className='mobile:py-12 pt-7 pb-2 px-4 laptop:text-6xl mobile:text-5xl text-3xl font-bold'>{name}</h2>
                            <span className='flex  items-center justify-center mt-3 mb-3'>
                                <h4 className='font-poppins mr-1 laptop:text-3xl text-2xl '>{formatedRating}</h4>
                                <AiFillStar className='text-amber-600 w-7 h-auto' />
                            </span>
                        </div>

                        <div className=' xl:px-36 px-16 mobile:text-2xl text-xl'>
                            <ul className='grid grid-cols-2 '>
                                <li className='mobile:py-7 py-1 mobile:ml-0 -ml-10 mobile:no-underline overline font-bold'>Genres: </li>
                                <ul className='mobile:py-7 py-1 mobile:mb-0 mb-3'>{genres ? genres.map((genre) => <li className='ml-1 mr-1' key={genre.id}>{genre.name}</li>) : null}</ul>
                            </ul>
                            <ul className='grid grid-cols-2 min-h-full'>
                                <li className='mobile:py-7 py-1 mobile:ml-0 -ml-10 mobile:no-underline overline font-bold'>Platforms: </li>
                                <ul className='mobile:py-7 py-1 mobile:mb-0 mb-3 flex justify-between max-w-[10rem] flex-wrap '>{platforms ? platforms.map((platform) => <li key={platform.id} className=''>{platform.abbreviation}</li>) : null}  </ul>
                            </ul>
                            <ul className='grid grid-cols-2 min-h-full mobile:pb-0 pb-5'>
                                <li className='mobile:py-7 py-1 mobile:ml-0 -ml-10 mobile:no-underline overline font-bold'>Game Modes: </li>
                                <ul className='mobile:py-7 py-1 mobile:mb-0 mb-3 '>{modes ? modes.map((modes) => <li key={modes.id} className='ml-1 mr-1 h-fit'>{modes.name}</li>) : null} </ul>
                            </ul>

                        </div>
                        {currentUser?
                            <div className=''>
                            <div className='pb-1'>
                                <AiFillHeart onClick={handleFavorite} color={likeColor||click?'red':'grey'} className='w-10 h-8 m-5 hover:text-red transition-all duration-300 ease-linear mx-auto' />
                            </div>
                            </div>
                            :null
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}