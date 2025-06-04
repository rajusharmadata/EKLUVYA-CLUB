import { Link } from 'react-router-dom';

const ClubCard = ({ name, description, leaders, image, joinUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-md mx-auto">
      {image && (
        <img
          src={image}
          alt={`${name} Club`}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">{name} Club</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="mb-4">
          <h3 className="text-md font-semibold text-gray-800 mb-1">Leaders:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {leaders.map((leader, index) => (
              <li key={index}>{leader}</li>
            ))}
          </ul>
        </div>

        <Link
          to={joinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default ClubCard;
