import { NavLink } from 'react-router-dom';
import travlogo from '../assets/travlogo(2).svg'
export default function Header() {
  return (
   <div 
   className="h-20  shadow-md text-green-800 font-inter md:flex md:items-center        md:justify-around border-gray-100 border-2 border-solid">
    <div className='flex items-center'>
      <img 
        src={travlogo}
        className='w-10 mr-1' 
        alt="Logo"
       />
       <span className='font-pacifico text-green-700'>Travel<sup>&#43;</sup></span>
    </div>
    <div className='md:space-x-10 font-inter font-medium'>
      <NavLink className='border-solid border-b-4 border-green-700' to='/'>Home</NavLink>
      <a href="#">Our Service</a>
      <a href="#">Contact Us</a>
    </div>
    <div className='md:space-x-6'>
      <NavLink className='bg-green-700 text-white font-inter p-2 rounded' to='/login'>Log in</NavLink>
      <NavLink className='font-inter' to='/signup'>Sign Up</NavLink>
    </div>
   </div>
  );
}
