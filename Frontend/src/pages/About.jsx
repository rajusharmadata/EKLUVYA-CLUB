const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'President',
      image: '/images/team/john.jpg',
      description: 'Computer Science major, passionate about coding and leadership',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      image: '/images/team/jane.jpg',
      description: 'Electronics engineer, robotics enthusiast',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Mike Johnson',
      role: 'Treasurer',
      image: '/images/team/mike.jpg',
      description: 'Business student, finance management',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Wilson',
      role: 'Secretary',
      image: '/images/team/sarah.jpg',
      description: 'Communication major, public speaking expert',
      social: {
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const achievements = [
    {
      title: 'Hackathon Champions',
      description: 'Won first place in National Hackathon 2024',
      icon: '🏆'
    },
    {
      title: 'Robotics Excellence',
      description: 'Best design award in Robotics Competition 2024',
      icon: '🤖'
    },
    {
      title: 'Speaking Excellence',
      description: 'Top team in National Debate Championship',
      icon: '🗣️'
    },
    {
      title: 'Creative Showcase',
      description: 'Best exhibition at College Art Festival',
      icon: '🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            EKLUVYA CLUB is dedicated to fostering a community of passionate students who are interested in coding, robotics, public speaking, and creative hobbies. 
            We aim to provide a platform for learning, growth, and collaboration through various activities and events.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p className="text-gray-600">
                To create a supportive and inclusive environment where students can explore their interests, develop new skills, and build meaningful connections.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Core Values</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Innovation and Creativity</li>
                <li>Collaboration and Teamwork</li>
                <li>Learning and Growth</li>
                <li>Community and Inclusion</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-blue-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">Our History</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">2020 - Foundation</h3>
              <p className="text-gray-600">
                EKLUVYA CLUB was founded by a group of passionate students who wanted to create a space for learning and growth.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">2021 - Expansion</h3>
              <p className="text-gray-600">
                The club expanded to include robotics and public speaking, attracting more members and organizing larger events.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">2022 - National Recognition</h3>
              <p className="text-gray-600">
                The club won its first national competition and established itself as a leading student organization.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">2023 - Diversification</h3>
              <p className="text-gray-600">
                The hobbies club was introduced, making EKLUVYA CLUB a comprehensive platform for all student interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
