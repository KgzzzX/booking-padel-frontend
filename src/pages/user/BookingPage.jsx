/* =========================
   Booking Page
========================= */

// Import React Router
import { Link } from "react-router-dom";

function BookingPage() {
  return (

    <section className="py-10">

      {/* =========================
          Page Header
      ========================= */}
      <div className="mb-14">

        {/* Small Badge */}
        <p className="text-green-400 font-semibold mb-4">
          Booking Reservation
        </p>

        {/* Main Title */}
        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            mb-6
          "
        >
          Complete Your
          <span className="text-green-400">
            {" "}Booking
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            text-gray-400
            text-lg
            max-w-2xl
            leading-relaxed
          "
        >
          Fill in your booking details and
          reserve your favorite premium
          padel court instantly.
        </p>

      </div>

      {/* =========================
          Booking Layout
      ========================= */}
      <div
        className="
          grid
          lg:grid-cols-3
          gap-10
        "
      >

        {/* =========================
            LEFT SIDE
            Booking Form
        ========================= */}
        <div className="lg:col-span-2">

          {/* Form Card */}
          <div
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-3xl
              p-8
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Booking Information
            </h2>

            {/* Booking Form */}
            <form className="space-y-6">

              {/* Full Name */}
              <div>

                <label
                  className="
                    block
                    mb-2
                    font-medium
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="
                    w-full
                    bg-black
                    border
                    border-gray-800
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-green-400
                    transition
                  "
                />

              </div>

              {/* Email */}
              <div>

                <label
                  className="
                    block
                    mb-2
                    font-medium
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    bg-black
                    border
                    border-gray-800
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-green-400
                    transition
                  "
                />

              </div>

              {/* Date & Time */}
              <div
                className="
                  grid
                  md:grid-cols-2
                  gap-6
                "
              >

                {/* Booking Date */}
                <div>

                  <label
                    className="
                      block
                      mb-2
                      font-medium
                    "
                  >
                    Booking Date
                  </label>

                  <input
                    type="date"
                    className="
                      w-full
                      bg-black
                      border
                      border-gray-800
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-green-400
                      transition
                    "
                  />

                </div>

                {/* Booking Time */}
                <div>

                  <label
                    className="
                      block
                      mb-2
                      font-medium
                    "
                  >
                    Booking Time
                  </label>

                  <select
                    className="
                      w-full
                      bg-black
                      border
                      border-gray-800
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-green-400
                      transition
                    "
                  >

                    <option>08:00 - 10:00</option>
                    <option>13:00 - 15:00</option>
                    <option>19:00 - 21:00</option>

                  </select>

                </div>

              </div>

              {/* Players */}
              <div>

                <label
                  className="
                    block
                    mb-2
                    font-medium
                  "
                >
                  Total Players
                </label>

                <input
                  type="number"
                  placeholder="Enter total players"
                  className="
                    w-full
                    bg-black
                    border
                    border-gray-800
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-green-400
                    transition
                  "
                />

              </div>

              {/* Notes */}
              <div>

                <label
                  className="
                    block
                    mb-2
                    font-medium
                  "
                >
                  Additional Notes
                </label>

                <textarea
                  rows="5"
                  placeholder="Write additional notes..."
                  className="
                    w-full
                    bg-black
                    border
                    border-gray-800
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-green-400
                    transition
                    resize-none
                  "
                />

              </div>

            </form>

          </div>

        </div>

        {/* =========================
            RIGHT SIDE
            Booking Summary
        ========================= */}
        <div>

          {/* Summary Card */}
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

            {/* Title */}
            <h2 className="text-3xl font-bold mb-8">
              Booking Summary
            </h2>

            {/* Summary Info */}
            <div className="space-y-5 mb-8">

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Court
                </span>

                <span className="font-semibold">
                  Padel Arena Elite
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Duration
                </span>

                <span className="font-semibold">
                  2 Hours
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Booking Fee
                </span>

                <span className="font-semibold">
                  Rp 300K
                </span>
              </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 my-6" />

            {/* Total */}
            <div
              className="
                flex
                justify-between
                items-center
                mb-8
              "
            >

              <span className="text-xl font-bold">
                Total
              </span>

              <span
                className="
                  text-3xl
                  font-bold
                  text-green-400
                "
              >
                Rp 300K
              </span>

            </div>

            {/* Confirm Button */}
            <Link
              to="/booking-success"
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
              Confirm Booking
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BookingPage;