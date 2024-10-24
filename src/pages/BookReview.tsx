import arrow from '../assets/ArrowForward.svg'
const BookReview = () => {
  return (
    <div>
        <div className="container mx-auto max-w-96 rounded-lg shadow  mt-20 border border-solid border-gray-100  h-32 font-inter">
            <h1 className="ml-5 mt-2 tex-lg text-black">Book Review</h1>
            <div className="flex justify-evenly mt-4 items-center font-inter text-[0.7rem]">
                <div className="space-y-1 -mt-4">
                    <p>Date/Time</p>
                    <p className="text-black font-inter font-bold">10:00 AM</p>
                </div>
                <div className="space-y-1">
                    <p>pick up destination</p>
                    <p className="text-black font-inter font-bold">Unguwan shanu <br /> bus stop</p>
                </div>
                <img  src={arrow} alt="" />  
                <div className="space-y-1">
        
                    <p>Drop up destination</p>
                    <p className="text-black font-inter font-bold">mabushi <br /> park abuja</p>
                            
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookReview
