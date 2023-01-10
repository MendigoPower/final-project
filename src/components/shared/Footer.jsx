import React from 'react';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="text-not-white bg-zinc-800 mx-auto w-full max-w-container px-1 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <p className="mt-5 text-center mobile:text-lg text-sm leading-6">
          Designed by: Nicolas Meza & Gabriel Soares</p>
        <div className="mt-5 flex items-center justify-center space-x-4 text-sm font-semibold">

          <div className='grid grid-rows-2'>
            <a href="https://www.linkedin.com/in/gabriel-soares-802710176/" target="_blank" className='mobile:text-lg text-sm  transition-all duration-300 ease-linear hover:text-wierdo-orange'>Gabriel </a>
            <AiFillLinkedin className='text-wierdo-orange mobile:w-5 w-3 h-auto my-1 mx-auto' />
          </div>

          <div className="h-4 w-px bg-not-white"></div>

          <div className='grid grid-rows-2'>
            <a href="https://www.linkedin.com/in/nicolas-meza-169378201/" target="_blank" className='mobile:text-lg text-sm transition-all duration-300 ease-linear hover:text-wierdo-orange'>Nicolas</a>
            <AiFillLinkedin className='text-wierdo-orange mobile:w-5 w-3 h-auto my-1 mx-auto' />
          </div>

          <div className="h-4 w-px bg-not-white"></div>

          <div className='grid grid-rows-2'>
            <a href="https://github.com/MendigoPower/final-project" target="_blank" className='mobile:text-lg text-sm transition-all duration-300 ease-linear hover:text-wierdo-orange'>Github</a>
            <AiFillGithub className='text-wierdo-orange mobile:w-5 w-3 h-auto my-1 mx-auto' />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;