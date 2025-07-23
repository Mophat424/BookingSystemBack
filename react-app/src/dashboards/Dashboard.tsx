// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Dashboard</h1>
//       <p>Select your dashboard type:</p>
//       <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
//         <Link to="/dashboard/admin" style={buttonStyle}>
//           Admin Dashboard
//         </Link>
//         <Link to="/dashboard/user" style={buttonStyle}>
//           User Dashboard
//         </Link>
//       </div>
//     </div>
//   );
// };

// const buttonStyle: React.CSSProperties = {
//   padding: "0.75rem 1.5rem",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   textDecoration: "none",
//   borderRadius: "5px",
// };

// export default Dashboard;

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user") || "null");

//       if (!user || !user.role) {
//         navigate("/login");
//       } else if (user.role === "admin") {
//         navigate("/dashboard/admin");
//       } else if (user.role === "user") {
//         navigate("/dashboard/user");
//       } else {
//         navigate("/login");
//       }
//     } catch (err) {
//       console.error("Invalid user data", err);
//       navigate("/login");
//     }
//   }, [navigate]);

//   return <p>Redirecting to your dashboard...</p>; // Optional spinner/message
// };

// export default Dashboard;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [showMessage, setShowMessage] = useState(true);
//   const [fadeClass, setFadeClass] = useState("");
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user") || "{}");

//     if (!user || !user.role) {
//       navigate("/login");
//     } else {
//       setUserName(user.name);

//       // Trigger fade out after 2.5s, then hide
//       setTimeout(() => setFadeClass("fade-out"), 2500);
//       setTimeout(() => setShowMessage(false), 3500);

//       if (user.role === "admin") {
//         navigate("/dashboard/admin");
//       } else if (user.role === "user") {
//         navigate("/dashboard/user");
//       } else {
//         navigate("/login");
//       }
//     }
//   }, [navigate]);

//   return (
//     <>
//       {showMessage && (
//         <div className={`fade-message ${fadeClass}`}>
//           Hello, {userName}
//         </div>
//       )}
//     </>
//   );
// };

// export default Dashboard;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(true);
  const [fadeClass, setFadeClass] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!user || !user.role) {
      navigate("/login");
    } else {
      setUserName(user.name);

      // Trigger fade after 2.5 seconds
      setTimeout(() => setFadeClass("fade-out"), 2500);
      setTimeout(() => setShowMessage(false), 3500);

      if (user.role === "admin") {
        navigate("/dashboard/admin");
      } else if (user.role === "user") {
        navigate("/dashboard/user");
      } else {
        navigate("/login");
      }
    }
  }, [navigate]);

  return (
    <>
      {showMessage && (
        <div className={`fade-message ${fadeClass}`}>
          Hello, {userName}
        </div>
      )}
    </>
  );
};

export default Dashboard;
