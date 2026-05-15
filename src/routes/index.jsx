// Import routing React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import layout
import MainLayout from "../layouts/MainLayout";

// Import pages
import HomePage from "../pages/user/HomePage";
import LoginPage from "../pages/auth/LoginPage";

/* =========================
   AppRoutes
========================= */
function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =========================
            User Layout
        ========================= */}
        <Route element={<MainLayout />}>

          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;