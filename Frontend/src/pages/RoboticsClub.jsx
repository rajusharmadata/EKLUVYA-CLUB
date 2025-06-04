import { Link } from 'react-router-dom';

const RoboticsClub = () => {
  const projects = [
    {
      name: 'Robotic Arm',
      description: 'A 6-axis robotic arm for industrial automation',
      tech: ['Arduino', 'Servo Motors', 'C++'],
      image: '/images/robotic-arm.jpg'
    },
    {
      name: 'Autonomous Rover',
      description: 'Self-driving rover with obstacle detection',
      tech: ['Raspberry Pi', 'Python', 'Computer Vision'],
      image: '/images/rover.jpg'
    },
    {
      name: 'Line Follower',
      description: 'Precision line following robot',
      tech: ['Microcontroller', 'IR Sensors', 'PID Control'],
      image: '/images/line-follower.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gray-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Robotics Club</h1>
            <p className="text-xl mb-8">
              Building the future with robotics and automation. Join us to create intelligent machines.
            </p>
            <Link 
              to="https://docs.google.com/forms/d/e/1FAIpQLSd8DpzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRzDmVh5ySWpRz/viewform"
              target="_blank"
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">About Robotics Club</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-6">
              The Robotics Club focuses on designing, building, and programming robots. We participate in competitions and work on real-world projects.
            </p>
            <h3 className="text-xl font-bold mb-4">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Robot design and construction</li>
              <li>Programming and control systems</li>
              <li>Robotics competitions</li>
              <li>Machine learning integration</li>
              <li>Workshops and training sessions</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Club Leadership</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-800 font-bold">MJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Mike Johnson</h4>
                  <p className="text-sm text-gray-600">President</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-800 font-bold">SW</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Wilson</h4>
                  <p className="text-sm text-gray-600">Vice President</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Robotics Workshop</h3>
            <p className="text-gray-600 mb-4">
              Learn the basics of robotics with hands-on building and programming.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">This Friday, 6:00 PM</span>
              <Link 
                to="/events"
                className="text-gray-800 hover:text-gray-900 font-semibold"
              >
                More Details →
              </Link>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Robotics Competition</h3>
            <p className="text-gray-600 mb-4">
              Build and test your robots in a friendly competition.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Next Weekend</span>
              <Link 
                to="/events"
                className="text-gray-800 hover:text-gray-900 font-semibold"
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

export default RoboticsClub;
