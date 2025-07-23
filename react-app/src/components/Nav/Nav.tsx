// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../Sidebar/sidebar"; // Adjust path if different

// const Nav = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <>
//       <header className="nav-header">
//         <button className="menu-btn" onClick={toggleSidebar}>
//           ☰
//         </button>
//         {/* Removed: <div className="logo">EventMaster</div> */}
//         <nav className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//         </nav>
//       </header>

//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

//       {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
//     </>
//   );
// };

// export default Nav;



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Sidebar from "../Sidebar/sidebar";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { logout } from "../../features/auth/authSlice";

// const Nav = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { user } = useAppSelector((state) => state.auth);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <>
//       <header className="nav-header">
//         <button className="menu-btn" onClick={toggleSidebar}>
//           ☰
//         </button>
//         <nav className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>

//           {user ? (
//             <>
//               <span style={{ marginLeft: '1rem' }}>Hello, {user.name}</span>
//               <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" style={{ marginLeft: '1rem' }}>Login</Link>
//               <Link to="/register" style={{ marginLeft: '1rem' }}>Register</Link>
//             </>
//           )}
//         </nav>
//       </header>

//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

//       {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
//     </>
//   );
// };

// export default Nav;
 

// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Sidebar from "../Sidebar/sidebar";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { logout } from "../../features/auth/authSlice";

// const Nav = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showGreeting, setShowGreeting] = useState(false);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { user } = useAppSelector((state) => state.auth);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   useEffect(() => {
//     if (user) {
//       setShowGreeting(true);
//       const timer = setTimeout(() => setShowGreeting(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [user]);

//   return (
//     <>
//       <header className="nav-header">
//         <button className="menu-btn" onClick={toggleSidebar}>
//           ☰
//         </button>
//         <nav className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>

//           {user ? (
//             <>
//               <span style={{ marginLeft: "1rem" }}>Hello, {user.name}</span>
//               <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" style={{ marginLeft: "1rem" }}>
//                 Login
//               </Link>
//               <Link to="/register" style={{ marginLeft: "1rem" }}>
//                 Register
//               </Link>
//             </>
//           )}
//         </nav>
//       </header>

//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//       {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

//       {showGreeting && user && (
//         <div className="greeting-message">Hello, {user.name}</div>
//       )}
//     </>
//   );
// };

// export default Nav;



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <header className="nav-header">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {user ? (
            <>
              <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ marginLeft: '1rem' }}>Login</Link>
              <Link to="/register" style={{ marginLeft: '1rem' }}>Register</Link>
            </>
          )}
        </nav>
      </header>

      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Nav;
