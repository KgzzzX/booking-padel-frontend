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
import BookingSuccessPage from "../pages/user/BookingSuccessPage";
import MyBookingsPage from "../pages/user/MyBookingsPage";
import ProfilePage from "../pages/user/ProfilePage";

/* Auth Pages */
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

/* Admin Pages */
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminCourtsPage from "../pages/admin/AdminCourtsPage"; // Tambahan Import

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
        path: "/booking-success",
        element: <BookingSuccessPage />,
      },
      {
        path: "/my-bookings",
        element: <MyBookingsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
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

  /*
    ADMIN ROUTES
    TANPA MainLayout
  */
  {
    path: "/admin",
    element: <AdminDashboardPage />, 
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboardPage />,
  },
  {
    path: "/admin/courts",
    element: <AdminCourtsPage />,
  },

]);

export default router;