import maps from '../assets/maps.svg';
import call from '../assets/call.svg';
import mail from '../assets/mail.svg';
import { motion } from 'framer-motion';

export default function Helps() {
  const contacts = [
    {
      icon: maps,
      title: 'Our Office',
      details: ['No28, Ali Akilu Road, Opp', 'Kaduna Investment House'],
      alt: 'Location'
    },
    {
      icon: call,
      title: 'Call Us',
      details: ['08025734353', '08036400647'],
      alt: 'Call Us'
    },
    {
      icon: mail,
      title: 'Mail Us',
      details: ['travelplus@gmail.com'],
      alt: 'Mail Us'
    }
  ];

  return (
    <div id='Contact-us' className="bg-gray-50 font-inter py-24">
      <div className='container mx-auto px-4'>
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-green-600 mb-2">How can we help you</h3>
          <h1 className="text-gray-800 font-bold text-4xl">Have a Question?</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img className='w-14 h-14 mb-3' src={contact.icon} alt={contact.alt} />
                <h2 className="text-xl font-bold text-gray-800 mb-1">{contact.title}</h2>
                {contact.details.map((line, i) => (
                  <p key={i} className="text-base text-gray-500">{line}</p>
                ))}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}