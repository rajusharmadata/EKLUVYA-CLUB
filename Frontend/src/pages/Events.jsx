import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Hackathon 2025',
      date: '2025-06-10',
      description: '24-hour coding competition with amazing prizes',
      image: '/images/hackathon.jpg',
      location: 'College Auditorium'
    },
    {
      title: 'Robotics Workshop',
      date: '2025-06-15',
      description: 'Learn robotics basics with hands-on projects',
      image: '/images/robotics-workshop.jpg',
      location: 'Engineering Lab'
    },
    {
      title: 'Public Speaking Competition',
      date: '2025-06-20',
      description: 'Showcase your speaking skills in a friendly competition',
      image: '/images/speaking-competition.jpg',
      location: 'Seminar Hall'
    },
    {
      title: 'Art Exhibition',
      date: '2025-06-25',
      description: 'Display your creative work in our monthly exhibition',
      image: '/images/art-exhibition.jpg',
      location: 'Gallery Room'
    }
  ];

  const pastEvents = [
    {
      title: 'Code Wars',
      date: '2025-05-20',
      description: 'Programming competition with 100+ participants',
      image: '/images/code-wars.jpg',
      location: 'College Auditorium'
    },
    {
      title: 'Robotics Challenge',
      date: '2025-05-15',
      description: 'Robot design and building competition',
      image: '/images/robotics-challenge.jpg',
      location: 'Engineering Lab'
    },
    {
      title: 'Debate Championship',
      date: '2025-05-10',
      description: 'Annual debate competition with guest judges',
      image: '/images/debate.jpg',
      location: 'Seminar Hall'
    },
    {
      title: 'Photography Workshop',
      date: '2025-05-05',
      description: 'Learn advanced photography techniques',
      image: '/images/photography-workshop.jpg',
      location: 'Art Studio'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Events</h1>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard 
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
                image={event.image}
                location={event.location}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <EventCard 
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
                image={event.image}
                location={event.location}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Event Calendar</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <iframe
              title="Event Calendar"
              src="https://calendar.google.com/calendar/embed?src=your-calendar-id"
              className="w-full h-96 rounded-lg"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">RSVP to Events</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              To RSVP for any event, please fill out the form below:
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select an event</option>
                  {upcomingEvents.map((event, index) => (
                    <option key={index} value={event.title}>{event.title}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Submit RSVP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
