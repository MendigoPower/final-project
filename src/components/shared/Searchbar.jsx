import React from 'react'
import {Input } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
export default function Searchbarmenu() {
  const [name,setName]=useState("")
  const navigate=useNavigate()
  const handleChange=(e)=>{
    setName(e.target.value)
  }
  const handleSubmit=(e)=>{
    navigate(`/search/${name}`)
  }
  return (
    <form onSubmit={handleSubmit} className="my-3">
      <Input
      className=' w-full rounded-lg border-solid border-2 border-gray-400 indent-4 outline-blue-700 focus:shadow-button-shadow focus:shadow-blue-900 transition-all duration-300 ease-linear'
      icon='search'
      iconPosition='left'
      placeholder='Search your game...'
      onChange={handleChange}
      />
    </form>
  )
}
