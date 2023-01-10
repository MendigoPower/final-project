import React from 'react'
import { useEffect,useState } from 'react'
import Avatar from './Avatar'
import Favorites from './Favorites'
import { useParams } from "react-router-dom";
import { getProfile } from '../../helpers/getProfile';
import { useAuth } from '../../context/AuthContext'
export default function Profile() {
  const {currentUser}=useAuth()
  const params=useParams()
  const id=params.id
  const [profileData,setProfileData]=useState()
  const [avatar,setAvatar]=useState()
  
  useEffect(() => {
    const gamePage=Promise.resolve(getProfile(id))
    gamePage.then(data=>{
      data=setProfileData(data)
    })
  }, [])
  useEffect(() => {
    if(profileData != undefined){
      setAvatar({
        username:profileData.displayName,
        photo:profileData.photoURL,
      })
    }
  }, [profileData])
  return (
      <div className='p-10'>
        {avatar?<Avatar username={avatar.username} photo={avatar.photo} />:null}
          {profileData?<Favorites profileData={profileData} />:null}
      </div>
  )
}
