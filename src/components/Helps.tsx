import maps from '../assets/maps.svg';
import call from '../assets/call.svg';
import mail from '../assets/mail.svg';

export default function Helps() {
  return (
    <div id='Contact-us'>
      <div className='container-fluid mb-24'>
        <div className="ml-14 md:ml-0 md:text-center font-inter capitalize">
          <h3 className="text-xl font-bold mb-4 text-green-600">How can we help you</h3>
          <h1 className="text-gray-500 mb-4 font-bold text-2xl md:text-4xl">Have a question&#63;</h1>
        </div>
        <div className="flex ml-14 md:ml-0 flex-wrap mt-10 gap-6 items-center md:justify-center">
          <div className="flex flex-col transition transform duration-300 ease-in-out items-center border w-full max-w-xs h-[180px] border-gray-100 shadow-lg rounded-lg font-inter hover:-translate-y-2">
            <img className='w-14' src={maps} alt="Location" />
            <p className="text-md ml-6 mt-4 font-bold text-gray-500 text-center">No28, Ali Akilu Road, Opp <br /> Kaduna <br /> Investment <br /> House</p>
          </div>
          <div className="flex flex-col transition transform duration-300 ease-in-out items-center border w-full max-w-xs h-[180px] border-gray-100 shadow-lg rounded-lg font-inter hover:-translate-y-2">
            <img className='w-14' src={call} alt="Call Us" />
            <p className="text-md ml-6 mt-4 font-bold text-gray-500 text-center">Call Us<br /> 08025734353 <br /> 08036400647</p>
          </div>
          <div className="flex flex-col transition transform duration-300 ease-in-out items-center border w-full max-w-xs h-[180px] border-gray-100 shadow-lg rounded-lg font-inter hover:-translate-y-2">
            <img className='w-14' src={mail} alt="Mail Us" />
            <p className="text-md ml-6 mt-4 font-bold text-gray-500 text-center">Mail Us&#64; <br /> travelplus&#64; gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
