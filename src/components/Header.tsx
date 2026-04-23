import { NavLink } from 'react-router-dom';
import travlogo from '../assets/travlogo(2).svg'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sticky top-0 z-50 shadow-md bg-white text-green-800 font-inter">
        <div className="container mx-auto flex items-center justify-between h-20 px-16">
          <div className='flex items-center'>
            <img src={travlogo} className='w-10 mr-1' alt="Logo" />
            <span className='font-pacifico text-green-700 text-lg'>Travel<sup>&#43;</sup></span>
          </div>

          <div className='md:hidden' onClick={toggleNavbar}>
            <MenuIcon className='cursor-pointer' />
          </div>

          <div className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none ${toggle ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 font-medium p-4 md:p-0`}>
            <NavLink className='hover:text-green-600' to='/'>Home</NavLink>
            <a className='hover:text-green-600' href="#services">Our Service</a>
            <a className='hover:text-green-600' href="#Contact-us">Contact Us</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavLink className='bg-green-700 text-white font-inter px-4 py-2 rounded-full hover:bg-green-600 transition-colors' to='/bookreview'>Book Now</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}