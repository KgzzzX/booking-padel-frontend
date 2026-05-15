/* =========================
   Home Page
========================= */

// Import Link untuk tombol navigasi
import { Link } from "react-router-dom";
// Import gambar hero
import heroImage from "../../assets/images/padel-hero.jpg";

function HomePage() {
  return (

    /* =========================
       Hero Section
    ========================= */
    <section
      className="
        min-h-[80vh]
        flex
        items-center
      "
    >

      {/* Container */}
      <div
        className="
          w-full
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >

        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div>

          {/* Small Badge */}
          <p
            className="
              text-green-400
              font-semibold
              mb-4
            "
          >
            #1 Padel Court Booking Platform
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              mb-6
            "
          >
            Book Your
            <span className="text-green-400">
              {" "}Padel Court
            </span>
            <br />
            Easily & Fast
          </h1>

          {/* Description */}
          <p
            className="
              text-gray-400
              text-lg
              leading-relaxed
              mb-8
              max-w-xl
            "
          >
            Experience premium padel court booking with
            modern facilities, real-time schedules,
            and fast online reservations.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">

            {/* Book Now */}
            <Link
              to="/booking"
              className="
                bg-green-500
                hover:bg-green-600
                transition
                px-8
                py-4
                rounded-xl
                font-semibold
              "
            >
              Book Now
            </Link>

            {/* Explore Courts */}
            <Link
              to="/courts"
              className="
                border
                border-gray-700
                hover:border-green-400
                hover:text-green-400
                transition
                px-8
                py-4
                rounded-xl
                font-semibold
              "
            >
              Explore Courts
            </Link>

          </div>

        </div>

        {/* =========================
            RIGHT CONTENT
            Image / Visual Placeholder
        ========================= */}
        <div
          className="
            bg-gradient-to-br
            from-green-500/20
            to-gray-900
            rounded-3xl
            h-[500px]
            flex
            items-center
            justify-center
            border
            border-gray-800
          "
        >

        <img
            src={heroImage}
            alt="Padel Court"
            className="
            w-full
            h-full
            object-cover
            rounded-3xl
            "
        />

        </div>

      </div>

    </section>
  );
}

export default HomePage;