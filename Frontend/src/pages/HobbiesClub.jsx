import { Link } from 'react-router-dom';

const HobbiesClub = () => {
  const hobbyGroups = [
    {
      name: 'Photography',
      description: 'Capture moments through your lens',
      image: '/images/photography.jpg',
      leader: 'Chris Miller'
    },
    {
      name: 'Music',
      description: 'Explore different musical instruments and genres',
      image: '/images/music.jpg',
      leader: 'Laura White'
    },
    {
      name: 'Art & Craft',
      description: 'Create beautiful art pieces and crafts',
      image: '/images/art.jpg',
      leader: 'Alex Johnson'
    },
    {
      name: 'Gaming',
      description: 'Competitive and casual gaming sessions',
      image: '/images/gaming.jpg',
      leader: 'Tom Wilson'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-green-500 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Hobbies Club</h1>
            <p className="text-xl mb-8">
              Discover and share your passions with like-minded individuals.
            </p>
            <Link 
              to="https://docs.google.com/forms/d/e/1FAIpQLSd8DpzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRz/viewform"
              target="_blank"
              className="bg-white text-green-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">About Hobbies Club</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-6">
              The Hobbies Club brings together students with diverse interests to share, learn, and grow together.
            </p>
            <h3 className="text-xl font-bold mb-4">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Weekly hobby meetups</li>
              <li>Workshops and demonstrations</li>
              <li>Group projects and collaborations</li>
              <li>Exhibitions and showcases</li>
              <li>Competitions and challenges</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Club Leadership</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-500 font-bold">CM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Chris Miller</h4>
                  <p className="text-sm text-gray-600">President</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-500 font-bold">LW</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Laura White</h4>
                  <p className="text-sm text-gray-600">Vice President</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Hobby Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbyGroups.map((hobby, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={hobby.image} 
                    alt={hobby.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-500 mb-2">{hobby.name}</h3>
                  <p className="text-gray-600 mb-4">{hobby.description}</p>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">Lead by:</span>
                    <span className="font-semibold">{hobby.leader}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Photography Workshop</h3>
            <p className="text-gray-600 mb-4">
              Learn advanced photography techniques and editing skills.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">This Saturday</span>
              <Link 
                to="/events"
                className="text-green-500 hover:text-green-600 font-semibold"
              >
                More Details →
              </Link>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Art Exhibition</h3>
            <p className="text-gray-600 mb-4">
              Showcase your artwork in our monthly exhibition.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Next Weekend</span>
              <Link 
                to="/events"
                className="text-green-500 hover:text-green-600 font-semibold"
              >
                More Details →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">How to Join</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <ol className="list-decimal list-inside text-gray-600 space-y-4">
            <li>Choose your hobby group</li>
            <li>Attend an introductory session</li>
            <li>Participate in activities</li>
            <li>Share your creations</li>
          </ol>
          <div className="text-center mt-8">
            <Link 
              to="https://docs.google.com/forms/d/e/1FAIpQLSd8DpzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRz/viewform"
              target="_blank"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbiesClub;
