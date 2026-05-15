/* =========================
   Booking Success Page
========================= */

// Import Link
import { Link } from "react-router-dom";

// Import Icon
import { CheckCircle } from "lucide-react";

function BookingSuccessPage() {
  return (

    <section
      className="
        min-h-[80vh]
        flex
        items-center
        justify-center
      "
    >

      {/* =========================
          Success Card
      ========================= */}
      <div
        className="
          w-full
          max-w-3xl
          bg-gray-900
          border
          border-gray-800
          rounded-3xl
          p-12
          text-center
        "
      >

        {/* =========================
            Success Icon
        ========================= */}
        <div
          className="
            w-28
            h-28
            rounded-full
            bg-green-500/20
            flex
            items-center
            justify-center
            mx-auto
            mb-8
          "
        >

          <CheckCircle
            size={60}
            className="text-green-400"
          />

        </div>

        {/* =========================
            Title
        ========================= */}
        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            mb-6
          "
        >
          Booking
          <span className="text-green-400">
            {" "}Successful
          </span>
        </h1>

        {/* =========================
            Description
        ========================= */}
        <p
          className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
            mb-12
          "
        >
          Your court reservation has been successfully
          confirmed. Please arrive 15 minutes before
          your scheduled booking time.
        </p>

        {/* =========================
            Booking Summary
        ========================= */}
        <div
          className="
            bg-black
            border
            border-gray-800
            rounded-3xl
            p-8
            text-left
            mb-10
          "
        >

          <h2 className="text-2xl font-bold mb-6">
            Booking Details
          </h2>

          <div className="space-y-5">

            {/* Court */}
            <div className="flex justify-between">

              <span className="text-gray-400">
                Court
              </span>

              <span className="font-semibold">
                Padel Arena Elite
              </span>

            </div>

            {/* Date */}
            <div className="flex justify-between">

              <span className="text-gray-400">
                Date
              </span>

              <span className="font-semibold">
                15 May 2026
              </span>

            </div>

            {/* Time */}
            <div className="flex justify-between">

              <span className="text-gray-400">
                Time
              </span>

              <span className="font-semibold">
                19:00 - 21:00
              </span>

            </div>

            {/* Players */}
            <div className="flex justify-between">

              <span className="text-gray-400">
                Players
              </span>

              <span className="font-semibold">
                4 Players
              </span>

            </div>

            {/* Total */}
            <div className="flex justify-between">

              <span className="text-gray-400">
                Total Payment
              </span>

              <span
                className="
                  font-bold
                  text-green-400
                "
              >
                Rp 300K
              </span>

            </div>

          </div>

        </div>

        {/* =========================
            Action Buttons
        ========================= */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-5
            justify-center
          "
        >

          {/* Back Home */}
          <Link
            to="/"
            className="
              bg-green-500
              hover:bg-green-600
              transition
              px-8
              py-4
              rounded-2xl
              font-bold
            "
          >
            Back To Home
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
              rounded-2xl
              font-bold
            "
          >
            Explore More Courts
          </Link>

        </div>

      </div>

    </section>
  );
}

export default BookingSuccessPage;