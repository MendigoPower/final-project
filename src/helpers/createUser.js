import axios from "axios";

export const createUser=async(user)=>{
    try{
        
       let res= axios.post(import.meta.env.VITE_API_CREATEUSER,user)
       let data=res.then(res=>res.data)
       return data
    }
    catch(err){console.log(err)}
}