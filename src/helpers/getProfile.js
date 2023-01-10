import axios from "axios";

export const getProfile=async(id)=>{
    try{
        const res=await axios.get(import.meta.env.VITE_API_PROFILE+id);
        const profileData=await res.data
        return profileData
    }
    catch(err){console.log(err)}
}
export const getProfileGames=async(ids)=>{
    try{
        const res=await axios.post(import.meta.env.VITE_API_PROFILE_GAMES,ids);
        const profileData=await res.data
        return profileData
    }
    catch(err){console.log(err)}
}