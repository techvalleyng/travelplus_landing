import AppleIcon from '@mui/icons-material/Apple'
import Playstore from '../assets/playstore.svg'

export default function Background() {
  return (
    <div>
        <div className="container-fluid flex items-center h-[80vh] bg-gray-700">
          <div className="ml-20 space-y-2">
            <p className="text-6xl text-white">Download The App </p>
            <p className="text-4xl text-green-500">And Make Your Order Now</p>
            <div className='flex space-x-4 translate-y-14'>
              <button className='flex text-[#000000] bg-white  rounded-full p-4 text-lg justify-between items-center  hover:bg-green-500 text-white' type="button">
                <img className='w-6 mr-2 text-lg' src={Playstore} alt=""/>
                Google Play
              </button>
              <button type="button" className='font-bold text-[#000000] bg-white rounded-full p-4 text-lg hover:bg-green-500 text-white transition duration-100 ease-in'>
                <AppleIcon className='mr-1 text-lg'/>
                App Store
              </button>
            </div>
          </div>   
        </div>
    </div>
  )
}
