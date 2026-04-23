import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    { id: 'info-collect', title: '1. Information We Collect' },
    { id: 'how-we-use', title: '2. How We Use Your Information' },
    { id: 'legal-bases', title: '3. Legal Bases for Processing' },
    { id: 'how-we-share', title: '4. How We Share Your Information' },
    { id: 'data-retention', title: '5. Data Retention' },
    { id: 'security', title: '6. Security' },
    { id: 'your-rights', title: '7. Your Rights and Choices' },
    { id: 'childrens-privacy', title: '8. Children’s Privacy' },
    { id: 'international-transfers', title: '9. International Data Transfers' },
    { id: 'changes-policy', title: '10. Changes to This Policy' },
    { id: 'contact-us', title: '11. Contact Us' },
  ];

  return (
    <div className="bg-gray-50 font-inter py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">TravelPlus Privacy Policy</h1>
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
            <section id="info-collect">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Information We Collect</h2>
              <p className="mb-4 text-gray-600">We collect information you provide directly, information collected automatically, and information from third parties.</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">1.1 Information You Provide</h3>
                  <p className="text-gray-600">Account & Identity Information (Both Apps): Name, email, phone, password, photo, role.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">1.2 Passenger App Data</h3>
                  <p className="text-gray-600">Trip & Booking Information: Locations, dates, times, seats, package details, emergency contact.</p>
                  <p className="text-gray-600">Payment Information: Limited transaction details.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">1.3 Driver App Data</h3>
                  <p className="text-gray-600">Government ID & Verification Data: NIN, documents, status.</p>
                  <p className="text-gray-600">Driver & Vehicle Information: Vehicle details, license details.</p>
                  <p className="text-gray-600">Bank & Payout Information: Account details.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">1.4 Shared Trip & Platform Data</h3>
                  <p className="text-gray-600">Schedules, records, status, ratings, feedback.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">1.5 Automatically Collected Information</h3>
                  <p className="text-gray-600">Device type, OS, IP address, usage logs, push tokens.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">1.6 Information from Third Parties</h3>
                  <p className="text-gray-600">Payment providers, other users, verification services.</p>
                </div>
              </div>
            </section>

            <section id="how-we-use">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">2. How We Use Your Information</h2>
              <p className="mb-4 text-gray-600">We use your information to provide and operate the service, ensure safety and trust, communicate with you, and improve the platform.</p>
            </section>

            <section id="legal-bases">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">3. Legal Bases for Processing</h2>
              <p className="text-gray-600">We process your data based on contract, legitimate interests, consent, and legal obligations.</p>
            </section>

            <section id="how-we-share">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">4. How We Share Your Information</h2>
              <p className="text-gray-600">We do not sell your data. We share it between users, with service providers, for legal reasons, and in case of business transfers.</p>
            </section>

            <section id="data-retention">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Data Retention</h2>
              <p className="text-gray-600">We retain data as long as necessary to provide the service, meet legal obligations, and resolve disputes.</p>
            </section>

            <section id="security">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Security</h2>
              <p className="text-gray-600">We use appropriate safeguards like encryption, access controls, and secure storage.</p>
            </section>

            <section id="your-rights">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Your Rights and Choices</h2>
              <p className="text-gray-600">You can request access, correction, or deletion of your data, object to processing, and withdraw consent.</p>
            </section>

            <section id="childrens-privacy">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Children’s Privacy</h2>
              <p className="text-gray-600">Our service is not for users under 18. We do not knowingly collect data from children.</p>
            </section>

            <section id="international-transfers">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">9. International Data Transfers</h2>
              <p className="text-gray-600">Your data may be processed in other countries with appropriate safeguards.</p>
            </section>

            <section id="changes-policy">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">10. Changes to This Policy</h2>
              <p className="text-gray-600">We may update this policy. Continued use means you accept the changes.</p>
            </section>

            <section id="contact-us">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">11. Contact Us</h2>
              <p className="text-gray-600 mb-4">If you have questions or requests:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Email: travelplus@gmail.com</li>
                <li>Phone: 08025734353, 08036400647</li>
                <li>Company / Owner: TravelPlus</li>
                <li>Address: No28, Ali Akilu Road, Opp Kaduna Investment House</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;