/* =========================
   My Bookings Page
========================= */

// Import Icons
import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

/* =========================
   Dummy Booking Data
========================= */
const bookings = [
  {
    id: 1,
    court: "Padel Arena Elite",
    location: "Bandung",
    date: "15 May 2026",
    time: "19:00 - 21:00",
    status: "Upcoming",
    price: "Rp 300K",
  },
  {
    id: 2,
    court: "Victory Padel Club",
    location: "Jakarta",
    date: "10 May 2026",
    time: "13:00 - 15:00",
    status: "Completed",
    price: "Rp 250K",
  },
  {
    id: 3,
    court: "Green Court Center",
    location: "Surabaya",
    date: "18 May 2026",
    time: "08:00 - 10:00",
    status: "Upcoming",
    price: "Rp 280K",
  },
];

function MyBookingsPage() {
  return (

    <section className="py-10">

      {/* =========================
          Page Header
      ========================= */}
      <div className="mb-14">

        {/* Small Badge */}
        <p className="text-green-400 font-semibold mb-4">
          User Dashboard
        </p>

        {/* Title */}
        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            mb-6
          "
        >
          My
          <span className="text-green-400">
            {" "}Bookings
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
          View your upcoming matches,
          booking history, and reservation
          details in one place.
        </p>

      </div>

      {/* =========================
          Booking Cards
      ========================= */}
      <div className="space-y-8">

        {/* Render Bookings */}
        {bookings.map((booking) => (

          <div
            key={booking.id}
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-3xl
              p-8
              hover:border-green-400
              transition
            "
          >

            {/* =========================
                Top Section
            ========================= */}
            <div
              className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-6
                mb-8
              "
            >

              {/* Left Content */}
              <div>

                {/* Court Name */}
                <h2 className="text-3xl font-bold mb-3">
                  {booking.court}
                </h2>

                {/* Location */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                  "
                >

                  <MapPin size={18} />

                  <span>
                    {booking.location}
                  </span>

                </div>

              </div>

              {/* Status Badge */}
              <div>

                <span
                  className={`
                    px-5
                    py-2
                    rounded-full
                    font-semibold
                    ${
                      booking.status === "Upcoming"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-800 text-gray-300"
                    }
                  `}
                >
                  {booking.status}
                </span>

              </div>

            </div>

            {/* =========================
                Booking Info
            ========================= */}
            <div
              className="
                grid
                md:grid-cols-3
                gap-6
                mb-8
              "
            >

              {/* Date */}
              <div
                className="
                  bg-black
                  border
                  border-gray-800
                  rounded-2xl
                  p-5
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-3
                  "
                >

                  <CalendarDays
                    size={20}
                    className="text-green-400"
                  />

                  <span className="font-semibold">
                    Booking Date
                  </span>

                </div>

                <p className="text-gray-400">
                  {booking.date}
                </p>

              </div>

              {/* Time */}
              <div
                className="
                  bg-black
                  border
                  border-gray-800
                  rounded-2xl
                  p-5
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-3
                  "
                >

                  <Clock3
                    size={20}
                    className="text-green-400"
                  />

                  <span className="font-semibold">
                    Time Schedule
                  </span>

                </div>

                <p className="text-gray-400">
                  {booking.time}
                </p>

              </div>

              {/* Price */}
              <div
                className="
                  bg-black
                  border
                  border-gray-800
                  rounded-2xl
                  p-5
                "
              >

                <p className="text-gray-400 mb-3">
                  Total Payment
                </p>

                <p
                  className="
                    text-3xl
                    font-bold
                    text-green-400
                  "
                >
                  {booking.price}
                </p>

              </div>

            </div>

            {/* =========================
                Action Buttons
            ========================= */}
            <div className="flex gap-4">

              {/* View Detail */}
              <button
                className="
                  bg-green-500
                  hover:bg-green-600
                  transition
                  px-6
                  py-3
                  rounded-2xl
                  font-semibold
                "
              >
                View Details
              </button>

              {/* Cancel Booking */}
              <button
                className="
                  border
                  border-gray-700
                  hover:border-red-400
                  hover:text-red-400
                  transition
                  px-6
                  py-3
                  rounded-2xl
                  font-semibold
                "
              >
                Cancel Booking
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default MyBookingsPage;