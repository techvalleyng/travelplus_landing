import travlog from '../assets/travlogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
export default function Footer() {
  return (
    <div>
      <div className="container-fuild mt-8 flex justify-around items-center  bg-green-600 sticky bottom-0 left-0 right-0 h-[200px] text-white">
        <div className="flex font-inter -mt-24 -ml-24">
          <img className="h-10" src={travlog} alt=""/>
          <span className='ml-2 text-white text-lg  font-pacifico'>Travel<sup>&#43;</sup>
          </span>
        </div>
        <div className='font-inter flex space-y-2 flex-col'>
          <h1 className='border-b-2 border-solid border-green-500 w-28'>Our Services</h1>
            <a href="#" className='transition color duration-150 ease-linear hover:text-green-300'>Delivery</a>
            <a href="#" className='transition color duration-150 ease-linear hover:text-green-300'>Pick Up</a>
            <a href="#" className='transition color duration-150 ease-linear hover:text-green-300'>Inter State</a>
        </div>
        <div className='font-inter flex space-y-2 flex-col'>
          <h1 className='border-b-2 border-solid border-green-500 w-24'>Contact Us</h1>
            <span>Phone:08025734353, 08036400647</span>
            <span>Email:travelplus@gmail.com</span>
            <div className='space-x-2'>
            <a href="#" aria-label='link'><InstagramIcon/></a>
            <a href="#" aria-label='link'><XIcon/></a>
            <a href="#" aria-label='link'><FacebookIcon/></a>
            </div>
        </div>
      </div>
    </div>
  )
}
