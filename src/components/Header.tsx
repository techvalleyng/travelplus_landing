import { Link, Outlet } from 'react-router-dom';
import travlog from '../assets/travlogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggelMenu] = useState(false);

  const handleClick = () => {
    setToggelMenu(!toggleMenu); // Toggle menu state
  };

  return (
    <div>
      <div className="fixed z-40 font-bold top-0 left-0 right-0 h-16 text-white text-md flex p-5 bg-opacity-40 items-center justify-between bg-green-600">
        {/* Logo */}
        <div className="flex items-center">
          <img className="ml-4 md:ml-20 h-10" src={travlog} alt="Travel Logo" />
          <span className='ml-2 text-white text-lg font-pacifico'>
            Travel<sup>&#43;</sup>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex font-inter space-x-8 items-center">
          <ul className="flex items-center space-x-6">
            <li><Link to='/' className="border-b-4 border-solid border-green-500 hover:opacity-60 transition-opacity duration-300 ease-in" >Home</Link></li>
            <li><a href="#services" className='hover:opacity-60 transition-opacity duration-300 ease-in'>Services</a></li>
            <li><a href="#Contact-us" className='hover:opacity-60 transition-opacity duration-300 ease-in'>Contact Us</a></li>
            <li className="bg-green-500 p-2 rounded">
              <a href="#Book" className='hover:opacity-60 transition-opacity duration-300 ease-in'>Book Your Ride Now</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button aria-label='Toggle menu' onClick={handleClick}>
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="bg-green-600 bg-opacity-40 fixed z-40 font-bold top-16 left-0 right-0  text-white text-center p-4 space-y-4 font-inter md:hidden">
          <ul className="flex flex-col items-start space-y-4">
            <li><Link to='/' className="block border-b-4 border-solid border-green-500">Home</Link></li>
            <li><a href="#services" className="block">Services</a></li>
            <li><a href="#Contact-us" className="block">Contact Us</a></li>
            <li><a href="#Book" className="block bg-green-500 p-2 rounded">Book Your Ride Now</a></li>
          </ul>
        </div>
      )}

      <Outlet />
    </div>
  );
}
