import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white hover:text-orange-400 transition-colors tracking-wide"
        >
          ImpactNow
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
            { label: "Events", to: "/events" },
            { label: "Donate", to: "/donate" },
            { label: "Contact", to: "/contact" },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-white font-medium hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 transition-all pb-1"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white hover:text-orange-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col px-4 py-4 space-y-3">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Events", to: "/events" },
              { label: "Donate", to: "/donate" },
              { label: "Contact", to: "/contact" },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="text-white font-medium hover:text-orange-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
