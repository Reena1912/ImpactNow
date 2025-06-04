const Donate = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Support Our Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
          <p className="text-gray-600 mb-6">
            Your generous contribution helps us continue our vital work in communities around the world. Every dollar makes a difference.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Donation Amount</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[25, 50, 100, 250, 500, 1000].map((amount) => (
                <button key={amount} className="bg-white border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition-colors">
                  ${amount}
                </button>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Other Amount</label>
              <input
                type="number"
                placeholder="$"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Give</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Monthly Giving</h3>
              <p className="text-gray-600 mb-4">
                Become a monthly donor and provide sustained support for our programs.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn More →
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Corporate Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to create meaningful impact while achieving your CSR goals.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn More →
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">In-Kind Donations</h3>
              <p className="text-gray-600 mb-4">
                We accept donations of goods and services that support our programs.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;