/* =========================
   MainLayout
   Layout utama untuk user side
========================= */

import { Outlet } from "react-router-dom";

/* Import Navbar Component */
import Navbar from "../components/Navbar";

function MainLayout() {
  return (

    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* =========================
          Main Content
      ========================= */}
      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full">

        {/* Isi halaman aktif */}
        <Outlet />

      </main>

      {/* =========================
          Footer
      ========================= */}
      <footer className="border-t border-gray-800 mt-10">

        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400">

          <p>
            © 2026 Booking Padel. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default MainLayout;