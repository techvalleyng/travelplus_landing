import women from '../assets/women.png'
import  man from '../assets/man.svg'
import map from '../assets/map.svg'
import packages from '../assets/packages.svg'
import car from '../assets/car.svg'
import download from '../assets/download.svg'
import sharp from '../assets/sharp.svg'


export default function Services() {
  return (
    <div id='services'>
      <div className="container-fluid relative py-10 px-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold mb-4 font-inter text-green-600">What We Offer</h3>
                <h1 className="text-gray-500 mb-4 font-bold font-inter text-6xl">Our Futured Services</h1>
                <p className="text-lg capitalize font-inter  mb-4">
                    We created our Taxi to help you find the most dependable and highest quality taxi Services, Anytime <br />and Anywhere. all our drivers are uniformed and fully licensed.
                </p>
            </div>
            <div className="flex mx-10 items-center justify-around my-8">
                <div className="">
                    {/* <div className="bg-green-500 h-4 w-20 p-10 rounded-full">
                    </div> */}
                    <img className='w-28 ' src={map} alt=""/>
                    <div className="capitalize font-inter mt-4">
                        <h1 className="font-bold text-xl">Inter-State Services</h1>
                        <p className="leading-2"> We pick and <br /> deliver packages<br /> to your door steps</p>
                    </div>
                </div>
                {/* <span className="h-[40vh] border-r-2"></span> */}
                <div className="">
                    {/* <div className="bg-green-500 h-4 w-20 p-10 rounded-full">
                    </div> */}
                    <img className='w-28 ' src={packages} alt=""/>
                    <div className="capitalize font-inter  mt-4">
                        <h1 className="font-bold text-xl">Package Delivery</h1>
                        <p className="leading-7"> We pick and <br />deliver packages<br /> to your door steps</p>
                    </div>
                </div>
                {/* <span className="h-[40vh] border-r-2"></span> */}
                <div className="">
                    {/* <div className="bg-green-500 h-4 w-20 p-10 rounded-full">
                    </div> */}
                    <img className='w-28 ' src={man} alt=""/>
                    <div className="capitalize font-inter mt-4">
                        <h1 className="font-bold text-xl">Address Pick Up</h1>
                        <p className="leading-7"> We always pick up <br />our clients on <br />time, 24/7<br /> Availability.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center capitalize font-inter">
            <h3 className="text-3xl font-bold mb-4 font-inter text-green-600">How it works</h3>
            <h1 className="text-gray-500 mb-4 font-bold text-6xl">Our Online Along Services</h1>
            <p className="text-lg font-inter mb-4">
                Enjoy A Comfortable and safe trip with our services
            </p>
        </div>
        <div className="flex justify-evenly items-center">
            <div className="flex-1">
                <img className='w-max object-cover' src={women} alt="" />
            </div>
            <span className="h-[80vh] mt-4 border-r-4"></span>
            <div className="flex-1 text-justify -mt-12">
                <div className='flex items-center ml-8 mt-8 font-inter'>
                    <img className='w-28 bg-green-500 rounded-full p-5 mr-8' src={download} alt=""/>
                    <p className='capitalize text-xl font-extrabold font-inter'>download the app from google play <br /> and app store</p>
                </div>
                <div className='flex items-center ml-8 mt-8'>
                    <img className='w-28  bg-green-500 rounded-full p-5 mr-8' src={car} alt=""/>
                    <p className='capitalize text-xl font-extrabold font-inter'>choose the route in which you <br /> are travelling to</p>
                </div>
                <div className='flex items-center ml-8 mt-8'>
                    <img className='w-28 bg-green-500 rounded-full p-5 mr-8' src={sharp} alt=""/>
                    <p className='capitalize text-xl font-inter font-extrabold'>book your ride and start <br /> your journey</p>
                </div>
            </div>
        </div>
    </div>
  )
}
