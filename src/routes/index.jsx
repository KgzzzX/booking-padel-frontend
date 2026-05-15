// Import routing React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import layout
import MainLayout from "../layouts/MainLayout";

// Import pages
import HomePage from "../pages/user/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import CourtsPage from "../pages/user/CourtsPage";
import BookingPage from "../pages/user/BookingPage";
import AboutPage from "../pages/user/AboutPage";

/* =========================
   AppRoutes
========================= */
function AppRoutes() {
  return (
    <BrowserRouter>

        <Routes>
            <Route element={<MainLayout />}>

            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/courts" element={<CourtsPage />} />

            <Route path="/booking" element={<BookingPage />} />

            <Route path="/about" element={<AboutPage />} />

            </Route>
        </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;