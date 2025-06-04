import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EkLUVYA from '../assets/EkLUVYA.png';
import { ChevronRight, Calendar, Users, Award, Zap, MapPin, Clock, ArrowRight, Sparkles, Code, Cpu, Mic, Palette, Star, TrendingUp, Globe, Target } from 'lucide-react';

const Home = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const clubs = [
    {
      name: 'Coding',
      description: 'Master programming languages, build amazing applications, and participate in competitive coding challenges.',
      leaders: ['John Doe', 'Jane Smith'],
      image: '/images/coding-club.jpg',
      joinUrl: '/coding',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      members: 45,
      gradient: 'bg-gradient-to-br from-blue-50 to-purple-50'
    },
    {
      name: 'Robotics',
      description: 'Design, build, and program robots for competitions and real-world applications.',
      leaders: ['Mike Johnson', 'Sarah Wilson'],
      image: '/images/robotics-club.jpg',
      joinUrl: '/robotics',
      icon: Cpu,
      color: 'from-orange-500 to-red-600',
      members: 32,
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
      name: 'Speakers',
      description: 'Develop public speaking skills, boost confidence, and master the art of communication.',
      leaders: ['David Brown', 'Emily Davis'],
      image: '/images/speakers-club.jpg',
      joinUrl: '/speakers',
      icon: Mic,
      color: 'from-green-500 to-teal-600',
      members: 28,
      gradient: 'bg-gradient-to-br from-green-50 to-teal-50'
    },
    {
      name: 'Hobbies',
      description: 'Explore creative pursuits, arts, crafts, and various recreational activities.',
      leaders: ['Chris Miller', 'Laura White'],
      image: '/images/hobbies-club.jpg',
      joinUrl: '/hobbies',
      icon: Palette,
      color: 'from-pink-500 to-purple-600',
      members: 38,
      gradient: 'bg-gradient-to-br from-pink-50 to-purple-50'
    }
  ];

  const stats = [
    {
      number: '+150',
      label: 'Active Members',
      desc: 'Growing community of passionate learners',
      color: 'text-blue-600',
      icon: Users,
      bgColor: 'from-blue-500 to-blue-600'
    },
    {
      number: '+80',
      label: 'Projects Completed',
      desc: 'From apps to robots to presentations',
      color: 'text-green-600',
      icon: Target,
      bgColor: 'from-green-500 to-green-600'
    },
    {
      number: '+35',
      label: 'Events Hosted',
      desc: 'Workshops, competitions, and meetups',
      color: 'text-purple-600',
      icon: Calendar,
      bgColor: 'from-purple-500 to-purple-600'
    },
    {
      number: '+15',
      label: 'Awards Won',
      desc: 'Recognition for excellence and innovation',
      color: 'text-orange-600',
      icon: Award,
      bgColor: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Learn from industry professionals and experienced mentors across diverse fields with cutting-edge curriculum.',
      color: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50'
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Connect with like-minded peers who share your passion for learning and growth in an inclusive environment.',
      color: 'from-blue-400 to-purple-500',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      icon: Globe,
      title: 'Real Impact',
      description: 'Work on meaningful projects that make a difference in your community and beyond with global reach.',
      color: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      content: 'EKLUVYA transformed my career. The coding club gave me real-world experience that landed me my dream job.',
      image: '/images/testimonial-1.jpg',
      rating: 5
    },
    {
      name: 'Alex Rodriguez',
      role: 'Robotics Enthusiast',
      content: 'The robotics club pushed my limits and helped me win the national robotics championship.',
      image: '/images/testimonial-2.jpg',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Public Speaker',
      content: 'From stage fright to confident presentations - the speakers club changed my life completely.',
      image: '/images/testimonial-3.jpg',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-500 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>

          {/* Floating Icons */}
          <div className="absolute top-20 right-20 opacity-10 animate-bounce" style={{animationDelay: '1s'}}>
            <Code className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-32 left-16 opacity-10 animate-bounce" style={{animationDelay: '3s'}}>
            <Cpu className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Content */}
            <div className={`text-white transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                  <div className="absolute inset-0 w-8 h-8 bg-yellow-400 rounded-full blur-md opacity-30 animate-ping"></div>
                </div>
                <span className="text-lg font-semibold text-yellow-400 tracking-wide uppercase">Welcome to the Future</span>
              </div>

              <div className="space-y-6 mb-12">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                  <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-lg">
                    EKLUVYA
                  </span>
                  <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    CLUB
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-gray-200">
                Join our vibrant ecosystem of <span className="text-yellow-400 font-semibold">innovators</span>, <span className="text-pink-400 font-semibold">creators</span>, and <span className="btext-blue-400 font-semibold">dreamers</span>. Where passion meets purpose, and ideas transform into reality.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center">
                    Discover More
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>

                <button className="group px-10 py-5 border-2 border-white/30 backdrop-blur-sm rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center">
                    Join Community
                    <Users className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Logo */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{transitionDelay: '0.3s'}}>
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110"></div>

                {/* Logo Container */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:scale-105 transition-all duration-500">
                  <img
                    src={EkLUVYA}
                    alt="Ekluvya Logo"
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 drop-shadow-2xl object-contain"
                  />
                </div>

                {/* Floating Particles */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-10 left-5 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-20 left-0 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22smallGrid%22 width=%2240%22 height=%2240%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 40 0 L 0 0 0 40%22 fill=%22none%22 stroke=%22%23374151%22 stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23smallGrid)%22/%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-600 font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Experience Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes EKLUVYA the premier destination for ambitious students ready to shape their future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className={`group relative p-10 bg-gradient-to-br ${feature.bgGradient} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100`}>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl" style={{backgroundImage: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`}}></div>

                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${feature.color} shadow-xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-gray-700 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">{feature.description}</p>

                <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                  <span>Learn more</span>
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Clubs Section */}
      <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">Join Our Community</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
              Our Clubs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find your passion and connect with others who share your interests in our diverse community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100`}>
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${club.color} opacity-90`}></div>
                  <div className={`absolute inset-0 ${club.gradient} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <club.icon className="w-20 h-20 text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-white text-sm font-medium">{club.members} members</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {club.name} Club
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{club.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Led by {club.leaders[0]}</span>
                    </div>

                    <Link
                      to={club.joinUrl}
                      className={`group/link inline-flex items-center px-4 py-2 bg-gradient-to-r ${club.color} text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
                    >
                      <span>Join</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Numbers That Speak
            </h2>
            <p className="text-xl text-gray-300">Our community's achievements in numbers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`relative text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/15 ${currentStat === index ? 'ring-2 ring-yellow-400 transform scale-110' : ''}`}>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.bgColor} shadow-lg mb-6`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className={`text-4xl md:text-5xl font-black mb-4 ${currentStat === index ? 'text-yellow-400' : 'text-white'} transition-colors duration-500`}>
                  {stat.number}
                </div>
                <p className="text-xl font-bold text-white mb-2">{stat.label}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{stat.desc}</p>

                {currentStat === index && (
                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-semibold">Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              What Our Members Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="text-gray-900 font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
