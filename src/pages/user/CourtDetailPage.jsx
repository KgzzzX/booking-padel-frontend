/* =========================
   Court Detail Page
========================= */

// Import React Router
import { Link, useParams } from "react-router-dom";

// Import Image
import heroImage from "../../assets/images/padel-hero.jpg";

function CourtDetailPage() {

  /*
    useParams()
    digunakan untuk mengambil parameter URL

    contoh:
    /courts/Padel Arena Elite
  */
  const { id } = useParams();

  return (

    <section className="py-10">

      {/* =========================
          Court Hero Section
      ========================= */}
      <div
        className="
          relative
          h-[500px]
          rounded-3xl
          overflow-hidden
          mb-12
        "
      >

        {/* Court Image */}
        <img
          src={heroImage}
          alt="Court"
          className="
            w-full
            h-full
            object-cover
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/60
          "
        />

        {/* Hero Content */}
        <div
          className="
            absolute
            bottom-10
            left-10
            z-10
          "
        >

          {/* Small Badge */}
          <p className="text-green-400 font-semibold mb-4">
            Premium Padel Court
          </p>

          {/* Court Name */}
          <h1
            className="
              text-6xl
              font-bold
              mb-4
            "
          >
            {id}
          </h1>

          {/* Location */}
          <p className="text-gray-300 text-lg">
            Bandung, Indonesia
          </p>

        </div>

      </div>

      {/* =========================
          Court Detail Content
      ========================= */}
      <div
        className="
          grid
          lg:grid-cols-3
          gap-10
        "
      >

        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div className="lg:col-span-2">

          {/* Description */}
          <div
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-3xl
              p-8
              mb-8
            "
          >

            <h2 className="text-3xl font-bold mb-6">
              Court Description
            </h2>

            <p
              className="
                text-gray-400
                leading-relaxed
                text-lg
              "
            >
              Experience premium padel courts with
              professional flooring, modern lighting,
              comfortable facilities, and real-time
              booking systems for the best playing
              experience.
            </p>

          </div>

          {/* Facilities */}
          <div
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-3xl
              p-8
            "
          >

            <h2 className="text-3xl font-bold mb-6">
              Facilities
            </h2>

            {/* Facility List */}
            <div
              className="
                grid
                md:grid-cols-2
                gap-4
              "
            >

              <div className="bg-black rounded-2xl p-5">
                Professional Court
              </div>

              <div className="bg-black rounded-2xl p-5">
                Parking Area
              </div>

              <div className="bg-black rounded-2xl p-5">
                Shower Room
              </div>

              <div className="bg-black rounded-2xl p-5">
                Cafe & Lounge
              </div>

            </div>

          </div>

        </div>

        {/* =========================
            RIGHT SIDEBAR
        ========================= */}
        <div>

          {/* Booking Card */}
          <div
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-3xl
              p-8
              sticky
              top-28
            "
          >

            {/* Price */}
            <div className="mb-8">

              <p className="text-gray-400 mb-2">
                Starting From
              </p>

              <h2
                className="
                  text-5xl
                  font-bold
                  text-green-400
                "
              >
                Rp 150K
              </h2>

              <p className="text-gray-400 mt-2">
                /hour
              </p>

            </div>

            {/* Schedule */}
            <div className="mb-8">

              <h3 className="text-xl font-bold mb-4">
                Available Schedule
              </h3>

              <div className="space-y-3">

                <div className="bg-black rounded-xl p-4">
                  08:00 - 10:00
                </div>

                <div className="bg-black rounded-xl p-4">
                  13:00 - 15:00
                </div>

                <div className="bg-black rounded-xl p-4">
                  19:00 - 21:00
                </div>

              </div>

            </div>

            {/* Book Button */}
            <Link
              to="/booking"
              className="
                block
                text-center
                bg-green-500
                hover:bg-green-600
                transition
                py-4
                rounded-2xl
                font-bold
                text-lg
              "
            >
              Book Now
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CourtDetailPage;