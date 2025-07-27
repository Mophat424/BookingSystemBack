// src/dashboard/AdminDashboard/AdminDashboard.tsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/nav/Nav";
import AdminDrawer from "./aside/AdminDrawer";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  if (user?.role !== "admin") {
    return <div className="access-denied">Access denied. Admins only!</div>;
  }

  return (
    <div className="admin-dashboard">
      <Navbar />
      <div className="admin-header">
        <button
          className="toggle-button"
          onClick={handleDrawerToggle}
        >
          {drawerOpen ? <IoCloseSharp /> : <FaBars />}
        </button>
        <span className="dashboard-title">Welcome to your Admin Dashboard</span>
      </div>
      <div className="admin-body">
        <aside className={`admin-aside ${drawerOpen ? "open" : "closed"}`}>
          <AdminDrawer />
        </aside>
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;