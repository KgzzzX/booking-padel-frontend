/* =========================
   Register Page
========================= */

// Import Link untuk navigasi
import { Link } from "react-router-dom";

// Import Hero Image
import heroImage from "../../assets/images/padel-hero.jpg";

function RegisterPage() {
  return (

    /*
      min-h-screen
      = full tinggi layar
    */
    <section
      className="
        min-h-screen
        grid
        md:grid-cols-2
      "
    >

      {/* =========================
          LEFT SIDE
          Branding Section
      ========================= */}
      <div
        className="
          relative
          hidden
          md:flex
          items-center
          justify-center
          overflow-hidden
          border-r
          border-gray-800
        "
      >

        {/* Background Image */}
        <img
          src={heroImage}
          alt="Padel Court"
          className="
            absolute
            inset-0
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
            bg-black/70
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            max-w-lg
            px-10
          "
        >

          {/* Badge */}
          <p className="text-green-400 font-semibold mb-4">
            Join Us Today
          </p>

          {/* Heading */}
          <h1
            className="
              text-6xl
              font-bold
              leading-tight
              mb-6
            "
          >
            Create Your
            <span className="text-green-400">
              {" "}Padel Account
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              text-gray-300
              text-lg
              leading-relaxed
            "
          >
            Register now and enjoy premium
            padel court booking experience.
          </p>

        </div>

      </div>

      {/* =========================
          RIGHT SIDE
          Register Form
      ========================= */}
      <div
        className="
          flex
          items-center
          justify-center
          px-6
          py-12
        "
      >

        {/* Form Container */}
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="mb-10">

            <p className="text-green-400 font-semibold mb-3">
              Create Account
            </p>

            <h2 className="text-5xl font-bold mb-4">
              Register
            </h2>

            <p className="text-gray-400">
              Create your account to start booking.
            </p>

          </div>

          {/* =========================
              Register Form
          ========================= */}
          <form className="space-y-6">

            {/* Full Name */}
            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
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
                  bg-gray-900
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
                  text-sm
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
                  bg-gray-900
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

            {/* Password */}
            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-medium
                "
              >
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="
                  w-full
                  bg-gray-900
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

            {/* Confirm Password */}
            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-medium
                "
              >
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="
                  w-full
                  bg-gray-900
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

            {/* Register Button */}
            <button
              type="submit"
              className="
                w-full
                bg-green-500
                hover:bg-green-600
                transition
                py-4
                rounded-2xl
                font-bold
                text-lg
              "
            >
              Register
            </button>

          </form>

          {/* Login Redirect */}
          <p
            className="
              text-gray-400
              mt-8
              text-center
            "
          >
            Already have an account?
            <Link
              to="/login"
              className="
                text-green-400
                hover:underline
                ml-2
              "
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </section>
  );
}

export default RegisterPage;