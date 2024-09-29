import './css/book.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Book() {
  return (
    <div id='Book'>
      <div className="container-fluid font-inter mt-8 h-[880px] md:h-[400px] md:bg-cover bg-no-repeat  bg-img">
        <div className="bg-green-700 md:h-[400px] h-[480px] bg-opacity-70 flex flex-col justify-center">
          <div className="text-center font-extrabold text-white capitalize">
            <p className='text-2xl mt-10 md:text-3xl md:-translate-y-4'>Enjoy a Comfortable Trip</p>
            <h1 className='text-4xl md:text-6xl mt-4 md:mt-2'>Book a Ride Now</h1>
          </div>
          <form>
            <div className="flex flex-col md:flex-row gap-6 flex-wrap justify-center font-inter items-center mt-8">
              <div className='relative capitalize w-full max-w-xs'>
                <LocationOnIcon className="absolute top-4 left-3 text-gray-400" />
                <select className='py-4 pl-10 pr-3 bg-white rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500' name="destination" aria-label='Start Destination'>
                  <option value="" disabled selected>Start Destination</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Kano">Kano</option>
                </select>
              </div>
              <div className='relative capitalize w-full max-w-xs'>
                <LocationOnIcon className="absolute top-4 left-3 text-gray-400" />
                <select className='py-4 pl-10 pr-3 bg-white rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500' name="destination" aria-label='End Destination'>
                  <option value="" disabled selected>End Destination</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Abuja-Gusau">Abuja - Gusau</option>
                  <option value="Abuja-Kusau">Abuja - Kusau</option>
                </select>
              </div>
              <div className='relative w-full max-w-xs'>
                <input className='appearance-none pl-2 pr-3 rounded py-4 text-center focus:outline-none w-full bg-white' type="datetime-local" aria-label='time' />
              </div>
            </div>
            <div className='mt-8 text-center font-inter'>
              <button className="capitalize mx-auto text-white bg-green-500 py-2 px-10 font-extrabold text-md rounded border border-white hover:bg-green-600 transition duration-150" type="submit">Book My Ride</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
