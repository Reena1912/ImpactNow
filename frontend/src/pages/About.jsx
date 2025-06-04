const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            ImpactNow is dedicated to creating sustainable change in communities around the world through targeted programs in education, healthcare, and environmental conservation.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where every community has access to the resources and opportunities they need to thrive, regardless of their circumstances.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2010, ImpactNow began as a small group of volunteers committed to making a difference. Over the years, we've grown into an international organization with projects in over 75 communities worldwide.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-600">
            Our team consists of dedicated professionals and volunteers from diverse backgrounds, all united by a common goal of creating positive, lasting change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;