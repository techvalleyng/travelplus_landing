import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            About TravelPlus
          </h1>
          <div className="text-gray-600 text-lg leading-relaxed">
            <p className="mb-6">
              Welcome to TravelPlus, your trusted partner for comfortable and reliable transportation services. We are dedicated to providing a seamless travel experience, ensuring you reach your destination safely and on time.
            </p>
            <p className="mb-6">
              Our journey began with a simple mission: to make travel easier and more accessible for everyone. We believe that transportation should be more than just getting from point A to point B; it should be an experience that is both pleasant and stress-free. At TravelPlus, we combine modern technology with a customer-centric approach to deliver a service that exceeds expectations.
            </p>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to provide safe, reliable, and affordable transportation solutions that connect communities and empower individuals to travel with confidence. We are committed to continuous improvement and innovation to meet the evolving needs of our customers.
            </p>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><span className="font-semibold">Safety First:</span> Our drivers are professionally trained and our vehicles are regularly inspected to ensure your safety.</li>
              <li><span className="font-semibold">Reliable Service:</span> We pride ourselves on punctuality and reliability, so you can count on us to be there when you need us.</li>
              <li><span className="font-semibold">Comfortable Journeys:</span> Travel in comfort with our modern, well-maintained fleet of vehicles.</li>
              <li><span className="font-semibold">Affordable Fares:</span> We offer competitive pricing without compromising on quality or service.</li>
            </ul>
            <p>
              Thank you for choosing TravelPlus. We look forward to serving you and making your next journey a memorable one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;