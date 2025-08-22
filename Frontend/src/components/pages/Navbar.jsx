import React from 'react'
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-[#FFF1DE] px-20 py-10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🐶</span>
        <h1 className='text-lg font-semibold'>Pawstore</h1>
      </div>

      {/* Nav Links */}
      <ul className='flex space-x-8 text-black font-medium'>
        <li>Home</li>
        <li>Breeds</li>
        <li>Accessories</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      {/* Search Box */}
      <div className='relative'>
        <input 
          type="text"
          placeholder='Search for pets...'
          className='pl-4 pr-10 py-2 rounded-full bg-white text-gray-600 placeholder:text-gray-400 focus:outline-none' 
          />
          <FiSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 ' />
      </div>
    </nav>
  )
}

export default Navbar
