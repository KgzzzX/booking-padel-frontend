/* =========================
   Navbar Component
   Navbar utama website
========================= */

// Import Link untuk navigasi halaman
import { Link } from "react-router-dom";

function Navbar() {
  return (

    /* =========================
       Navbar Wrapper
    ========================= */
    <nav className="border-b border-gray-800">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* =========================
            Logo / Brand
        ========================= */}
        <Link
          to="/"
          className="text-3xl font-bold hover:text-green-400 transition"
        >
          Booking Padel
        </Link>

        {/* =========================
            Navigation Menu
        ========================= */}
        <div className="flex items-center gap-8">

          {/* Home */}
          <Link
            to="/"
            className="text-gray-300 hover:text-green-400 transition"
          >
            Home
          </Link>

          {/* Courts */}
          <Link
            to="/courts"
            className="text-gray-300 hover:text-green-400 transition"
          >
            Courts
          </Link>

          {/* Booking */}
          <Link
            to="/booking"
            className="text-gray-300 hover:text-green-400 transition"
          >
            Booking
          </Link>

          {/* About */}
          <Link
            to="/about"
            className="text-gray-300 hover:text-green-400 transition"
          >
            About
          </Link>

        </div>

        {/* =========================
            Login Button
        ========================= */}
        <Link
          to="/login"
          className="
            bg-green-500
            hover:bg-green-600
            transition
            px-5
            py-2
            rounded-lg
            font-semibold
          "
        >
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;