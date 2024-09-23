import maps from '../assets/maps.svg'
import call from '../assets/call.svg'
import mail from '../assets/mail.svg'
export default function Helps() {
  return (
    <div>
        <div className='Container-fluid mt-6'>
            <div className="text-center font-inter capitalize">
                <h3 className="text-3xl font-bold font-inter mb-4 text-green-600">How can we help you</h3>
                <h1 className="text-gray-500 mb-4 font-inter font-bold text-6xl">have a question&#63;</h1>
            </div>
            <div className="flex mt-10 capitalize gap-20 items-center justify-center">
                <div className="flex  flex-col  items-center border w-[200px] h-[200px] border-gray-100 shadow-lg rounded-lg font-inter">
                    <img className='w-14' src={maps} alt="" />
                    <p className="text-md ml-6 mt-4 font-bold text-gray-500">No28, ali akilu road, opp <br />kaduna <br /> investment <br /> house</p>
                </div>
                <div className="flex flex-col font-inter  items-center border w-[200px] h-[200px] border-gray-100 shadow-lg rounded-lg">
                    <img className='w-14' src={call} alt="" />
                    <p className="text-md ml-6 mt-4 font-bold text-gray-500">call us<br /> 08025734353  08036400647</p>
                </div>
                <div className="flex flex-col font-inter  items-center border w-[200px] h-[200px] border-gray-100 shadow-lg rounded-lg text-gray-500">
                    <img className='w-14' src={mail} alt="" />
                    <p className="text-md ml-6 mt-4 font-bold">mail us&#64; travelplus&#64; gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}
