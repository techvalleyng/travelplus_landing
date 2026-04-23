import React from 'react';

const TermsOfService: React.FC = () => {
  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'service-description', title: '2. Service Description' },
    { id: 'user-accounts', title: '3. User Accounts and Responsibilities' },
    { id: 'driver-terms', title: '4. Driver-Specific Terms' },
    { id: 'passenger-terms', title: '5. Passenger-Specific Terms' },
    { id: 'bookings-payments', title: '6. Bookings, Payments, and Cancellations' },
    { id: 'prohibited-conduct', title: '7. Prohibited Conduct' },
    { id: 'intellectual-property', title: '8. Intellectual Property' },
    { id: 'disclaimers', title: '9. Disclaimers and Limitation of Liability' },
    { id: 'indemnification', title: '10. Indemnification' },
    { id: 'termination', title: '11. Termination' },
    { id: 'governing-law', title: '12. Governing Law and Dispute Resolution' },
    { id: 'changes-terms', title: '13. Changes to Terms' },
    { id: 'contact-us', title: '14. Contact Us' },
  ];

  return (
    <div className="bg-gray-50 font-inter py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">TravelPlus Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: 21st April 2026</p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-green-600 hover:underline">{section.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12">
            <section id="acceptance">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600">By using the TravelPlus mobile applications and services, you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service.</p>
            </section>

            <section id="service-description">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Service Description</h2>
              <p className="text-gray-600">TravelPlus provides a platform to connect passengers with drivers for inter-state travel, package deliveries, and private hires. We are a technology provider and do not operate as a transportation carrier.</p>
            </section>

            <section id="user-accounts">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">3. User Accounts and Responsibilities</h2>
              <p className="mb-4 text-gray-600">You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your account and for all activities that occur under it.</p>
              <p className="text-gray-600">You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
            </section>

            <section id="driver-terms">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Driver-Specific Terms</h2>
              <p className="mb-4 text-gray-600">Drivers must undergo a verification process, including providing a valid driver's license, vehicle information, and other required documents. Drivers are independent contractors and not employees of TravelPlus.</p>
              <p className="text-gray-600">Drivers are solely responsible for their compliance with all applicable laws, regulations, and safety standards.</p>
            </section>

            <section id="passenger-terms">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Passenger-Specific Terms</h2>
              <p className="text-gray-600">Passengers agree to treat drivers with respect and to adhere to the booking details. Any damage to a driver's vehicle caused by a passenger may result in additional charges.</p>
            </section>

            <section id="bookings-payments">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Bookings, Payments, and Cancellations</h2>
              <p className="mb-4 text-gray-600">All bookings must be made through the TravelPlus platform. Payments are processed through a third-party payment provider. Cancellation policies will be clearly communicated at the time of booking.</p>
              <p className="text-gray-600">TravelPlus may charge a service fee for bookings made through the platform.</p>
            </section>

            <section id="prohibited-conduct">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Prohibited Conduct</h2>
              <p className="text-gray-600">You agree not to use the Service for any unlawful purpose or in any way that could harm the Service, other users, or third parties. This includes, but is not limited to, harassment, fraud, and the transportation of illegal items.</p>
            </section>

            <section id="intellectual-property">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Intellectual Property</h2>
              <p className="text-gray-600">All content and materials on the TravelPlus platform, including logos, trademarks, and software, are the property of TravelPlus or its licensors and are protected by intellectual property laws.</p>
            </section>

            <section id="disclaimers">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">9. Disclaimers and Limitation of Liability</h2>
              <p className="mb-4 text-gray-600">The Service is provided "as is" and "as available" without any warranties. TravelPlus does not guarantee the quality, safety, or reliability of the transportation services provided by drivers.</p>
              <p className="text-gray-600">To the fullest extent permitted by law, TravelPlus shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the Service.</p>
            </section>

            <section id="indemnification">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">10. Indemnification</h2>
              <p className="text-gray-600">You agree to indemnify and hold harmless TravelPlus and its officers, directors, employees, and agents from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.</p>
            </section>

            <section id="termination">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">11. Termination</h2>
              <p className="text-gray-600">We may terminate or suspend your account and access to the Service at our sole discretion, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            </section>

            <section id="governing-law">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">12. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600">These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be resolved through binding arbitration in Kaduna, Nigeria.</p>
            </section>

            <section id="changes-terms">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">13. Changes to Terms</h2>
              <p className="text-gray-600">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.</p>
            </section>

            <section id="contact-us">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">14. Contact Us</h2>
              <p className="text-gray-600 mb-4">If you have any questions about these Terms, please contact us:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Email: travelplus@gmail.com</li>
                <li>Phone: 08025734353, 08036400647</li>
                <li>Address: No28, Ali Akilu Road, Opp Kaduna Investment House</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;