import women from '../assets/women.png';
import man from '../assets/man.svg';
import map from '../assets/map.svg';
import packages from '../assets/packages.svg';
import car from '../assets/car.svg';
import download from '../assets/download.svg';
import sharp from '../assets/sharp.svg';

export default function Services() {
  return (
    <div id='services'>
      <div className="text-center capitalize font-inter">
        <h3 className="text-3xl font-bold mb-4 font-inter text-green-600">How it works</h3>
        <h1 className="text-gray-500 mb-4 font-bold font-inter text-4xl md:text-6xl">Our  Online Services</h1>
        <p className="text-lg font-inter mb-4">
          Enjoy a comfortable and safe trip with our services
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex-1">
          <img className='w-3/4 md:w-full object-cover' src={women} alt="Women" />
        </div>
        <span className="h-[80vh] mt-4 border-r-4 hidden md:block"></span>
        <div className="flex-1 text-justify mt-8">
          <div className='flex items-center ml-4 md:ml-8 mt-8 font-inter'>
            <img className='w-16 md:w-20 bg-green-500 rounded-full p-5 mr-4' src={download} alt="Download App" />
            <p className='capitalize text-lg font-extrabold font-inter'>Download the app from Google Play <br /> and App Store</p>
          </div>
          <div className='flex items-center ml-4 md:ml-8 mt-8'>
            <img className='w-16 md:w-20 bg-green-500 rounded-full p-5 mr-4' src={car} alt="Choose Route" />
            <p className='capitalize text-lg font-extrabold font-inter'>Choose the route in which you <br /> are travelling to</p>
          </div>
          <div className='flex items-center ml-4 md:ml-8 mt-8 font-inter'>
            <img className='w-16 md:w-20 bg-green-500 rounded-full p-5 mr-4' src={sharp} alt="Book Ride" />
            <p className='capitalize text-lg font-extrabold'>Book your ride and start <br /> your journey</p>
          </div>
        </div>
      </div>
      <div className="container-fluid relative py-10 px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 font-inter text-green-600">What We Offer</h3>
          <h1 className="text-gray-500 mb-4 font-bold font-inter text-4xl md:text-6xl">Our Futured Services</h1>
          <p className="text-lg capitalize font-inter mb-4">
            We created our Taxi to help you find the most dependable and highest quality taxi Services, Anytime <br />and Anywhere. All our drivers are uniformed and fully licensed.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap mx-auto items-center      justify-around my-8">
          <div className="text-center m-4 flex-1 max-w-[200px] sm:max-w-[250px]">
            <img className='w-24 sm:w-28 mx-auto' src={map} alt="Inter-State Services" />
            <div className="capitalize font-inter mt-4">
              <h1 className="font-bold text-lg sm:text-xl">Inter-State Services</h1>
              <p className="leading-5 sm:leading-6">We pick and <br /> deliver packages<br /> to your door steps</p>
            </div>
          </div>
          <div className="text-center m-4 flex-1 max-w-[200px] sm:max-w-[250px]">
            <img className='w-24 sm:w-28 mx-auto' src={packages} alt="Package Delivery" />
            <div className="capitalize font-inter mt-4">
              <h1 className="font-bold text-lg sm:text-xl">Package Delivery</h1>
              <p className="leading-5 sm:leading-6">We pick and <br />deliver packages<br /> to your door steps</p>
            </div>
          </div>
          <div className="text-center m-4 flex-1 max-w-[200px] sm:max-w-[250px]">
            <img className='w-24 sm:w-28 mx-auto' src={man} alt="Address Pick Up" />
            <div className="capitalize font-inter mt-4">
              <h1 className="font-bold text-lg sm:text-xl">Address Pick Up</h1>
              <p className="leading-5 sm:leading-6">We always pick up <br />our clients on <br />time, 24/7<br /> Availability.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
