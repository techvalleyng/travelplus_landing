import { NavLink } from 'react-router-dom';
import travlogo from '../assets/travlogo(2).svg'
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

export default function Header() {

  const user = true;

  const [toggle, setToggle] = useState(false);

  const toggleNavbar = ()=>{
    setToggle(!toggle);
  };

  const [userToggle, setUserToggle] =useState(false);

  return (
    <>
      <div 
        className={`${toggle ? 'h-[350px]' :'h-0'} sticky right-0 left-0 top-0 z-50 space-y-6 space-x-8 md:space-x-0 md:space-y-0   flex-col md:h-20 shadow-md text-green-800 font-inter flex md:flex-row md:items-center  md:justify-around border-gray-100 border-2 border-solid text-sm`}>
          
        <div className='flex ml-8 mt-5 md:m-0 items-center'>
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
          <a href="#services">Our Service</a>
          <a href="#Contact-us">Contact Us</a>
        </div>

        <div className={` ${toggle ? 'flex' :'hidden'} md:flex flex-col space-y-4 w-20 {}md:w-44 md:flex-row md:items-center md:space-y-0 md:none md:space-x-6`}>
        {
        user ? 
        <div className='flex items-center space-x-1 relative cursor-pointer' onClick={()=> setUserToggle(!userToggle)}>
          <PersonOutlineIcon fontSize='small'/>
          <h1 className='font-inter text-sm'>Muhammad</h1>
        {
            userToggle ?
          <div className='hidden absolute -bottom-[110px] space-y-4 bg-white rounded border border-gray-100  p-4'>
            <div className='flex space-x-2 '>
              <DesktopMacIcon fontSize='small'/>
              <span>Dashboard</span>
            </div>
            <div className='space-x-2'>
              <LogoutIcon fontSize='small'/>
              <span>Logout</span>
            </div>
          </div>
          :
          <div className='absolute -bottom-[110px] space-y-4 bg-white rounded border border-gray-100  p-4'>
          <div className='flex space-x-2 '>
            <DesktopMacIcon fontSize='small'/>
            <span>Dashboard</span>
          </div>
          <div className='space-x-2'>
            <LogoutIcon fontSize='small'/>
            <span>Logout</span>
          </div>
        </div>
        }
        </div>
        :
        <>
          <NavLink className='bg-green-700 text-white font-inter p-2 rounded' to='/login'>Log in</NavLink>
          <NavLink className='font-inter' to='/signup'>Sign Up</NavLink>
        </>
        }
        </div>
      </div>
    </>
  );
}
