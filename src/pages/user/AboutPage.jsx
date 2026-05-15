/* =========================
   About Page
========================= */

// Import Icons
import {
  Users,
  Trophy,
  Target,
  Heart,
} from "lucide-react";

/* =========================
   Team Members Data
========================= */
const teamMembers = [
  {
    id: 1,
    name: "Ammar Bagas Faturrahman Wantoro",
    nim: "2350081008",
  },
  {
    id: 2,
    name: "Fauzy Faadilah",
    nim: "2350081020",
  },
  {
    id: 3,
    name: "Ricky Gunaldo",
    nim: "2350081028",
  },
  {
    id: 4,
    name: "Aji Kartiko Hartanto",
    nim: "2350081062",
  },
];

function AboutPage() {
  return (

    <section className="py-10">

      {/* =========================
          Hero Section
      ========================= */}
      <div className="mb-20 text-center">

        {/* Badge */}
        <p className="text-green-400 font-semibold mb-4">
          About Booking Padel
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
          Building Modern
          <span className="text-green-400">
            {" "}Padel Booking
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-3xl
            mx-auto
          "
        >
          Booking Padel is a modern web-based
          application designed to simplify padel
          court reservations with a clean interface,
          real-time booking flow, and premium user
          experience.
        </p>

      </div>

      {/* =========================
          Vision Mission Section
      ========================= */}
      <div
        className="
          grid
          md:grid-cols-2
          gap-8
          mb-20
        "
      >

        {/* Vision Card */}
        <div
          className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
          "
        >

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-green-500/20
              flex
              items-center
              justify-center
              mb-6
            "
          >

            <Target
              size={32}
              className="text-green-400"
            />

          </div>

          <h2 className="text-3xl font-bold mb-6">
            Our Vision
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            To create a modern and efficient digital
            platform that helps users easily reserve
            padel courts anytime and anywhere.
          </p>

        </div>

        {/* Mission Card */}
        <div
          className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
          "
        >

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-green-500/20
              flex
              items-center
              justify-center
              mb-6
            "
          >

            <Heart
              size={32}
              className="text-green-400"
            />

          </div>

          <h2 className="text-3xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            Delivering a premium booking experience
            with modern technology, user-friendly
            interfaces, and scalable web solutions.
          </p>

        </div>

      </div>

      {/* =========================
          Team Members Section
      ========================= */}
      <div>

        {/* Section Header */}
        <div className="mb-14 text-center">

          <p className="text-green-400 font-semibold mb-4">
            Development Team
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Meet Our
            <span className="text-green-400">
              {" "}Team
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This project was collaboratively developed
            by students as part of the Web Technology
            final project.
          </p>

        </div>

        {/* Team Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {/* Render Team Members */}
          {teamMembers.map((member) => (

            <div
              key={member.id}
              className="
                bg-gray-900
                border
                border-gray-800
                rounded-3xl
                p-8
                text-center
                hover:border-green-400
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Avatar */}
              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  bg-green-500/20
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-6
                "
              >

                <Users
                  size={40}
                  className="text-green-400"
                />

              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold mb-3">
                {member.name}
              </h3>

              {/* NIM */}
              <p className="text-gray-400">
                NIM: {member.nim}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default AboutPage;