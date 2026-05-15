/* =========================
   Login Page
========================= */

// Import Link untuk navigasi
import { Link } from "react-router-dom";

// Import Hero Image
import heroImage from "../../assets/images/padel-hero.jpg";

function LoginPage() {
  return (

    /*
      min-h-screen
      = tinggi full layar
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
            Welcome Back
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
            Book Your
            <span className="text-green-400">
              {" "}Padel Court
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
            Access your account and continue
            booking premium padel courts easily.
          </p>

        </div>

      </div>

      {/* =========================
          RIGHT SIDE
          Login Form
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

          {/* Title */}
          <div className="mb-10">

            <p className="text-green-400 font-semibold mb-3">
              Login Account
            </p>

            <h2 className="text-5xl font-bold mb-4">
              Welcome Back
            </h2>

            <p className="text-gray-400">
              Please login to continue.
            </p>

          </div>

          {/* =========================
              Login Form
          ========================= */}
          <form className="space-y-6">

            {/* Email Input */}
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

            {/* Password Input */}
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

            {/* Login Button */}
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
              Login
            </button>

          </form>

          {/* Register Redirect */}
          <p
            className="
              text-gray-400
              mt-8
              text-center
            "
          >
            Don't have an account?
            <Link
              to="/register"
              className="
                text-green-400
                hover:underline
                ml-2
              "
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </section>
  );
}

export default LoginPage;