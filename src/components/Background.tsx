import AppleIcon from '@mui/icons-material/Apple'
import Playstore from '../assets/playstore.svg'
import hand from '../assets/hand.png'
import './css/background.css'
export default function Background() {
  return (
    <div>
        <div className="container-fluid relative -z-10 overflow-hidden h-[700px] flex items-center  bg-image bg-cover bg-no-repeat bg-fixed">
          <div className="mt-30 w-[70%] ml-20">
            <p className="text-[93px] font-bold text-white">Download The App </p>
            <p className="text-[60px] font-bold text-[greenYellow]">And Make Your Order Now</p>
            <div className='flex space-x-4  translate-y-14'>
              <button className='flex  bg-white  rounded-full p-4 text-lg justify-between items-center  hover:bg-green-500' type="button">
                <img className='w-6 mr-2 text-lg' src={Playstore} alt=""/>
                Google Play
              </button>
              <button type="button" className='font-bold  bg-white rounded-full p-4 text-lg hover:bg-green-500  transition duration-100 ease-in'>
                <AppleIcon className='mr-1 text-lg'/>
                App Store
              </button>
            </div>
          </div>
          <div className='flex-1 w-[60%]'>
            <img className='w-[35%] mx-auto -z-10 object-contain -rotate-[20deg]  absolute -right-14 bottom-0 top-28' src={hand} alt="iamges skk" />  
          </div>   
        </div>
    </div>
  )
}
