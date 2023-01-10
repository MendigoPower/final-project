import React from 'react'
import {useState,useContext} from 'react'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from '../config/firebase.js'
import{useNavigate} from 'react-router-dom'
import {getDocs,getDoc, doc,collection, updateDoc, arrayUnion, addDoc,query,where } from "firebase/firestore";
const AuthContext=React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}
export default function AuthProvider({children}){
    const [currentUser,setCurrentUser]=useState()

    const navigate=useNavigate()

    const readCookie=async()=>{
        const user=Cookies.get('user')
        if(user){
            const userParsed=JSON.parse(user)
            const docRef = doc(db, "user", `${userParsed.dbId}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                userParsed.games=docSnap.data().gameIds
                setCurrentUser(current=>current=userParsed)
              } else {
              }
        }
    }
    useEffect(() => {
        readCookie()
    }, [])

    async function signup(username,uid,photoId){
        const createDoc= await addDoc(collection(db,"user"),{
            gameIds:[],
            uid:uid,
        })
        const dbId= await createDoc.id
        const user={
            username:username,
            uid:uid,
            photoId:photoId,
            dbId:dbId,
            games:[],
        }
        setCurrentUser(current=>current=user)
        Cookies.set('user',JSON.stringify(user))
        navigate('/')
    }
    async function loginUser(email,password){
        const docRef=collection(db,"user")
        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(async(userCredential) => {
                    const userCred = userCredential.user;
                    const q=query(docRef,where("uid","==",userCred.uid))
                    const querySnapshot = await getDocs(q);
                    let dbId;
                    querySnapshot.forEach((doc) => {
                        return dbId=doc.id
                    })
                    const userLogin={
                        username:userCred.displayName,
                        uid:userCred.uid,
                        photoId:userCred.photoURL,
                        dbId:dbId,
                        games:[]
                    }
                    setCurrentUser(current=>current=userLogin)
                    Cookies.set('user',JSON.stringify(userLogin))
                    navigate('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    const errorMessage = error.message;
                });
        return auth
    }
    function logout(){
        Cookies.remove('user')
        navigate('/')
        window.location.reload()
        return auth.signOut()
    }

    async function addGame(gameId){
        const userRef=doc(db,"user",currentUser.dbId)
            setCurrentUser(current=>current={...current,games:[...current.games,gameId]})
            await updateDoc(userRef,{
                gameIds:arrayUnion(gameId)
            })
    }

    const value={
        currentUser,signup,loginUser,logout,addGame
    }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}
