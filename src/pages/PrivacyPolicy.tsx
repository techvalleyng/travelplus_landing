import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-inter">
      <h1 className="text-3xl font-bold mb-4">TravelPlus Privacy Policy</h1>
      <p className="mb-6 text-gray-600">Last updated: 21st April 2026</p>
      
      <p className="mb-4">
        This Privacy Policy explains how TravelPlus (“we”, “our”, or “us”) collects, uses, and protects your information when you use our mobile applications and related services (the “Service”).
      </p>
      
      <p className="mb-4">This policy applies to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>TravelPlus Passenger mobile application (for passengers booking trips and deliveries)</li>
        <li>TravelPlus Driver mobile application (for drivers offering trips and managing bookings)</li>
      </ul>
      
      <p className="mb-6">
        By using any TravelPlus app, you agree to this Privacy Policy. If you do not agree, please do not use the Service.
      </p>

      <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        We collect information you provide directly, information collected automatically, and information from third parties.
      </p>

      <h3 className="text-xl font-bold mb-2">1.1 Information You Provide</h3>
      <h4 className="text-lg font-semibold mb-2">Account & Identity Information (Both Apps)</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Name (first and last name)</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Password or authentication credentials (securely stored, not in plain text)</li>
        <li>Profile photo (optional)</li>
        <li>Role (driver or passenger)</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">1.2 Passenger App Data (TravelPlus Passenger)</h3>
      <h4 className="text-lg font-semibold mb-2">Trip & Booking Information</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Pickup and drop-off locations</li>
        <li>Trip dates and times</li>
        <li>Number of seats booked/available</li>
        <li>Package details for deliveries</li>
        <li>Name and phone number of an emergency contact (optional)</li>
      </ul>
      <h4 className="text-lg font-semibold mb-2">Payment Information</h4>
       <ul className="list-disc list-inside mb-4">
        <li>Limited transaction details (e.g. transaction reference)</li>
        <li>Payment processing is handled by third-party providers</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">1.3 Driver App Data (TravelPlus Driver)</h3>
      <h4 className="text-lg font-semibold mb-2">Government ID & Verification Data</h4>
      <ul className="list-disc list-inside mb-4">
        <li>National Identification Number (NIN)</li>
        <li>Uploaded verification documents</li>
        <li>Verification status and related metadata</li>
      </ul>
      <h4 className="text-lg font-semibold mb-2">Driver & Vehicle Information</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Vehicle details (make, model, plate number, color)</li>
        <li>Driver’s license details (number, issue date, expiry date, status)</li>
      </ul>
      <h4 className="text-lg font-semibold mb-2">Bank & Payout Information</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Account holder name</li>
        <li>Account number</li>
        <li>Bank name and code</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">1.4 Shared Trip & Platform Data (Both Apps)</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Trip schedules and routes</li>
        <li>Booking records and passenger lists</li>
        <li>Trip status (e.g. active, completed, cancelled)</li>
        <li>Ratings, feedback, and support communications</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">1.5 Automatically Collected Information (Both Apps)</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Device type, OS, and app version</li>
        <li>IP address and network data</li>
        <li>Usage logs (pages viewed, actions taken, errors)</li>
        <li>Push notification tokens</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">1.6 Information from Third Parties</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Payment providers (transaction status)</li>
        <li>Drivers or passengers (ratings, complaints, trip data)</li>
        <li>Verification and fraud prevention services</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-6">2. How We Use Your Information</h2>
      <p className="mb-4">We use your information to:</p>
      <h3 className="text-xl font-bold mb-2">Provide and Operate the Service</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Create and manage accounts</li>
        <li>Match passengers with drivers</li>
        <li>Enable trip scheduling and bookings</li>
        <li>Manage trips, deliveries, and passenger lists</li>
        <li>Process driver payouts</li>
        <li>Contact a passenger’s designated emergency contact in urgent or safety-related situations</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Safety, Trust, and Verification</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Verify driver identity (including NIN where required)</li>
        <li>Maintain accountability of users on the platform</li>
        <li>Detect and prevent fraud, abuse, or suspicious activity</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Communication</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Send booking confirmations and trip updates</li>
        <li>Send reminders, alerts, and support messages</li>
        <li>Notify you about security updates or policy changes</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Notifications</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Push notifications for trips and bookings</li>
        <li>Alerts and reminders</li>
        <li>Optional marketing messages (you can opt out)</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Improve and Secure the Platform</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Monitor performance and usage</li>
        <li>Debug and fix issues</li>
        <li>Improve features and user experience</li>
      </ul>
      <p className="mb-6">We only use your data for the purposes described in this policy.</p>

      <h2 className="text-2xl font-bold mb-4 mt-6">3. Legal Bases for Processing (Where Applicable)</h2>
      <p className="mb-4">We process your data based on:</p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Contract:</strong> To provide the services you requested</li>
        <li><strong>Legitimate interests:</strong> To improve safety, prevent fraud, and enhance the platform</li>
        <li><strong>Consent:</strong> For notifications, and certain data uses</li>
        <li><strong>Legal obligations:</strong> To comply with applicable laws</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-6">4. How We Share Your Information</h2>
      <p className="mb-4">We do not sell your personal data.</p>
      <h3 className="text-xl font-bold mb-2">Between Users (Drivers & Passengers)</h3>
      <p className="mb-4">To enable trips, we may share:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Phone number (for coordination)</li>
        <li>Pickup/drop-off details</li>
        <li>Trip-related information</li>
      </ul>
      <p className="mb-6">We share only what is necessary.</p>

      <h3 className="text-xl font-bold mb-2">Service Providers</h3>
      <p className="mb-4">We work with third parties for:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Payments and payouts</li>
        <li>Cloud hosting and storage</li>
        <li>Analytics and crash reporting</li>
        <li>SMS, email, and push notifications</li>
      </ul>
      <p className="mb-6">They process data only on our behalf.</p>

      <h3 className="text-xl font-bold mb-2">Legal and Safety Requirements</h3>
      <p className="mb-4">We may disclose data:</p>
      <ul className="list-disc list-inside mb-4">
        <li>To comply with laws or legal requests</li>
        <li>To protect rights, safety, or property</li>
        <li>To investigate fraud or misuse</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Business Transfers</h3>
      <p className="mb-4">Your data may be transferred in case of:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Merger</li>
        <li>Acquisition</li>
        <li>Sale of assets</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-6">5. Data Retention</h2>
      <p className="mb-4">
        We retain data only as long as necessary to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide the Service</li>
        <li>Meet legal obligations</li>
        <li>Resolve disputes</li>
      </ul>
      <p className="mb-6">Data is deleted or anonymized when no longer needed.</p>

      <h2 className="text-2xl font-bold mb-4 mt-6">6. Security</h2>
      <p className="mb-4">We use appropriate safeguards, including:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Encryption in transit (HTTPS)</li>
        <li>Access controls and authentication</li>
        <li>Secure data storage</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-6">7. Your Rights and Choices</h2>
      <p className="mb-4">You may:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Request access to your data</li>
        <li>Request corrections</li>
        <li>Request deletion (subject to legal limits)</li>
        <li>Object to certain processing</li>
        <li>Withdraw consent</li>
      </ul>
      <p className="mb-4">You can also:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Update your profile in the app</li>
        <li>Manage notifications in settings</li>
      </ul>
      <p className="mb-6">To exercise your rights, find contact us information below.</p>

      <h2 className="text-2xl font-bold mb-4 mt-6">8. Children’s Privacy</h2>
      <p className="mb-6">
        TravelPlus is not intended for users under 18. We do not knowingly collect data from children.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-6">9. International Data Transfers</h2>
      <p className="mb-6">
        Your data may be processed in countries outside your own. We ensure appropriate safeguards are in place.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-6">10. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy. Changes will be reflected by updating the “Last updated” date. Continued use means you accept the updated policy.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-6">11. Contact Us</h2>
      <p className="mb-4">If you have questions or requests:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Email: travelplus@gmail.com</li>
        <li>Phone: 08025734353, 08036400647</li>
        <li>Company / Owner: TravelPlus</li>
        <li>Address: No28, Ali Akilu Road, Opp Kaduna Investment House</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;