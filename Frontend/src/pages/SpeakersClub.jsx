import { Link } from 'react-router-dom';

const SpeakersClub = () => {
  const events = [
    {
      name: 'Public Speaking Workshop',
      description: 'Learn the art of public speaking with interactive exercises',
      date: 'This Friday',
      time: '5:00 PM'
    },
    {
      name: 'Debate Competition',
      description: 'Participate in a friendly debate competition',
      date: 'Next Saturday',
      time: '10:00 AM'
    },
    {
      name: 'Speech Analysis',
      description: 'Analyze famous speeches and learn from the best',
      date: 'Next Monday',
      time: '6:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-yellow-500 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Speakers Club</h1>
            <p className="text-xl mb-8">
              Find your voice and inspire others through the power of words.
            </p>
            <Link 
              to="https://docs.google.com/forms/d/e/1FAIpQLSd8DpzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRz/viewform"
              target="_blank"
              className="bg-white text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">About Speakers Club</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-6">
              The Speakers Club helps students develop their public speaking and communication skills through regular practice and feedback.
            </p>
            <h3 className="text-xl font-bold mb-4">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Public speaking workshops</li>
              <li>Debate competitions</li>
              <li>Speech analysis sessions</li>
              <li>Mock interviews</li>
              <li>Group discussions</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Club Leadership</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-yellow-500 font-bold">DB</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">David Brown</h4>
                  <p className="text-sm text-gray-600">President</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-yellow-500 font-bold">ED</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Emily Davis</h4>
                  <p className="text-sm text-gray-600">Vice President</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{event.date}</span>
                    <span className="bg-yellow-100 text-yellow-500 px-3 py-1 rounded-full text-sm">
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Tips for Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">1. Prepare Well</h3>
            <p className="text-gray-600 mb-4">
              Research your topic thoroughly and organize your thoughts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">2. Practice</h3>
            <p className="text-gray-600 mb-4">
              Practice your speech multiple times to build confidence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">3. Engage Your Audience</h3>
            <p className="text-gray-600 mb-4">
              Use stories, examples, and audience participation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">4. Handle Nerves</h3>
            <p className="text-gray-600 mb-4">
              Take deep breaths and focus on your message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersClub;
