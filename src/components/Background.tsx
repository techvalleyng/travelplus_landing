// import AppleIcon from '@mui/icons-material/Apple';
// import Playstore from '../assets/playstore.svg';
// import hand from '../assets/hand.png';
// import './css/background.css';
import person from '../assets/person.svg'
import arrow from '../assets/arrow.svg'
import date from '../assets/date.svg'

export default function Background() {
  return (
    <>
    <div className="flex justify-around space-y-10 font-inter">
      <div className='capitalize md:mt-20 md:ml-10  text-[#282626]'>
        <p className='md:text-2xl font-inter  font-semibold'>Are you a frequent traveler</p>
        <p className='md:text-6xl font-inter leading-8 font-bold'>Discover affordable and <br /> comfortable travel <br /> experience.</p>
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
    </>
  );
}
