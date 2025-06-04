import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 w-screen">
      <div className="mx-auto w-full max-w-[100vw] px-4 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ImpactNow</h3>
              <p className="text-gray-300">
                Making a difference in communities around the world through sustainable development, education, and humanitarian aid.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-white">Our Impact</Link></li>
                <li><Link to="/donate" className="text-gray-300 hover:text-white">Donate</Link></li>
                <li><Link to="/events" className="text-gray-300 hover:text-white">Volunteer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-300 not-italic">
                <p>123 Hope Street, Cityville, State</p>
                <p>12345, Country</p>
                <p>(123) 456-7890</p>
                <p>info@impactnow.org</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ImpactNow. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;