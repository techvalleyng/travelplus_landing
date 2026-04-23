import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import travlogo from '../assets/travlogo.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-green-600 text-white font-inter">
      <div className="container mx-auto px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={travlogo} className="w-10 mr-2" alt="Logo" />
              <span className="font-pacifico text-lg">Travel<sup>&#43;</sup></span>
            </div>
            <p className="text-green-100">
              Your one-stop solution for interstate travel, package deliveries, and private hires.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Our Service</a></li>
              <li><a href="#Contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><Link to="/bookreview" className="hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity"><FaFacebook size={24} /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><FaTwitter size={24} /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-green-500 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-100">&copy; {new Date().getFullYear()} TravelPlus. All rights reserved.</p>
          <button onClick={scrollToTop} className="mt-4 md:mt-0 text-green-100 hover:text-white transition-colors">
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}