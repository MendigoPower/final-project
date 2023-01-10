import { useEffect } from 'react'
import { React, useState } from 'react'
import { AiFillStar, AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'


export default function RecentCard({ cover, id, name, platforms, genres, rating }) {
  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
  const stars = Math.round(rating) * 5 / 100
  const formatedRating = stars.toFixed(1)
  const [likeColor, setLikeColor] = useState(false);
  const[click,setClick]=useState(false) 
  const { currentUser,addGame } = useAuth()
  useEffect(() => {
    if(currentUser.games===undefined||currentUser.games.length > 0){
      currentUser.games.map(game => {
        if (game === id) {
          setLikeColor(true)
        }
      })
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
    <div className='bg-darker-grey tablet:my-0  my-8 tablet:h-96 h-80 laptop:w-600 tablet:w-128 w-full rounded-lg drop-shadow-md flex justify-around hover:scale-101 hover:drop-shadow-lg transition-all duration-300 ease-linear'>
      <figure className='mobile:mx-3 mx-1 flex items-center'>
        <Link to={`/game/${id}`}>
          <img className='h-auto w-56 rounded-lg drop-shadow-lg transition-all duration-300 ease-linear opacity-85 hover:opacity-100' src={image} alt="cover of the games" />
        </Link>
      </figure>
      <section className='flex justify-center flex-col items-center mobile:mx-2 mx-0 max-w-[14.5rem] '>
        <span className='flex justify-center w-fit'>
          <Link to={`/game/${id}`} className='hover:text-wierdo-orange transition-all duration-300 ease-linear'>
            {<h3 className='tablet:text-2xl text-xl font-bold text-center underline underline-offset-4 decoration-1 min-w-[11rem]'>{name}</h3>}
          </Link>
        </span>
        <span className='flex  items-center justify-center mt-3 mb-3'>
          <h4 className='font-poppins mr-1 tablet:text-3xl text-xl'>{formatedRating}</h4>
          <AiFillStar className='text-amber-600 mobile:w-7 w-5 h-auto' />
        </span>
        <h3 className='font-semibold mb-1'>Genres:</h3>
        <div className='flex justify-center items-center flex-col tablet:max-w-[12.5rem] max-w-[10rem]'>
          {genres.map((genre) => <h4 key={genre.id}>{genre.name}</h4>)}
        </div>
        <h3 className='font-semibold mb-1 mt-1'>Platforms:</h3>
        <div className='flex justify-between tablet:max-w-[10rem] max-w-[7rem] flex-wrap'>
          {platforms.map((platform) => <h4 key={platform.id} className='ml-1 mr-1 h-fit'>{platform.abbreviation}</h4>)}
        </div>
        {
          currentUser ?
          <>
            <div className='tablet:flex pt-5  '>
              <span className=' '>
                <AiFillHeart onClick={handleFavorite} color={likeColor||click?'red':'grey'} className='w-10 h-6 m-1 hover:text-red transition-all duration-300 ease-linear' />
              </span>
            </div>
          </>
          :null
        }
     
      </section>

    </div>
  )
}
