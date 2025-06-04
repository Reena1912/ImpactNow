const Events = () => {
  const events = [
    {
      title: "Community Cleanup Day",
      date: "June 15, 2023",
      location: "City Park, Cityville",
      description: "Join us for a day of cleaning up our local park and learning about environmental conservation."
    },
    {
      title: "Education Fundraiser Gala",
      date: "July 22, 2023",
      location: "Grand Ballroom, Downtown",
      description: "An elegant evening to raise funds for our education programs in underserved communities."
    },
    {
      title: "Volunteer Orientation",
      date: "August 5, 2023",
      location: "ImpactNow Headquarters",
      description: "Learn how you can get involved with our various programs and initiatives."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-1"><span className="font-medium">Date:</span> {event.date}</p>
            <p className="text-gray-600 mb-4"><span className="font-medium">Location:</span> {event.location}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;