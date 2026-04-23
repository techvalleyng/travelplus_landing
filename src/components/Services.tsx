import women from '../assets/women.png';
import man from '../assets/man.svg';
import map from '../assets/map.svg';
import packages from '../assets/packages.svg';
import car from '../assets/car.svg';
import download from '../assets/download.svg';
import sharp from '../assets/sharp.svg';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div id='services'>
      <div className="text-center capitalize font-inter">
        <h3 className="text-3xl font-bold mb-4 font-inter text-green-600">How it works</h3>
        <h1 className="text-gray-500 mb-4 font-bold font-inter text-4xl md:text-4xl">Our Online Services</h1>
        <p className="text-lg font-inter mb-4">
          Enjoy a comfortable and safe trip with our services
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img className='w-3/4 md:w-full object-cover' src={women} alt="Women" />
        </motion.div>
        <span className="h-[80vh] mt-4 border-r-4 hidden md:block"></span>
        <div className="flex-1 text-justify mt-8">
          <motion.div 
            className='flex items-center ml-4 md:ml-8 mt-8 font-inter'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img className='w-16 md:w-20 bg-green-500 rounded-full p-5 mr-4' src={download} alt="Download App" />
            <p className='capitalize text-lg font-extrabold font-inter'>Download the app from Google Play <br /> and App Store</p>
          </motion.div>
          <motion.div 
            className='flex items-center ml-4 md:ml-8 mt-8'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img className='w-16 md:w-20 bg-green-500 rounded-full p-5 mr-4' src={car} alt="Choose Route" />
            <p className='capitalize text-lg font-extrabold font-inter'>Choose the route in which you <br /> are travelling to</p>
          </motion.div>
          <motion.div 
            className='flex items-center ml-4 md:ml-8 mt-8 font-inter'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img className='w-16 md:w-20 bg-green-500 rounded-full p-5 mr-4' src={sharp} alt="Book Ride" />
            <p className='capitalize text-lg font-extrabold'>Book your ride and start <br /> your journey</p>
          </motion.div>
        </div>
      </div>

      <div className="container-fluid relative py-10 px-4">
        <div className="ml-7 md:text-center">
          <h3 className="text-xl md:text-3xl font-bold mb-4 font-inter text-green-600">What We Offer</h3>
          <h1 className="text-gray-500 mb-4 font-bold font-inter text-2xl md:text-4xl">Our Futured Services</h1>
          <p className="text-lg capitalize font-inter mb-4">
            We created our Taxi to help you find the most dependable and highest quality taxi Services, Anytime and Anywhere. All our drivers are uniformed and fully licensed.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap mx-auto md:items-center md:justify-around my-8">
          <motion.div 
            className="flex space-x-5 md:space-x-5 ml-7 md:ml-0 md:flex-col md:text-center w-72 md:m-4 md:flex-1 md:max-w-[200px] sm:max-w-[250px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img className='w-16 md:w-24 sm:w-28 md:mx-auto' src={map} alt="Inter-State Services" />
            <div className="capitalize font-inter mt-4">
              <h1 className="font-bold text-lg sm:text-xl">Inter-State Services</h1>
              <p className="leading-5 sm:leading-6">We pick and deliver packages to your door steps</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex space-x-5 md:space-x-5 ml-7 md:ml-0 md:flex-col md:text-center w-72 md:m-4 md:flex-1 md:max-w-[200px] sm:max-w-[250px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img className='w-16 md:w-24 sm:w-28 md:mx-auto' src={packages} alt="Package Delivery" />
            <div className="capitalize font-inter mt-4">
              <h1 className="font-bold text-lg sm:text-xl">Package Delivery</h1>
              <p className="leading-5 sm:leading-6">We pick and deliver packages to your door steps</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex space-x-5 md:space-x-5 ml-7 md:ml-0 md:flex-col md:text-center md:m-4 md:flex-1 w-72 md:max-w-[200px] sm:max-w-[250px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img className='w-16 md:w-24 sm:w-28 md:mx-auto' src={man} alt="Address Pick Up" />
            <div className="capitalize font-inter mt-4">
              <h1 className="font-bold text-lg sm:text-xl">Address Pick Up</h1>
              <p className="leading-5 sm:leading-6">We always pick up our clients on time, 24/7 Availability.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}