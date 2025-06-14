import { Link } from "react-router-dom";
import Programs from "../components/Programs";
import ImpactStats from "../components/ImpactStats";
import CallToAction from "../components/CallToAction";
import CommunityImpactImage from "../assets/Sponsor A Child.jpeg";

const Home = () => {
  return (
    <>
  
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800">
        <main className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 py-20 text-left max-w-screen-xl mx-auto gap-12">
          
          
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl text-white">
              Creating Sustainable Change Through Community Action
            </h1>
            <p className="mb-10 text-base sm:text-lg max-w-xl text-gray-300">
              We partner with communities around the world to tackle pressing challenges through innovative programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" aria-label="Donate Now">
                <button
                  className="bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-400 focus:ring-opacity-75 text-white px-8 py-3 rounded-full transition duration-300"
                  type="button"
                >
                  Donate Now
                </button>
              </Link>
              <Link to="/about" aria-label="Learn More About Us">
                <button
                  className="border border-white hover:border-orange-500 text-white hover:text-orange-500 px-8 py-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-orange-400 focus:ring-opacity-75"
                  type="button"
                >
                  Learn More →
                </button>
              </Link>
            </div>
          </div>

          
         <div className="flex-1 flex justify-center items-center">
  <img
    src={CommunityImpactImage}
    alt="Community Impact"
    className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 w-[350px] sm:w-[400px] md:w-[450px] max-w-full h-auto"
  />
</div>
        </main>
      </div>

      
      <Programs />
      <ImpactStats />
      <CallToAction />
    </>
  );
};

export default Home;
