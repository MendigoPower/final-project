import axios from 'axios'

export const getMostRated =async()=>{
    try{
        const res=await axios.get(import.meta.env.VITE_API_MOST);
        const mostrated=await res.data
        const shuffled=mostrated.sort(()=>0.5-Math.random())
        const mostRated=shuffled.slice(0,5)
        return mostRated
    }
    catch(err){console.log(err)}
}