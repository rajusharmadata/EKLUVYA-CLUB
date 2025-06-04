import { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      name: 'Coding Club',
      slug: 'coding',
      color: 'from-blue-500 to-purple-600',
      images: [
        '/images/coding-1.jpg',
        '/images/coding-2.jpg',
        '/images/coding-3.jpg',
        '/images/coding-4.jpg'
      ]
    },
    {
      name: 'Robotics Club',
      slug: 'robotics',
      color: 'from-green-500 to-teal-600',
      images: [
        '/images/robotics-1.jpg',
        '/images/robotics-2.jpg',
        '/images/robotics-3.jpg',
        '/images/robotics-4.jpg'
      ]
    },
    {
      name: 'Speakers Club',
      slug: 'speakers',
      color: 'from-orange-500 to-red-600',
      images: [
        '/images/speakers-1.jpg',
        '/images/speakers-2.jpg',
        '/images/speakers-3.jpg',
        '/images/speakers-4.jpg'
      ]
    },
    {
      name: 'Hobbies Club',
      slug: 'hobbies',
      color: 'from-pink-500 to-purple-600',
      images: [
        '/images/hobbies-1.jpg',
        '/images/hobbies-2.jpg',
        '/images/hobbies-3.jpg',
        '/images/hobbies-4.jpg'
      ]
    }
  ];

  const videos = [
    {
      id: 'example1',
      title: 'Hackathon 2025',
      description: 'Highlights from our annual hackathon event',
      thumbnail: '/images/video-thumb-1.jpg'
    },
    {
      id: 'example2',
      title: 'Robotics Workshop',
      description: 'Introduction to robotics session',
      thumbnail: '/images/video-thumb-2.jpg'
    },
    {
      id: 'example3',
      title: 'Coding Bootcamp',
      description: 'Intensive programming workshop',
      thumbnail: '/images/video-thumb-3.jpg'
    }
  ];

  const highlights = [
    {
      title: 'Code Wars',
      description: 'Programming competition winners',
      image: '/images/highlight-1.jpg',
      category: 'coding'
    },
    {
      title: 'Robotics Challenge',
      description: 'Robot design competition',
      image: '/images/highlight-2.jpg',
      category: 'robotics'
    },
    {
      title: 'Debate Championship',
      description: 'Annual debate competition',
      image: '/images/highlight-3.jpg',
      category: 'speakers'
    },
    {
      title: 'Art Exhibition',
      description: 'Monthly art showcase',
      image: '/images/highlight-4.jpg',
      category: 'hobbies'
    },
    {
      title: 'Tech Talk',
      description: 'Industry expert sessions',
      image: '/images/highlight-5.jpg',
      category: 'speakers'
    },
    {
      title: 'Innovation Fair',
      description: 'Student project showcase',
      image: '/images/highlight-6.jpg',
      category: 'coding'
    }
  ];

  const filteredHighlights = activeCategory === 'all' 
    ? highlights 
    : highlights.filter(highlight => highlight.category === activeCategory);

  const openLightbox = (image, title) => {
    setSelectedImage({ src: image, title });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Explore our vibrant community through moments captured in time
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Club Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Club Activities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-3 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">{category.name}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer group/image"
                        onClick={() => openLightbox(image, `${category.name} - Image ${imgIndex + 1}`)}
                      >
                        <img 
                          src={image} 
                          alt={`${category.name} event`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                            <Eye className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Video Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{video.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Highlights with Filter */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Photo Highlights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mb-8"></div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === 'all' 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.slug 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(highlight.image, highlight.title)}
              >
                <div className="relative aspect-square bg-gray-200 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <Eye className="w-6 h-6" />
                        <span className="text-sm font-medium opacity-90">View Full Size</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {selectedImage.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;