import AppleIcon from '@mui/icons-material/Apple';
import Playstore from '../assets/playstore.svg';
import hand from '../assets/hand.png';
import { useState } from 'react';
import './css/background.css';
import frame from '../assets/frame.png'
import person from '../assets/person.svg'
import arrow from '../assets/arrow2.svg'
// import date from '../assets/date.svg'
import { NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function Background() {
  const [startDate, setStartDate] = useState<Date | null>(null);

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

    <div className='mt-4 mb-8'>
      <form className='flex flex-col md:flex-row justify-center items-center'>
        <div className="relative  w-full rounded-lg md:rounded-r-none md:rounded-l-lg mb-6 shadow-md border border-r h-16 border-gray-100  ml-3 mr-2  md:ml-0  md:mr-0 md:w-80">
          <input 
            type="text" 
            aria-label="from" 
            className="peer h-10  w-full ml-3 mt-2 text-gray-900 placeholder-transparent focus:outline-none border-none"
            placeholder=" "
          />
          <label 
            className="absolute left-0 -top-3.5 ml-3 mt-3.5  text-gray-500 text-sm transition-all transform -translate-y-1 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gray-500">
            From
          </label>
          <img className='absolute transform rotate-90 top-16 md:rotate-0 md:right-0 right-2 z-10 md:top-5 w-8 md:w-6 border rounded-full border-green-700'src={arrow} alt=""/>
        </div>
        <div className="h-16 relative w-full rounded-lg md:rounded-none mb-6 shadow-md border border-l  border-gray-100    
          md:w-80">
          <input 
            aria-label='To'
            type="text" 
            className="peer h-10 ml-3 mt-2 w-full border-none text-gray-900 placeholder-transparent focus:outline-none"
            placeholder=" "
          />
          <label 
            className="absolute left-0 -top-3.5 ml-3 mt-3.5 text-gray-500 text-sm transition-all transform -translate-y-1 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gray-400">
            To
          </label>
        </div>
        <div className="h-16 relative w-full rounded-lg md:rounded-none mb-6 shadow-md border border-l  border-gray-100    
          md:w-40">
          {/* <input 
            type="text" 
            id="from" 
            className="peer h-10  ml-2 w-full md:w-36 mt-2  border-none text-gray-900 placeholder-transparent focus:outline-none "
            placeholder=" "
          /> */}
           <DatePicker
              className="peer h-10  ml-1 w-full md:w-36 mt-2  border-none text-gray-900 placeholder-transparent focus:outline-none"
              selected={startDate}
              onChange={(date) => setStartDate(date )}
            />
          <label  
            className="absolute left-0 -top-3.5 ml-2 mt-3.5 text-gray-500 text-sm transition-all transform -translate-y-1 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gray-400">
            Date
          </label>
        </div>
        <div className='h-16 w-full md:rounded-none mb-6  md:border-l  border-gray-100 md:rounded-e-lg md:shadow-md md:border  md:border-gray-100  ml-2 md:ml-0 mr-4  md:w-40'>
          <input 
            type="button"
            className='h-12  w-full md:w-32 md:ml-3 md:mr-2 mt-2 cursor-pointer bg-green-700 rounded-lg text-white font-inter '
            aria-label='search'
            value='Schedule Now'
          />
        </div>
      
      </form>
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
        <div className='absolute max-w-20  md:max-w-48 -right-4 top-7 md:top-10 md:-right-4 md:bottom-0  -rotate-[25deg] overflow-y-hidden'>
          <img src={hand} alt=""/>
        </div>
      </div>
    </div>

    </>
  );
}
