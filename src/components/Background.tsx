import AppleIcon from '@mui/icons-material/Apple';
import Playstore from '../assets/playstore.svg';
import hand from '../assets/hand.png';
// import './css/background.css';
import frame from '../assets/frame.png'
import person from '../assets/person.svg'
import arrow from '../assets/arrow.svg'
import date from '../assets/date.svg'
import { NavLink } from 'react-router-dom';

export default function Background() {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-around space-y-10 font-inter">
      <div className='capitalize mt-24 md:mt-20 ml-10 leading-4 text-[#282626]'>
        <p className='text-xl md:text-2xl font-inter  font-semibold'>Are you a frequent traveler</p>
        <p className='text-2xl md:text-6xl font-inter font-bold'>Discover affordable and</p>
        <p className='text-2xl md:text-6xl font-inter font-bold'>comfortable travel </p>
        <p className='text-2xl md:text-6xl font-inter font-bold'>experience.</p>
      </div>
      <div className='hidden md:block'>
        <img className='min-w-44' src={person} alt=""  />
      </div>
    </div>

    <div className="md:border md:mr-16 md:ml-24 md:mt-8 md:mb-20 md:border-gray-100 rounded-md md:shadow text-[#282626] flex flex-col  md:flex-row md:items-center md:justify-between md:text-xl font-inter md:p-2">
      <div className='flex mr-10 ml-10 md:ml-0 md:mr-0 p-4 md:p-0 border border-gray-100 rounded shadow md:shadow-none md:border-0 md:border-gray-0  relative mt-4 md:mt-0 flex-row md:space-x-40'>
      <span className='capitalize'>from</span>
      <img className='min-w-8 absolute right-2 md:-right-36' src={arrow} alt="" />
      </div>
      <div className='flex mr-10 ml-10 md:ml-0 md:mr-0 p-4  md:p-0 mt-4  flex-row md:space-x-40 shadow md:shadow-none border border-gray-100 relative rounded md:border-0 md:border-gray-0 mb-4'>
      <span>To</span>
      <div className='flex  flex-row space-x-2'>
        <img className='min-w-6 absolute  md:right-12 right-2' src={date} alt=""/>
        <span>Date</span>
      </div>
      </div>
      <button className='bg-green-700 mr-10 ml-10 md:ml-0 md:mr-0 p-4 mb-10 md:mb-0 rounded text-sm text-white md:px-8 md:py-2 hover:bg-opacity-85  transition duration-300 ease-linear'>Schedule Now</button>
    </div>

    <div className='mb-10 md:mb-20 border border-green-700 mr-10 ml-10 md:ml-28 md:mr-20  md:min-h-72 min-h-32 rounded '>
      <div className='relative overflow-hidden'>
        <img className='md:h-72 h-40 w-full object-cover' src={frame} alt=""/>
        <div className='absolute inset-5 md:inset-10 text-center leading-1 text-2xl md:text-6xl font-bold text-white font-inter capitalize'>
          <p>download the app</p>
          <p className='text-[16px] md:text-4xl text-[greenYellow]'>and make your order Now</p>
          <div className='flex flex-row justify-center mt-2 md:mt-10 space-x-4'>
            <div className='flex bg-white rounded-full items-center hover:bg-green-700 hover:text-white text-gray-700 transition ease-linear duration-500'>
              <img className='max-w-4 md:max-w-8 ml-2' src={Playstore} alt=""/>
              <NavLink to='#' className='text-sm -ml-1 font-inter p-2 md:p-4'>Google Play</NavLink>
            </div>
            <div className='flex bg-white rounded-full items-center hover:bg-green-700 hover:text-white text-gray-700 transition ease-linear duration-500'>
              <AppleIcon className='ml-2'/>
              <NavLink to='#' className='text-sm -ml-2 font-inter p-2 md:p-4'>App Store</NavLink>
            </div>
          </div>
        </div>
        <div className='absolute max-w-20 md:max-w-48 -right-4 top-7 md:top-10 md:-right-4 md:bottom-0  -rotate-[25deg] overflow-y-hidden'>
          <img src={hand} alt=""/>
        </div>
      </div>
    </div>

    </>
  );
}
