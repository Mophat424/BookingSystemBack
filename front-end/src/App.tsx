// // src/App.tsx
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import AboutPage from './pages/AboutPage';
// import Register from './pages/auth/Register';
// import VerifyUser from './pages/auth/VerifyUser';
// import Login from './pages/auth/Login';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/verify" element={<VerifyUser />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin/dashboard" element={<div>Admin Dashboard</div>} /> {/* Placeholder */}
//         <Route path="/user/dashboard" element={<div>User Dashboard</div>} /> {/* Placeholder */}
//         <Route path="/dashboard/analytics" element={<div>Analytics Dashboard</div>} /> {/* Placeholder */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// // src/App.tsx
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import AboutPage from './pages/AboutPage';
// import Register from './pages/auth/Register';
// import VerifyUser from './pages/auth/VerifyUser';
// import Login from './pages/auth/Login';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/verify" element={<VerifyUser />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin/dashboard" element={<div>Admin Dashboard</div>} /> {/* Placeholder */}
//         <Route path="/user/dashboard" element={<div>User Dashboard</div>} /> {/* Placeholder */}
//         <Route path="/dashboard/analytics" element={<div>Analytics Dashboard</div>} /> {/* Placeholder */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from './features/login/userSlice';
// import type { RootState } from './app/store';

// import LandingPage from './pages/LandingPage';
// import AboutPage from './pages/AboutPage';
// import Register from './pages/auth/Register';
// import VerifyUser from './pages/auth/VerifyUser';
// import Login from './pages/auth/Login';

// import './App.css';

// // Component to check token on mount
// const TokenChecker = () => {
//   const dispatch = useDispatch();
//   const userToken = useSelector((state: RootState) => state.user.token);

//   useEffect(() => {
//     if (userToken) {
//       dispatch(logout()); // Simulate invalidation
//     }
//   }, [dispatch, userToken]);

//   return null;
// };

// function App() {
//   return (
//     <Router>
//       <TokenChecker />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/verify" element={<VerifyUser />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin/dashboard" element={<div>Admin Dashboard</div>} />
//         <Route path="/user/dashboard" element={<div>User Dashboard</div>} />
//         <Route path="/dashboard/analytics" element={<div>Analytics Dashboard</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;







// // src/App.tsx
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from './features/login/userSlice';
// import type { RootState } from './app/store';

// import LandingPage from './pages/LandingPage';
// import AboutPage from './pages/AboutPage';
// import Register from './pages/auth/Register';
// import VerifyUser from './pages/auth/VerifyUser';
// import Login from './pages/auth/Login';
// import AdminDashboard from './dashboard/AdminDashboard/AdminDashboard'; 
// import UserDashboard from './dashboard/UserDashboard/UserDashboard'; 

// import './App.css';

// // Component to check authentication and role
// const AuthChecker = () => {
//   const dispatch = useDispatch();
//   const { token, isAuthenticated } = useSelector((state: RootState) => state.user);


//   useEffect(() => {
//     // Optional: Validate token on mount (e.g., check expiration with JWT decode)
//     // For now, only invalidate if token is missing or invalid (e.g., backend check)
//     if (token && !isAuthenticated) {
//       dispatch(logout()); // Invalidate if token exists but auth failed
//     }
//   }, [dispatch, token, isAuthenticated]);

//   return null;
// };

// const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole?: 'admin' }) => {
//   const { user, isAuthenticated } = useSelector((state: RootState) => state.user);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
//   if (requiredRole && user?.role !== requiredRole) {
//     return <Navigate to="/user/dashboard" />;
//   }
//   return children;
// };

// function App() {
//   return (
//     <Router>
//       <AuthChecker />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/verify" element={<VerifyUser />} />
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/admin/dashboard"
//           element={
//             <ProtectedRoute requiredRole="admin">
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user/dashboard"
//           element={
//             <ProtectedRoute>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard/analytics"
//           element={
//             <ProtectedRoute requiredRole="admin">
//               <div>Analytics Dashboard</div> {/* Replace with actual component */}
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<Navigate to="/" />} /> {/* Fallback route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// src/App.tsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/login/userSlice';
import type { RootState } from './app/store';

import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import Register from './pages/auth/Register';
import VerifyUser from './pages/auth/VerifyUser';
import Login from './pages/auth/Login';
import AdminDashboard from './dashboard/AdminDashboard/AdminDashboard';
import UserDashboard from './dashboard/UserDashboard/UserDashboard';

// import './App.css';

// Component to check authentication and role
const AuthChecker = () => {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // Optional: Validate token on mount (e.g., check expiration with JWT decode)
    // For now, only invalidate if token exists but auth failed
    if (token && !isAuthenticated) {
      dispatch(logout());
    }
  }, [dispatch, token, isAuthenticated]);

  return null;
};

const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole?: 'admin' }) => {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/user/dashboard" />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <AuthChecker />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyUser />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/analytics"
          element={
            <ProtectedRoute requiredRole="admin">
              <div>Analytics Dashboard</div> {/* Replace with actual component */}
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;