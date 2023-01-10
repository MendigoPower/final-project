import React from 'react'
import { getProfileGames} from '../../helpers/getProfile';
import { useEffect, useState } from 'react'
import FavoriteCard from './FavoriteCard';
import{collection,query,where,getDocs,doc,getDoc,updateDoc,arrayRemove} from 'firebase/firestore'
import {db} from '../../config/firebase'
export default function Favorites({profileData}) {
    const [profileGames,setProfileGames]=useState()
    const [covers,setCovers]=useState([])
    const [docId,setDocId]=useState()

    useEffect(() => { 
             const documentid=Promise.resolve(getDocumentId(profileData.uid))
             
            documentid.then(data=>{
                setProfileGames(current=>current=data)
            })
    }, [])
    useEffect(() => {
        if(profileGames != undefined){
            const gamePage=Promise.resolve(getProfileGames(profileGames))
            gamePage.then(data=>{
                setCovers(data)
            })
        }
    }, [profileGames])

    const getDocumentId=async(uid)=>{
        const docRef = collection(db, "user");
        const q=query(docRef,where("uid","==",`${uid}`))
        const querySnapshot = await getDocs(q);
        let dbIds;
        querySnapshot.forEach((doc) => {
            dbIds=doc.data().gameIds;
            setDocId(doc.id)
        });
        return dbIds
    }
    const handleDelete=async(id)=>{
        const docRef = doc(db, "user", `${docId}`);
        await updateDoc(docRef, {
            gameIds:arrayRemove(id)
        });
        window.location.reload()
    }
    return (
        <div>
            <div className=" max-w-screen-xl mx-auto rounded-md bg-medium-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear min-h-fit mt-7 mb-24">
                <h3 className="py-8 text-center text-white font-poppins mr-1 text-4xl">Favorite Games</h3>
                <div className=" pb-7">
                    <div className="  grid laptop:grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 grid-rows-auto gap-4 mx-9 ">
                        {covers?covers.map((game)=>{return<FavoriteCard key={game.id} cover={game.cover} id={game.id} handleDelete={handleDelete} name={game.name} />}):null}
                    </div>
                </div>
            </div>
        </div>
    )
}
