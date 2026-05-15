/* =========================
   Profile Page
========================= */

// Import Icons
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

function ProfilePage() {
  return (

    <section className="py-10">

      {/* =========================
          Page Header
      ========================= */}
      <div className="mb-14">

        {/* Small Badge */}
        <p className="text-green-400 font-semibold mb-4">
          User Profile
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
            {" "}Profile
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
          Manage your personal information,
          account details, and booking activity.
        </p>

      </div>

      {/* =========================
          Profile Layout
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
            Profile Card
        ========================= */}
        <div>

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

            {/* Avatar */}
            <div
              className="
                w-32
                h-32
                rounded-full
                bg-green-500/20
                flex
                items-center
                justify-center
                mx-auto
                mb-6
              "
            >

              <User
                size={60}
                className="text-green-400"
              />

            </div>

            {/* User Name */}
            <h2 className="text-3xl font-bold mb-2">
              Aji Kartiko
            </h2>

            {/* Membership */}
            <p className="text-green-400 mb-8">
              Premium Member
            </p>

            {/* Divider */}
            <div className="border-t border-gray-800 mb-8" />

            {/* Buttons */}
            <div className="space-y-4">

              {/* Edit Profile */}
              <button
                className="
                  w-full
                  bg-green-500
                  hover:bg-green-600
                  transition
                  py-4
                  rounded-2xl
                  font-semibold
                "
              >
                Edit Profile
              </button>

              {/* Change Password */}
              <button
                className="
                  w-full
                  border
                  border-gray-700
                  hover:border-green-400
                  hover:text-green-400
                  transition
                  py-4
                  rounded-2xl
                  font-semibold
                "
              >
                Change Password
              </button>

              {/* Logout */}
              <button
                className="
                  w-full
                  border
                  border-gray-700
                  hover:border-red-400
                  hover:text-red-400
                  transition
                  py-4
                  rounded-2xl
                  font-semibold
                "
              >
                Logout
              </button>

            </div>

          </div>

        </div>

        {/* =========================
            RIGHT SIDE
            Profile Information
        ========================= */}
        <div className="lg:col-span-2">

          <div
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-3xl
              p-8
            "
          >

            {/* Title */}
            <h2 className="text-3xl font-bold mb-10">
              Personal Information
            </h2>

            {/* Info Grid */}
            <div
              className="
                grid
                md:grid-cols-2
                gap-6
              "
            >

              {/* Full Name */}
              <div
                className="
                  bg-black
                  border
                  border-gray-800
                  rounded-2xl
                  p-6
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-4
                  "
                >

                  <User
                    size={20}
                    className="text-green-400"
                  />

                  <span className="font-semibold">
                    Full Name
                  </span>

                </div>

                <p className="text-gray-400">
                  Aji Kartiko
                </p>

              </div>

              {/* Email */}
              <div
                className="
                  bg-black
                  border
                  border-gray-800
                  rounded-2xl
                  p-6
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-4
                  "
                >

                  <Mail
                    size={20}
                    className="text-green-400"
                  />

                  <span className="font-semibold">
                    Email Address
                  </span>

                </div>

                <p className="text-gray-400">
                  aji@example.com
                </p>

              </div>

              {/* Phone */}
              <div
                className="
                  bg-black
                  border
                  border-gray-800
                  rounded-2xl
                  p-6
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-4
                  "
                >

                  <Phone
                    size={20}
                    className="text-green-400"
                  />

                  <span className="font-semibold">
                    Phone Number
                  </span>

                </div>

                <p className="text-gray-400">
                  +62 812 3456 7890
                </p>

              </div>

              {/* Membership */}
              <div
                className="
                  bg-black
                  border
                  border-gray-800
                  rounded-2xl
                  p-6
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-4
                  "
                >

                  <ShieldCheck
                    size={20}
                    className="text-green-400"
                  />

                  <span className="font-semibold">
                    Membership
                  </span>

                </div>

                <p className="text-gray-400">
                  Premium Member
                </p>

              </div>

              {/* Joined Date */}
              <div
                className="
                  bg-black
                  border
                  border-gray-800
                  rounded-2xl
                  p-6
                  md:col-span-2
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-4
                  "
                >

                  <CalendarDays
                    size={20}
                    className="text-green-400"
                  />

                  <span className="font-semibold">
                    Joined Since
                  </span>

                </div>

                <p className="text-gray-400">
                  January 2026
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProfilePage;