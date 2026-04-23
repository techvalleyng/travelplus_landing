import { useLocation, Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function NotFound() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center font-inter p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-green-700">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
        <p className="text-gray-500 mt-1">No match for <strong className="font-bold text-lg text-gray-600">{location.pathname}</strong></p>
        <Link to="/">
          <motion.button
            className="mt-8 bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Homepage
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}