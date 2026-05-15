/* =========================
   Home Page
========================= */

// Import Link untuk navigasi
import { Link } from "react-router-dom";

// Import Hero Image
import heroImage from "../../assets/images/padel-hero.jpg";

// Import Court Card Component
import CourtCard from "../../components/CourtCard";

// Import Court Images
import court1 from "../../assets/images/court1.jpg";
import court2 from "../../assets/images/court2.jpg";
import court3 from "../../assets/images/court3.jpg";

import {CalendarDays, Clock3, Trophy, Headphones,} from "lucide-react";

/* =========================
   Dummy Court Data
   Data sementara sebelum API backend selesai
========================= */
const courts = [
  {
    id: 1,
    image: court1,
    name: "Padel Arena Elite",
    location: "Bandung",
    price: "150.000",
  },
  {
    id: 2,
    image: court2,
    name: "Victory Padel Club",
    location: "Jakarta",
    price: "180.000",
  },
  {
    id: 3,
    image: court3,
    name: "Green Court Center",
    location: "Surabaya",
    price: "200.000",
  },
];

function HomePage() {
  return (

    /*
      Fragment:
      digunakan agar component bisa memiliki
      lebih dari 1 section utama
    */
    <>

      {/* =========================
          HERO SECTION
      ========================= */}
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
              Hero Image
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
              overflow-hidden
            "
          >

            {/* Hero Image */}
            <img
              src={heroImage}
              alt="Padel Court"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

        </div>

      </section>

      {/* =========================
          COURT PREVIEW SECTION
      ========================= */}
      <section className="py-20">

        {/* Section Header */}
        <div className="mb-12">

          <p className="text-green-400 font-semibold mb-3">
            Premium Courts
          </p>

          <h2 className="text-5xl font-bold">
            Explore Our Best Courts
          </h2>

        </div>

        {/* Court Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {/* Render Court Cards */}
          {courts.map((court) => (

            <CourtCard
              key={court.id}
              image={court.image}
              name={court.name}
              location={court.location}
              price={court.price}
            />

          ))}

        </div>

      </section>

    {/* STATISTICS SECTION */}
    <section className="py-20">

    {/* Statistics Grid */}
    <div
        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-8
        "
    >

    {/* Stat Item */}
    <div
        className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            text-center
        "
    >

        <h3 className="text-5xl font-bold text-green-400 mb-3">
            50+
        </h3>

        <p className="text-gray-400">
            Premium Courts
        </p>

    </div>

    {/* Stat Item */}
    <div
        className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            text-center
        "
    >

        <h3 className="text-5xl font-bold text-green-400 mb-3">
            10K+
        </h3>

        <p className="text-gray-400">
            Successful Bookings
        </p>

    </div>

    {/* Stat Item */}
    <div
        className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            text-center
        "
    >

        <h3 className="text-5xl font-bold text-green-400 mb-3">
            5000+
        </h3>

        <p className="text-gray-400">
            Active Players
        </p>

    </div>

    {/* Stat Item */}
    <div
        className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            text-center
        "
    >

        <h3 className="text-5xl font-bold text-green-400 mb-3">
            24/7
        </h3>

        <p className="text-gray-400">
            Online Access
        </p>

    </div>

    </div>

    </section>

    {/* WHY CHOOSE US SECTION */}
    <section className="py-20">

    {/* Section Header */}
    <div className="text-center mb-16">

        <p className="text-green-400 font-semibold mb-3">
            Why Choose Us
        </p>

        <h2 className="text-5xl font-bold">
            Premium Booking Experience
        </h2>

    </div>

    {/* Features Grid */}
    <div
        className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
        "
    >

    {/* Feature Card */}
    <div
        className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            hover:border-green-400
            hover:-translate-y-2
            transition-all
            duration-300
        "
    >

        {/* Icon */}
        <div
            className="
                w-16
                h-16
                rounded-2xl
                bg-green-500/10
                flex
                items-center
                justify-center
                mb-6
            "
        >

        <CalendarDays
          size={32}
          className="text-green-400"
        />

      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4">
        Easy Booking
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed">
        Book your favorite padel court quickly
        with an easy and modern booking system.
      </p>

    </div>

    {/* =========================
        Feature Card
    ========================= */}
    <div
      className="
        bg-gray-900
        border
        border-gray-800
        rounded-3xl
        p-8
        hover:border-green-400
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      {/* Icon */}
      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-green-500/10
          flex
          items-center
          justify-center
          mb-6
        "
      >

        <Clock3
          size={32}
          className="text-green-400"
        />

      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4">
        Real-Time Schedule
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed">
        Access real-time court schedules
        and avoid double bookings instantly.
      </p>

    </div>

    {/* =========================
        Feature Card
    ========================= */}
    <div
      className="
        bg-gray-900
        border
        border-gray-800
        rounded-3xl
        p-8
        hover:border-green-400
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      {/* Icon */}
      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-green-500/10
          flex
          items-center
          justify-center
          mb-6
        "
      >

        <Trophy
          size={32}
          className="text-green-400"
        />

      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4">
        Premium Courts
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed">
        Enjoy high-quality courts with
        professional facilities and comfort.
      </p>

    </div>

    {/* =========================
        Feature Card
    ========================= */}
    <div
      className="
        bg-gray-900
        border
        border-gray-800
        rounded-3xl
        p-8
        hover:border-green-400
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      {/* Icon */}
      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-green-500/10
          flex
          items-center
          justify-center
          mb-6
        "
      >

        <Headphones
          size={32}
          className="text-green-400"
        />

      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4">
        Fast Support
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed">
        Get responsive customer support
        whenever you need assistance.
      </p>

    </div>

  </div>

</section>

{/* FINAL CTA SECTION */}
<section className="py-24">

  {/* CTA Container */}
  <div
    className="
      bg-gradient-to-r
      from-green-500/10
      to-gray-900
      border
      border-gray-800
      rounded-[40px]
      p-16
      text-center
      relative
      overflow-hidden
    "
  >

    {/* Small Badge */}
    <p className="text-green-400 font-semibold mb-4">
      Ready To Play?
    </p>

    {/* Main Heading */}
    <h2
      className="
        text-5xl
        md:text-6xl
        font-bold
        leading-tight
        mb-6
      "
    >
      Book Your Court
      <br />
      Today
    </h2>

    {/* Description */}
    <p
      className="
        text-gray-400
        text-lg
        max-w-2xl
        mx-auto
        leading-relaxed
        mb-10
      "
    >
      Experience modern padel court booking
      with premium facilities, real-time schedules,
      and fast reservations.
    </p>

    {/* CTA Button */}
    <Link
      to="/booking"
      className="
        inline-block
        bg-green-500
        hover:bg-green-600
        hover:scale-105
        transition-all
        duration-300
        px-10
        py-5
        rounded-2xl
        font-bold
        text-lg
      "
    >
      Book Now
    </Link>

  </div>

</section>

    </>
  );
}

export default HomePage;