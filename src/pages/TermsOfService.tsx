import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-inter">
      <h1 className="text-3xl font-bold mb-4">TravelPlus Terms of Use</h1>
      <p className="mb-6 text-gray-600">Last updated: 21st April 2026</p>

      <p className="mb-4">
        These Terms of Use (“Terms”) govern your access to and use of the TravelPlus platform, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>TravelPlus Passenger mobile application</li>
        <li>TravelPlus Driver mobile application</li>
        <li>Any related services, website, or features (collectively, the “Service”)</li>
      </ul>
      <p className="mb-6">
        By accessing or using TravelPlus, you agree to be bound by these Terms. If you do not agree, you must not use the Service.
      </p>

      <h2 className="text-2xl font-bold mb-4">1. Eligibility</h2>
      <p className="mb-4">To use TravelPlus, you must:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Be at least 18 years old</li>
        <li>Have the legal capacity to enter into a binding agreement</li>
        <li>Provide accurate and complete information during registration</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">2. Description of the Service</h2>
      <p className="mb-4">TravelPlus is a platform that connects:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Passengers with drivers for interstate travel, pickups, and deliveries</li>
        <li>Drivers with passengers seeking transport or delivery services</li>
      </ul>
      <p className="mb-6">
        TravelPlus does not own, operate, or control vehicles and is not a transportation provider. Drivers are independent users of the platform.
      </p>

      <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
      <p className="mb-4">You must create an account to use most features. You agree to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide accurate and up-to-date information</li>
        <li>Keep your login credentials secure</li>
        <li>Be responsible for all activity under your account</li>
      </ul>
      <p className="mb-6">
        We may suspend or terminate accounts that contain false information, violate these Terms, or are involved in suspicious or fraudulent activity.
      </p>

      <h2 className="text-2xl font-bold mb-4">4. Driver-Specific Terms</h2>
      <p className="mb-4">If you use TravelPlus Driver, you agree to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide valid identification (e.g., NIN where required)</li>
        <li>Provide accurate vehicle and license information</li>
        <li>Maintain all required permits and licenses</li>
        <li>Ensure your vehicle is roadworthy and safe</li>
      </ul>
      <p className="mb-4">You are responsible for:</p>
      <ul className="list-disc list-inside mb-6">
        <li>The trips you offer</li>
        <li>Passenger safety during trips</li>
        <li>Compliance with all applicable transport and traffic laws</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">5. Passenger-Specific Terms</h2>
      <p className="mb-4">If you use TravelPlus Passenger, you agree to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide accurate booking information</li>
        <li>Arrive on time for scheduled trips</li>
        <li>Treat drivers and other passengers respectfully</li>
      </ul>
      <p className="mb-4">You may choose to provide an emergency contact. If you do:</p>
      <ul className="list-disc list-inside mb-6">
        <li>You confirm that you have obtained their consent to share their information</li>
        <li>You agree that TravelPlus may contact them in case of emergencies or safety-related incidents</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">6. Bookings, Payments, and Payouts</h2>
      <h3 className="text-xl font-bold mb-2">Bookings (Passengers)</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Bookings are subject to availability</li>
        <li>Prices are displayed before confirmation</li>
        <li>Once booked, you may be subject to cancellation policies</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Payments</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Payments are processed via third-party providers</li>
        <li>TravelPlus does not store full payment details</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Driver Payouts</h3>
      <ul className="list-disc list-inside mb-6">
        <li>Drivers receive an advance (part) payment at the start of a trip</li>
        <li>The remaining balance is paid upon completion of the trip</li>
        <li>Payouts are processed to the bank details provided by the driver</li>
        <li>Payout timing may be affected by banking systems, verification checks, or operational reviews</li>
        <li>TravelPlus reserves the right to withhold, delay, or adjust payouts where there are disputes, suspected fraud, policy violations, or incomplete trips</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">7. Cancellations and Refunds</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Cancellation and refund policies may vary depending on the trip or driver</li>
        <li>TravelPlus may assist in resolving disputes but does not guarantee refunds</li>
        <li>Abuse of cancellation policies may result in account restrictions</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">8. User Conduct</h2>
      <p className="mb-4">You agree not to:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Use the platform for unlawful purposes</li>
        <li>Provide false or misleading information</li>
        <li>Harass, abuse, or harm other users</li>
        <li>Attempt to bypass the platform for off-platform transactions</li>
        <li>Interfere with the operation or security of the Service</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">9. Safety and Responsibility</h2>
      <p className="mb-4">TravelPlus aims to improve safety through:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Driver verification</li>
        <li>Identity checks (e.g., NIN)</li>
        <li>Trip tracking and records</li>
        <li>Optional emergency contact information</li>
      </ul>
      <p className="mb-4">However:</p>
      <ul className="list-disc list-inside mb-6">
        <li>We do not guarantee the conduct of users</li>
        <li>You use the Service at your own risk</li>
        <li>In case of emergencies, contact appropriate local authorities.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">10. Ratings and Feedback</h2>
      <p className="mb-4">Users may leave ratings and reviews. You agree:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Feedback must be honest and not abusive</li>
        <li>TravelPlus may remove inappropriate content</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">11. Intellectual Property</h2>
      <p className="mb-4">All rights in the Service, including software, design, and branding, are owned by TravelPlus or its licensors. You may not:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Copy, modify, or distribute our content</li>
        <li>Reverse engineer or exploit the platform</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">12. Privacy</h2>
      <p className="mb-6">
        Your use of the Service is also governed by our Privacy Policy: <a href="https://travelplus.ng/privacy-policy" className="text-blue-600 hover:underline">https://travelplus.ng/privacy-policy</a>
      </p>

      <h2 className="text-2xl font-bold mb-4">13. Service Availability</h2>
      <p className="mb-4">We do not guarantee:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Continuous or uninterrupted access</li>
        <li>That the Service will be error-free</li>
      </ul>
      <p className="mb-6">We may modify or discontinue features or perform maintenance without notice.</p>

      <h2 className="text-2xl font-bold mb-4">14. Limitation of Liability</h2>
      <p className="mb-4">To the fullest extent permitted by law, TravelPlus is not liable for:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Any indirect, incidental, or consequential damages</li>
        <li>Losses arising from trips, delays, cancellations, or user conduct</li>
        <li>Damage, loss, or theft of personal items</li>
      </ul>
      <p className="mb-6">Our role is limited to providing the platform.</p>

      <h2 className="text-2xl font-bold mb-4">15. Indemnification</h2>
      <p className="mb-6">
        You agree to indemnify and hold TravelPlus harmless from any claims, damages, or liabilities arising from your use of the Service, your violation of these Terms, or your interaction with other users.
      </p>

      <h2 className="text-2xl font-bold mb-4">16. Termination</h2>
      <p className="mb-6">
        We may suspend or terminate your access if you violate these Terms, if required by law, or if your use poses a risk to the platform or other users. You may stop using the Service at any time.
      </p>

      <h2 className="text-2xl font-bold mb-4">17. Governing Law</h2>
      <p className="mb-6">
        These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in the appropriate courts within Nigeria.
      </p>

      <h2 className="text-2xl font-bold mb-4">18. Changes to These Terms</h2>
      <p className="mb-6">
        We may update these Terms from time to time. When we do, we will update the “Last updated” date. Continued use means you accept the changes.
      </p>

      <h2 className="text-2xl font-bold mb-4">19. Contact Us</h2>
      <p className="mb-4">
        If you have questions about these Terms, please contact us.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Email: travelplus@gmail.com</li>
        <li>Phone: 08025734353, 08036400647</li>
        <li>Company / Owner: TravelPlus</li>
        <li>Address: No28, Ali Akilu Road, Opp Kaduna Investment House</li>
      </ul>
    </div>
  );
};

export default TermsOfService;