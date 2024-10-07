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
    <div className="flex justify-around space-y-10 font-inter">
      <div className='capitalize md:mt-20 md:ml-10 leading-0 text-[#282626]'>
        <p className='md:text-2xl font-inter  font-semibold'>Are you a frequent traveler</p>
        <p className='md:text-6xl font-inter font-bold'>Discover affordable and</p>
        <p className='md:text-6xl font-inter font-bold'>comfortable travel </p>
        <p className='md:text-6xl font-inter font-bold'>experience.</p>
      </div>
      <div className=''>
        <img className='min-w-44' src={person} alt=""  />
      </div>
    </div>

    <div className="border md:mr-16 md:ml-24 mt-8 mb-20 border-gray-100 rounded-md shadow text-[#282626] flex  md:flex-row md:items-center md:justify-between md:text-xl font-inter md:p-2">
      <span className='capitalize'>from</span>
      <img className='min-w-8' src={arrow} alt="" />
      <span>To</span>
      <div className='flex md:flex-row md:space-x-2'>
        <img className='min-w-6' src={date} alt=""/>
        <span>Date</span>
      </div>
      <button className='bg-green-700 rounded text-sm text-white md:px-8 md:py-2'>Schedule Now</button>
    </div>

    <div className='md:mb-20 border border-green-700 md:ml-28 md:mr-20  min-h-72 rounded '>
      <div className='md:relative'>
        <img className='md:h-72 w-full object-fill' src={frame} alt=""/>
        <div className='absolute inset-10 text-center leading-1 md:text-6xl font-bold text-white font-inter capitalize'>
          <p>download the app</p>
          <p className='md:text-4xl text-[greenYellow]'>and make your order Now</p>
          <div className='flex md:flex-row md:justify-center md:mt-10 md:space-x-4'>
            <div className='flex  bg-white rounded items-center hover:bg-green-700 hover:text-white text-gray-700 transition ease-linear duration-500'>
              <img className='max-w-8 ml-4' src={Playstore} alt=""/>
              <NavLink to='#' className='text-sm  font-inter  md:p-4'>Google Play</NavLink>
            </div>
            <div className='flex bg-white rounded items-center hover:bg-green-700 hover:text-white text-gray-700 transition ease-linear duration-500'>
              <AppleIcon className='ml-4  '/>
              <NavLink to='#' className='text-sm font-inter  md:p-4'>App Store</NavLink>
            </div>
          </div>
        </div>
        <div className='absolute max-w-40 right-0 bottom-0  -rotate-[25deg] overflow-y-hidden'>
          <img src={hand} alt=""/>
        </div>
      </div>
    </div>

    </>
  );
}
