import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ page }) => {
   return (
      <nav className="w-3/5 flex justify-around mx-auto py-5 border-b-2">
         <Link to="/" className='text-xl text-indigo-800'>Sebuah Web</Link>
         <div className="flex content-center self-center gap-x-10 lg:gap-x-14 text-gray-400">
            <Link to="/todo" className="hover:text-gray-600 ease-out duration-300" aria-current="page">Todo</Link>
            <Link to="/weather" className="hover:text-gray-600 ease-out duration-300">Test</Link>
            <Link to="/about" className='hover:text-gray-600 ease-out duration-300'>About</Link>
         </div>
      </nav>
   );
}

export default Navbar;