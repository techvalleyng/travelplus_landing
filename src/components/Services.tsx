import women from '../assets/women.png';
import man from '../assets/man.svg';
import map from '../assets/map.svg';
import packages from '../assets/packages.svg';
import car from '../assets/car.svg';
import download from '../assets/download.svg';
import sharp from '../assets/sharp.svg';
import { motion } from 'framer-motion';

export default function Services() {
  const steps = [
    {
      icon: download,
      text: 'Download the app from Google Play and App Store',
      alt: 'Download App'
    },
    {
      icon: car,
      text: 'Choose the route in which you are travelling to',
      alt: 'Choose Route'
    },
    {
      icon: sharp,
      text: 'Book your ride and start your journey',
      alt: 'Book Ride'
    }
  ];

  const featuredServices = [
    {
      icon: map,
      title: 'Inter-State Services',
      description: 'We pick and deliver packages to your door steps',
      alt: 'Inter-State Services'
    },
    {
      icon: packages,
      title: 'Package Delivery',
      description: 'We pick and deliver packages to your door steps',
      alt: 'Package Delivery'
    },
    {
      icon: man,
      title: 'Address Pick Up',
      description: 'We always pick up our clients on time, 24/7 Availability.',
      alt: 'Address Pick Up'
    }
  ];

  return (
    <div id='services' className="font-inter">
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-green-600 mb-2">How it works</h3>
            <h1 className="text-gray-800 font-bold text-4xl">Our Online Services</h1>
            <p className="text-lg text-gray-500 mt-4">
              Enjoy a comfortable and safe trip with our services
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img className='w-full h-auto object-cover rounded-lg' src={women} alt="Women" />
            </motion.div>
            <div className="md:w-1/2 md:pl-12 mt-12 md:mt-0">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className='flex items-center mt-8'
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img className='w-16 h-16 bg-green-500 rounded-full p-4 mr-6' src={step.icon} alt={step.alt} />
                  <p className='text-lg font-semibold text-gray-800'>{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-green-600 mb-2">What We Offer</h3>
            <h1 className="text-gray-800 font-bold text-4xl">Our Featured Services</h1>
            <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
              We created our Taxi to help you find the most dependable and highest quality taxi Services, Anytime and Anywhere. All our drivers are uniformed and fully licensed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img className='w-20 h-20 mb-4' src={service.icon} alt={service.alt} />
                <h2 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h2>
                <p className="text-base text-gray-500">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}