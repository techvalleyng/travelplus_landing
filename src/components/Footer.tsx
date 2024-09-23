import travlog from '../assets/travlogo.png'

export default function Footer() {
  return (
    <div>
      <div className="container-fuild mt-8 flex justify-evenly items-center bg-green-600 sticky bottom-0 left-0 right-0 h-[200px]">
        <div className="flex font-inter">
          <img className="h-10" src={travlog} alt=""/>
          <span className='ml-2 text-white text-lg  font-pacifico'>Travel<sup>&#43;</sup>
          </span>
        </div>
        <div className='font-inter'>
          <h1>Our Services</h1>
          <ul>
            <li>Delivery</li>
            <li>Pick Up</li>
            <li>Inter State</li>
          </ul>
        </div>
        <div className='font-inter'>
          <h1>Contact Us</h1>
          <ul>
            <li>Phone</li>
            <li>Email</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
