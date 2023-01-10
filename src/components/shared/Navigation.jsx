import { React, useState } from 'react'
import Navbar from './Navbar'
import Dropdown from './Dropdown'

export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown}/>
        <Navbar toggleDropdown={toggleDropdown}/>
        

    </div>
  )
}