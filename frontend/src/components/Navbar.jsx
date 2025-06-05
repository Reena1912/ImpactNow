import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md static top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#0B1D3A] transition-colors tracking-wide"
        >
          ImpactNow
        </Link>

       
        <div className="hidden md:flex space-x-8">
          {[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
            { label: "Our Impact", to: "/impact" },
            { label: "Events", to: "/events" },
            { label: "Donate", to: "/donate" },
            { label: "Contact", to: "/contact" },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-[#0B1D3A] font-medium hover:text-[#ff6a00] border-b-2 border-transparent hover:border-[#ff6a00] transition-all pb-1"
            >
              {label}
            </Link>
          ))}
        </div>

        
        <button
          className="md:hidden text-[#0B1D3A] hover:text-[#ff6a00] focus:outline-none"
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

      
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-4 py-4 space-y-3">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Our Impact", to: "/impact" },
              { label: "Events", to: "/events" },
              { label: "Donate", to: "/donate" },
              { label: "Contact", to: "/contact" },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="text-[#0B1D3A] font-medium hover:text-[#353944] transition-colors"
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
