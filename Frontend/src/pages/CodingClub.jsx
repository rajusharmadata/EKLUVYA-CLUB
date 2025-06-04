import { Link } from 'react-router-dom';
import ClubCard from '../components/ClubCard';

const CodingClub = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'A web application for student management',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/images/project1.jpg'
    },
    {
      name: 'Project 2',
      description: 'Mobile app for event management',
      tech: ['Flutter', 'Firebase'],
      image: '/images/project2.jpg'
    },
    {
      name: 'Project 3',
      description: 'Machine learning model for image recognition',
      tech: ['Python', 'TensorFlow'],
      image: '/images/project3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Coding Club</h1>
            <p className="text-xl mb-8">
              Where code comes to life. Join us to learn, create, and innovate through programming.
            </p>
            <Link 
              to="https://docs.google.com/forms/d/e/1FAIpQLSd8DpzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRz/viewform"
              target="_blank"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">About Coding Club</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-6">
              The Coding Club is a vibrant community of students passionate about programming and technology. 
              We organize regular workshops, coding challenges, and hackathons to help members learn and grow.
            </p>
            <h3 className="text-xl font-bold mb-4">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Weekly coding workshops</li>
              <li>Monthly hackathons</li>
              <li>Technical talks and guest lectures</li>
              <li>Project development groups</li>
              <li>Competitive programming sessions</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Club Leadership</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-gray-600">President</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">JS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-sm text-gray-600">Vice President</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Coding Workshop</h3>
            <p className="text-gray-600 mb-4">
              Learn React.js fundamentals with hands-on exercises and projects.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">This Friday, 7:00 PM</span>
              <Link 
                to="/events"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                More Details →
              </Link>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Hackathon</h3>
            <p className="text-gray-600 mb-4">
              24-hour coding competition with amazing prizes and learning opportunities.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Next Weekend</span>
              <Link 
                to="/events"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                More Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingClub;
