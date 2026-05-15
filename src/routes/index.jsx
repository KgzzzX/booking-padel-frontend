// Import routing React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import HomePage from "../pages/user/HomePage";
import LoginPage from "../pages/auth/LoginPage";

/* =========================
   AppRoutes
   Tempat semua routing website
========================= */
function AppRoutes() {
  return (

    // Pembungkus utama routing
    <BrowserRouter>

      {/* Kumpulan semua route */}
      <Routes>

        {/* Halaman Home */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman Login */}
        <Route path="/login" element={<LoginPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;