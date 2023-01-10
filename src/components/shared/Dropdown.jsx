import React from 'react';
import styled from "styled-components";
import Searchbarmenu from './Searchbar';
import logo from '../../assets/game-icons_game-console.svg'
import { useAuth } from '../../context/AuthContext'

export default function Dropdown({ isOpen, toggleDropdown }) {
  const { currentUser, logout } = useAuth()
  const handleLogout = () => {
    logout()
  }
  const DpDrawer = styled.div`
    transform: translateX(${isOpen ? '0' : '-100%'});
    `

  return (
    <div>
      {isOpen && <div className='h-full w-full z-30 absolute top-0 left-0 bg-black bg-opacity-30 transition-all duration-300 ease-linear ' onClick={toggleDropdown}>



        <DpDrawer isOpen={isOpen} className='p-3 absolute z-40 top-0 h-screen w-1/2 marker:w-6/12 bg-white transition-all duration-300 ease-linear'>

          {
            currentUser ?
              <>
                <div className='tablet:grid flex-wrap  grid-cols-2 h-fit'>
                  <div className='my-auto'>
                    <a href={`/profile/${currentUser.uid}`} ><img src={`${currentUser.photoId}`} className='opacity-80 hover:opacity-100 hover:drop-shadow-xl transition-all duration-200 ease-linear' alt="" /></a>
                  </div>
                  <div className='w-fit my-auto mx-auto'>
                    <button onClick={handleLogout} className=' py-2 px-9  rounded-md text-white bg-medium-grey opacity-70 hover:opacity-100 transition-all duration-300 ease-linear cursor-pointer hover:scale-101'>Log out</button>
                  </div>
                </div>

              </>
              :
              <>
                <a href='/login'>
                  <button className='py-2 px-9 mx-5 rounded-md text-white bg-medium-grey opacity-70 hover:opacity-100 transition-all duration-300 ease-linear cursor-pointer hover:scale-101' >Log in</button>
                </a>
                <a href="/signUp">
                  <button className='py-2 px-9 mx-5 rounded-md text-white bg-medium-grey opacity-70 hover:opacity-100 transition-all duration-300 ease-linear cursor-pointer hover:scale-101'>Register</button>
                </a>
              </>
          }


          <div className='my-4 w-fit mx-auto hover:text-wierdo-orange transition-all duration-300 ease-linear cursor-pointer'>
            <a href="/" className='flex '>
              <figure className=''>
                <img className='' src={logo} alt="Website Logo " />
              </figure>
              <div className='my-auto mx-3 hover:scale-101'>
                <h2 className='text-4xl font-poppins '>Gamess</h2>
              </div>
            </a>
          </div>

          <Searchbarmenu />



        </DpDrawer>

      </div>}
    </div >
  )
}