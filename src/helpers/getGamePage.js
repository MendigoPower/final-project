import axios from "axios";

export const getGamePage=async(id)=>{
    try{
        const res=await axios.get(import.meta.env.VITE_API_PAGE+id);
        const gameData=await res.data
        return gameData
    }
    catch(err){console.log(err)}
}