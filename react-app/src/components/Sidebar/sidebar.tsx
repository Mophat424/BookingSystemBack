// import { Link } from "react-router-dom";

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

// const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
//   return (
//     <div className={`sidebar ${isOpen ? "open" : ""}`}>
//       <nav className="sidebar-links">
//         <Link to="/dashboard" onClick={toggleSidebar}>
//           Dashboard
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;




// import { Link } from "react-router-dom";

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

// const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
//   const user = JSON.parse(localStorage.getItem("user") || "{}");

//   return (
//     <div className={`sidebar ${isOpen ? "open" : ""}`}>
//       <nav className="sidebar-links">
//         <Link to="/" onClick={toggleSidebar}>Home</Link>
//         <Link to="/about" onClick={toggleSidebar}>About</Link>
//         {!user?.role ? (
//           <>
//             <Link to="/login" onClick={toggleSidebar}>Login</Link>
//             <Link to="/register" onClick={toggleSidebar}>Register</Link>
//           </>
//         ) : (
//           <Link
//             to={
//               user.role === "admin"
//                 ? "/dashboard/admin"
//                 : "/dashboard/user"
//             }
//             onClick={toggleSidebar}
//           >
//             Dashboard
//           </Link>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <nav className="sidebar-links">
        <Link to="/dashboard" onClick={toggleSidebar}>
          Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
