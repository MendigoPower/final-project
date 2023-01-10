import { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { getSearch } from '../../helpers/getSearch'
import { getRecent } from '../../helpers/getRecent'
import { useParams } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai'
import GameItem from "./GameItem"
export default function SearchPage() {
    const [menu, setMenu] = useState("Game Lists")
    const [search, setSearch] = useState([])

    const params = useParams()
    useEffect(() => {
        if (params.name === undefined) {
            const recentGames = Promise.resolve(getRecent())
            recentGames.then(data => {
                setSearch(data)
            })
        }
        const searchGames = Promise.resolve(getSearch(params.name))
        searchGames.then(data => {
            setSearch(data)
        })
    }, [])

    const handleItemClick = (e, { name }) => {
        setMenu(current => {
            return current = name
        })
    }

    const [likeColor, setLikeColor] = useState('grey');

    return (
        <main className='bg-white pb-10'>
            <Menu tabular>
                <Menu.Item
                    name='Game Lists'
                    active={menu === 'Game Lists'}
                    onClick={handleItemClick}
                />

                <Menu.Item
                    name='User Lists'
                    active={menu === 'User Lists'}
                    onClick={handleItemClick}
                />
            </Menu>

            {menu === "User Lists" &&
                <div className='flex flex-col justify-center items-center pb-16'>
                    <section className='grid gap-5 grid-cols-2 grid-rows-3 place-items-center mt-16 '>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                        <span className='bg-darker-grey h-72 w-600 rounded-lg drop-shadow-sm flex justify-around'>
                        </span>
                    </section>
                </div>
            }
            {menu === "Game Lists" &&
                <div className='flex flex-col justify-center items-center pb-16'>
                    <section className='grid gap-5 laptop:grid-cols-2 grid-cols-1 tablet:grid-rows-3 grid-rows-auto place-items-center mt-16 '>
                        {search.map((game) => <GameItem key={game.id} cover={game.cover} id={game.id} name={game.name} platforms={game.platforms} genres={game.genres} rating={game.aggregated_rating} />)}
                        
                    </section>
                </div>
            }
        </main>
    )
}
