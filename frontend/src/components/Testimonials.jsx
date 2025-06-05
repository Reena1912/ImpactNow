import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The educational resources provided by ImpactNow have completely transformed our school. Our students now have access to quality learning materials and technology.",
      author: "Priya Sharma",
      role: "School Principal, Delhi Public School",
      image: "/images/priya-sharma.jpg" 
    },
    {
      quote: "The clean water project implemented in our village has drastically reduced waterborne diseases. We are eternally grateful for this life-changing initiative.",
      author: "Rajesh Patel",
      role: "Sarpanch, Sundarpur Village",
      image: "/images/rajesh-patel.jpg" 
    },
    {
      quote: "Volunteering with ImpactNow has been the most rewarding experience of my life. I've seen firsthand how dedicated this organization is to creating sustainable change.",
      author: "Ananya Gupta",
      role: "Youth Volunteer, Mumbai",
      image: "/images/ananya-gupta.jpg" 
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2
          className="text-4xl font-semibold text-center text-gray-900 mb-8"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          What Our Partners Say
        </h2>
        <p
          className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Testimonials from leaders and volunteers reflecting the impact of our work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map(({ quote, author, role, image }, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 mr-4">
                  <img
                    src={image}
                    alt={author}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>
                    {author}
                  </p>
                  <p className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {role}
                  </p>
                </div>
              </div>

              <blockquote className="relative text-gray-800 text-base leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                <FaQuoteLeft className="absolute top-0 left-0 text-gray-300 text-2xl" />
                <p className="pl-6 pr-6">{quote}</p>
                <FaQuoteRight className="absolute bottom-0 right-0 text-gray-300 text-2xl" />
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
