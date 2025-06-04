import { Link } from 'react-router-dom';

const EventCard = ({ title, date, description, image, location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-blue-600">{title}</h3>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {new Date(date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Location: {location}</span>
          <Link 
            to={`/events/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-blue-600 hover:text-blue-700"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
