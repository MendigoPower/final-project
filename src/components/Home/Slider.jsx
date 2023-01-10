import React, { useState } from 'react'
import readDead from '../../assets/read-dead.png'
import elden from '../../assets/elden.webp'
import spider from '../../assets/spiderman.jpg'
import { useEffect } from 'react'
export default function Slider() {
    const [counter,setCounter]=useState(1)
    const images=[spider,elden,readDead]
    const changeImage=()=>{
        if(counter<images.length-1){
            setCounter(prev=>prev+1)
        }
        else{setCounter(prev=>prev=0)}
    }
    useEffect(()=>{
            const interval=setInterval(()=>{
                changeImage()
            },5000)
            return ()=>clearInterval(interval)
    },[counter])

  return (
    <div className=''>
        <figure className='flex justify-center items-center w-[100%] h-[32rem]'><img className='z-20 w-[100%] h-full object-cover' src={images[counter]} alt="" /></figure>
    </div>
  )
}
