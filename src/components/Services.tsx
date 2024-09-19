
export default function Services() {
  return (
    <div>
      <div className="container-fluid  py-10 px-4">
        <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-green-600">What We Offer</h3>
            <h1 className="text-gray-500 mb-4 font-bold text-6xl">Our Futured Services</h1>
            <p className="text-lg capitalize mb-4">
                We created our Taxi to help you find the most dependable and highest quality taxi Services, Anytime <br />and Anywhere. all our drivers are uniformed and fully licensed.
            </p>
        </div>
        <div className="flex mx-10 items-center justify-around my-8">
            <div className="">
                <div className="bg-green-500 h-4 w-20 p-10 rounded-full">
                </div>
                <div className="capitalize mt-4">
                    <h1 className="font-bold text-xl">Inter-State Services</h1>
                    <p className="leading-7"> We pick and <br /> deliver packages<br /> to your door steps</p>
                </div>
            </div>
            {/* <span className="h-[40vh] border-r-2"></span> */}
            <div className="">
                <div className="bg-green-500 h-4 w-20 p-10 rounded-full">
                </div>
                <div className="capitalize mt-4">
                    <h1 className="font-bold text-xl">Package Delivery</h1>
                    <p className="leading-7"> We pick and <br />deliver packages<br /> to your door steps</p>
                </div>
            </div>
            {/* <span className="h-[40vh] border-r-2"></span> */}
            <div className="">
                <div className="bg-green-500 h-4 w-20 p-10 rounded-full">
                </div>
                <div className="capitalize mt-4">
                    <h1 className="font-bold text-xl">Address Pick Up</h1>
                    <p className="leading-7"> We always pick up <br />our clients on <br />time, 24/7<br /> Availability.</p>
                </div>
            </div>
        </div>
      </div>
      <div className="text-center capitalize">
            <h3 className="text-3xl font-bold mb-4 text-green-600">How it works</h3>
            <h1 className="text-gray-500 mb-4 font-bold text-6xl">Our Online Along Services</h1>
            <p className="text-lg mb-4">
                Enjoy A Comfortable and safe trip with our services
            </p>
        </div>
    </div>
  )
}
