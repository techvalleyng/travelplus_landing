import { NavLink } from 'react-router-dom';
import travlogo from '../assets/travlogo(2).svg'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar = ()=>{
    setToggle(!toggle);
  };

  return (
    <>
      <div 
        className={`${toggle ? 'h-[350px]' :'h-0'} space-y-6 space-x-8 md:space-x-0 md:space-y-0  flex-col md:h-20 shadow-md text-green-800 font-inter flex md:flex-row md:items-center  md:justify-around border-gray-100 border-2 border-solid`}>
          
        <div className='flex ml-8 mt-8 md:m-0 items-center'>
          <img                                                                               
            src={travlogo}
            className='w-10 mr-1' 
            alt="Logo"
          />
          <span className='font-pacifico text-green-700'>Travel<sup>&#43;</sup></span>
        </div>

        <div className='absolute right-5 md:hidden' onClick={toggleNavbar} >
         <MenuIcon className='cursor-pointer'/>
        </div>

        <div className={`${toggle ? 'flex' :'hidden'} md:flex flex-col space-y-4 md:space-y-0 md:flex-row md:none md:space-x-10 font-inter font-medium`}>
          <NavLink className='border-solid border-b-4 border-green-700 w-10' to='/'>Home</NavLink>
          <a href="#">Our Service</a>
          <a href="#">Contact Us</a>
        </div>

        <div className={` ${toggle ? 'flex' :'hidden'} md:flex flex-col space-y-4 w-20 md:w-44 md:flex-row md:items-center md:space-y-0 md:none md:space-x-6`}>
          <NavLink className='bg-green-700 text-white font-inter p-2 rounded' to='/login'>Log in</NavLink>
          <NavLink className='font-inter' to='/signup'>Sign Up</NavLink>
        </div>
      </div>
    </>
  );
}
