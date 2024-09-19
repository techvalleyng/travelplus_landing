export default function Header() {
  return (
    <div>
      <div className="container-fluid fixed z-1 font-bold top-0 left-0 right-0 h-16  text-white  text-md flex p-5 bg-opacity-10 items-center justify-evenly bg-green-600">
        <div className="flex-1 w-10">
          {/* <img src='../assets/Logo.png' alt=""/> */}
          <div className="rounded-full bg-green-500 ml-20 p-5 h-5 w-10">

          </div>
        </div>
        <div className="flex-1 w-14">
          <ul className="flex  items-center  justify-evenly">
            <li><a href="#" className="border-b-4 border-solid border-green-500">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li className="self-end  mx-16 bg-green-500 p-2 rounded-full"><a href="#">Book Your Ride Now</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
