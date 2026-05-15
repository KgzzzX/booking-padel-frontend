/* =========================
   Courts Page
========================= */

// Import Court Card Component
import CourtCard from "../../components/CourtCard";

// Import Images
import court1 from "../../assets/images/court1.jpg";
import court2 from "../../assets/images/court2.jpg";
import court3 from "../../assets/images/court3.jpg";

/* =========================
   Dummy Court Data
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
  {
    id: 4,
    image: court1,
    name: "Padel Center Pro",
    location: "Bali",
    price: "220.000",
  },
  {
    id: 5,
    image: court2,
    name: "Urban Padel Club",
    location: "Yogyakarta",
    price: "170.000",
  },
  {
    id: 6,
    image: court3,
    name: "Champion Arena",
    location: "Bekasi",
    price: "190.000",
  },
];

function CourtsPage() {
  return (

    <section className="py-10">

      {/* =========================
          Page Header
      ========================= */}
      <div className="mb-14">

        {/* Small Badge */}
        <p className="text-green-400 font-semibold mb-4">
          Available Courts
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
          Explore Our
          <span className="text-green-400">
            {" "}Padel Courts
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
          Find and book premium padel courts
          with modern facilities and real-time
          schedules.
        </p>

      </div>

      {/* =========================
          Search & Filter Section
      ========================= */}
      <div
        className="
          bg-gray-900
          border
          border-gray-800
          rounded-3xl
          p-6
          mb-12
          grid
          md:grid-cols-3
          gap-4
        "
      >

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search court..."
          className="
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

        {/* Location Filter */}
        <select
          className="
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

          <option>All Locations</option>
          <option>Bandung</option>
          <option>Jakarta</option>
          <option>Surabaya</option>

        </select>

        {/* Search Button */}
        <button
          className="
            bg-green-500
            hover:bg-green-600
            transition
            rounded-2xl
            font-semibold
          "
        >
          Search
        </button>

      </div>

      {/* =========================
          Courts Grid
      ========================= */}
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
  );
}

export default CourtsPage;