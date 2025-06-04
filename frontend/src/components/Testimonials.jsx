const Testimonials = () => {
  const testimonials = [
    {
      quote: "The educational resources provided by ImpactNow have completely transformed our school. Our students now have access to quality learning materials and technology.",
      author: "Priya Sharma",
      role: "School Principal, Delhi Public School",
      image: "/images/priya-sharma.jpg" // Replace with your image path
    },
    {
      quote: "The clean water project implemented in our village has drastically reduced waterborne diseases. We are eternally grateful for this life-changing initiative.",
      author: "Rajesh Patel",
      role: "Sarpanch, Sundarpur Village",
      image: "/images/rajesh-patel.jpg" // Replace with your image path
    },
    {
      quote: "Volunteering with ImpactNow has been the most rewarding experience of my life. I've seen firsthand how dedicated this organization is to creating sustainable change.",
      author: "Ananya Gupta",
      role: "Youth Volunteer, Mumbai",
      image: "/images/ananya-gupta.jpg" // Replace with your image path
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-800" style={{ fontFamily: "'Merriweather', serif" }}>
          Voices of Impact
        </h2>
        <p className="text-xl text-center text-blue-600 max-w-3xl mx-auto mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
          Hear from the communities and individuals whose lives have been transformed through our work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed flex-grow" style={{ fontFamily: "'Inter', sans-serif" }}>
                "{testimonial.quote}"
              </p>
              <div className="border-t border-blue-100 pt-4">
                <p className="font-semibold text-lg text-blue-800" style={{ fontFamily: "'Merriweather', serif" }}>
                  {testimonial.author}
                </p>
                <p className="text-blue-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;