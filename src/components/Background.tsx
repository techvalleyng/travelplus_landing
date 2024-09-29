import AppleIcon from '@mui/icons-material/Apple';
import Playstore from '../assets/playstore.svg';
import hand from '../assets/hand.png';
import './css/background.css';

export default function Background() {
  return (
    <div>
      <div className="container-fluid relative z-10 overflow-hidden h-[700px] flex flex-col md:flex-row items-center bg-image bg-cover font-inter bg-no-repeat bg-fixed">
        <div className="mt-30 w-full md:w-[70%] ml-0 md:ml-20 px-4">
          <p className="text-[40px] md:text-[65px] lg:text-[85px] font-bold text-white">Download The App</p>
          <p className="text-[25px] md:text-[40px] lg:text-[50px] font-bold text-[greenYellow]">And Make Your Order Now</p>
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-4 font-inter translate-y-4 md:translate-y-14'>
            <button className='flex bg-white rounded-full p-4 text-lg justify-between items-center transition duration-150 ease-linear hover:bg-green-500 hover:text-white' type="button">
              <img className='w-6 mr-2 text-lg' src={Playstore} alt="" />
              Google Play
            </button>
            <button type="button" className='font-inter transition duration-150 ease-linear bg-white rounded-full p-4 text-lg hover:bg-green-500 hover:text-white mt-4 md:mt-0'>
              <AppleIcon className='mr-1 text-lg' />
              App Store
            </button>
          </div>
        </div>
        <div className='flex-1 w-full md:w-[60%]'>
          <img className='w-[60%] md:w-[40%] lg:w-[35%] mx-auto -z-10 object-contain -rotate-[20deg] absolute -right-14 bottom-0 top-28' src={hand} alt="images" />
        </div>
      </div>
    </div>
  );
}
