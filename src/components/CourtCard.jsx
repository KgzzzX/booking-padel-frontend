/* =========================
   Court Card Component
========================= */

// Import Link untuk navigasi
import { Link } from "react-router-dom";

function CourtCard({
  image,
  name,
  location,
  price,
}) {
  return (

    <div
      className="
        bg-gray-900
        rounded-3xl
        overflow-hidden
        border
        border-gray-800
        hover:border-green-400
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-green-500/10
        transition-all
        duration-300
      "
    >

      {/* =========================
          Court Image
      ========================= */}
      <img
        src={image}
        alt={name}
        className="
          w-full
          h-60
          object-cover
        "
      />

      {/* =========================
          Card Content
      ========================= */}
      <div className="p-6">

        {/* Court Name */}
        <h3 className="text-2xl font-bold mb-2">
          {name}
        </h3>

        {/* Location */}
        <p className="text-gray-400 mb-4">
          {location}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">

          {/* Price */}
          <p className="text-green-400 font-semibold text-lg">
            Rp {price}/hour
          </p>

          {/* Booking Button */}
          <Link
            to="/booking"
            className="
              bg-green-500
              hover:bg-green-600
              transition
              px-5
              py-2
              rounded-xl
              font-semibold
            "
          >
            Book
          </Link>

        </div>

      </div>

    </div>
  );
}

export default CourtCard;