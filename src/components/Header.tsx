import travlog from '../assets/travlogo.png'
export default function Header() {
  return (
    <div>
      <div className="container-fluid fixed z-10 font-bold top-0 left-0 right-0 h-16  text-white  text-md flex p-5 bg-opacity-40 items-center justify-evenly bg-green-600">
        <div className="flex-1 w-10 flex items-center">
          <img className="ml-20 h-10" src={travlog} alt=""/>
          <span className='ml-2 text-white text-lg font-mono'>Travel<sup>&#43;</sup>
          </span>
          {/* <div className="rounded-full bg-green-500 ml-20 h-5 w-10">

          </div> */}
        </div>
        <div className="flex-1 w-14">
          <ul className="flex  items-center  justify-evenly">
            <li><a href="#" className="border-b-4 border-solid border-green-500">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li className="self-end  mx-16 bg-green-500 p-2 rounded"><a href="#">Book Your Ride Now</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
