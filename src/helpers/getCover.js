import axios from 'axios'

export const getCover=async()=>{
    try{
        const res=await axios.get(import.meta.env.VITE_API_MOST);
        const gamecover=await res.data
        console.log(gamecover)
        const shuffled=gamecover.sort(()=>0.5-Math.random())
        const gameCover=shuffled.slice(0,5)
        return gameCover
    }
    catch(err){console.log(err)}
}