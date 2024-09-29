import travlog from '../assets/travlogo.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

export default function Footer() {
  return (
    <div className="bg-green-600 text-white">
      <div className="container-fluid mt-10 flex flex-col md:flex-row justify-around items-center py-6">
        <div className="flex items-center mb-4 md:mb-0 md:-mt-24 md:-ml-20">
          <img className="h-10" src={travlog} alt="Travel Plus Logo" />
          <span className="ml-2 text-lg font-pacifico">
            Travel<sup>&#43;</sup>
          </span>
        </div>
        
        <div className="font-inter flex flex-col leading-8 items-center mb-4 md:mb-0">
          <h1 className="border-b-2 border-solid border-green-500 w-28 text-center">Our Services</h1>
          <a href="#" className="transition duration-150 ease-linear hover:opacity-60">Delivery</a>
          <a href="#" className="transition duration-150 ease-linear hover:opacity-60">Pick Up</a>
          <a href="#" className="transition duration-150 ease-linear hover:opacity-60">Inter State</a>
        </div>

        <div className="font-inter flex flex-col leading-8 items-center mb-4 md:mb-0">
          <h1 className="border-b-2 border-solid border-green-500 w-24 text-center">Contact Us</h1>
          <span className='ml-16'>Phone: 08025734353, 08036400647</span>
          <span>Email: travelplus@gmail.com</span>

          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Instagram link">
              <img src={instagram} className="w-8" alt="Instagram" />
            </a>
            <a href="#" aria-label="Twitter link">
              <img src={twitter} className="w-8" alt="Twitter" />
            </a>
            <a href="#" aria-label="Facebook link">
              <img src={facebook} className="w-8" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
