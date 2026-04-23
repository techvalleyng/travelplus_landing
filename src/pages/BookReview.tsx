import arrow from '../assets/ArrowForward.svg';
import { motion } from 'framer-motion';

const BookReview = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-inter p-4">
      <motion.div 
        className="container mx-auto max-w-lg rounded-lg shadow-lg mt-10 border border-solid border-gray-100 bg-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl text-gray-800 font-bold">Book Review</h1>
          <p className="text-gray-500">Please confirm your trip details below.</p>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center text-center mb-6">
            <div className="w-2/5">
              <p className="text-sm text-gray-500">Pick Up</p>
              <p className="text-black font-bold text-lg">Unguwan Shanu Bus Stop</p>
            </div>
            <div className="w-1/5">
              <img src={arrow} alt="to" className="w-8 h-8 mx-auto" />
            </div>
            <div className="w-2/5">
              <p className="text-sm text-gray-500">Drop Off</p>
              <p className="text-black font-bold text-lg">Mabushi Park, Abuja</p>
            </div>
          </div>
          <div className="text-center text-gray-600 mb-8">
            <p className="font-semibold">Date & Time</p>
            <p className="text-black font-bold">10:00 AM</p>
          </div>
          <motion.button 
            className="w-full bg-green-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Confirm Booking
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BookReview;