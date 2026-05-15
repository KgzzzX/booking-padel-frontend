/* =========================
   MainLayout
   Layout utama untuk user side
========================= */

/*
  Outlet:
  digunakan untuk menampilkan isi halaman
  sesuai route aktif
*/
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (

    /*
      min-h-screen
      = tinggi minimal 1 layar penuh

      bg-black
      = background hitam

      text-white
      = warna teks putih
    */
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* =========================
          Navbar Section
      ========================= */}
      <nav className="border-b border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-4">

          <h1 className="text-2xl font-bold">
            Booking Padel
          </h1>

        </div>

      </nav>

      {/* =========================
          Main Content
          Isi halaman akan tampil di sini
      ========================= */}
      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full">

        {/* 
          Outlet:
          menampilkan halaman aktif
          contoh:
          HomePage
          LoginPage
        */}
        <Outlet />

      </main>

      {/* =========================
          Footer Section
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