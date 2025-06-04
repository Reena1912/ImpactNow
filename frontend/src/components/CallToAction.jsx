const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you donate, volunteer, or spread the word, your support helps us create lasting positive change in communities around the world.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Donate Now
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;