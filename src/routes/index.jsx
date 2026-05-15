/* =========================
   React Router
========================= */

import {
  createBrowserRouter,
} from "react-router-dom";

/* =========================
   Layouts
========================= */
import MainLayout from "../layouts/MainLayout";

/* =========================
   Pages
========================= */

/* User Pages */
import HomePage from "../pages/user/HomePage";
import CourtsPage from "../pages/user/CourtsPage";
import BookingPage from "../pages/user/BookingPage";
import AboutPage from "../pages/user/AboutPage";
import CourtDetailPage from "../pages/user/CourtDetailPage";

/* Auth Pages */
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

/* =========================
   Router Configuration
========================= */
const router = createBrowserRouter([

  /*
    USER ROUTES
    menggunakan MainLayout
  */
  {
    element: <MainLayout />,
    children: [

      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/courts",
        element: <CourtsPage />,
      },

      {
        path: "/booking",
        element: <BookingPage />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "/courts/:id",
        element: <CourtDetailPage />,
      },

    ],
  },

  /*
    AUTH ROUTES
    TANPA MainLayout
  */
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },

]);

export default router;