import React from 'react'
import Slider from './Slider'
import MostRated from './MostRated'
import Popular from './Recent'
import Title from './Title'
export default function Home() {
  return (
    <>
      <Slider/>
      <Title/>
      <MostRated/>
      <Popular/>
    </>
  )
}
