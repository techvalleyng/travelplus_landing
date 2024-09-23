import './css/book.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export default function Book() {
  return (
    <div>
      <div className="container-fluid  mt-8 h-[400px]  bg-cover bg-no-repeat bg-img">
      <div className="bg-green-700 h-[400px] bg-opacity-70">
        <div className="text-center font-extrabold  text-white capitalize">
            <p className='text-2xl translate-y-6'>enjoy a Comfortable trip</p>
            <h1 className='text-6xl mt-10 ml-10'>Book a ride Now</h1>
        </div>
        <form action="">
            <div className="flex gap-8 flex-wrap justify-center items-center mt-14">
                <div className='capitalize  relative'>
                    <LocationOnIcon className="absolute top-5  left-2"/>
                    <select className='py-4 pl-10 bg-white rounded  w-[200px] focus:outline-none focus:ring-2 focus:ring-green-500' name="destination" aria-label='Start Destination' id="">
                        <option value="" disabled selected>Start Destination</option>
                        <option value="">Abuja</option>
                        <option value="">Abuja</option>
                    </select>
                </div>
                <div className='capitalize relative'>
                    <LocationOnIcon className="absolute top-5  left-2"/>
                    <select className='py-4 pl-10 bg-white rounded w-[200px] focus:outline-none focus:ring-2 focus:ring-green-500' name="destination" aria-label='End Destination' id="">
                        <option value="" disabled selected>End Destination</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Kano">Abuja - Gusau</option>
                        <option value="Kano">Abuja - Kusau</option>
                    </select>
                </div>
                <div className='relative'>
                    <AccessTimeIcon className="absolute top-5  left-2"/>
                    <input className='appearance-none pl-10 rounded  py-4 text-center focus:outline-none w-[200px]' type="datetime-local" aria-label='time' placeholder=''/>
                </div>
                <div className='relative'>
                    <CallIcon className="absolute top-5  left-2 "/>
                    <input className='appearance-none pl-10 rounded  py-4  focus:outline-none w-[200px]' type="number" aria-label='time' placeholder=' Phone Number'/>
                </div>
            </div>
            <div className='mt-8 text-center'>
                <button className="capitalize mx-16 text-white bg-green-500 py-2 px-10 font-extrabold text-md rounded border border-white" type="submit">Book my ride</button>
            </div>
        </form>
      </div>
      </div>
    </div>
  )
}
