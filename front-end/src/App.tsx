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
// import ManageEvents from './dashboard/AdminDashboard/ManageEvents/ManageEvents';
// import ManageBookings from './dashboard/AdminDashboard/ManageBookings/ManageBookings';
// import ManageSupportTickets from './dashboard/AdminDashboard/ManageSupportTickets/ManageSupportTickets'; // New import

// // Component to check authentication and role
// const AuthChecker = () => {
//   const dispatch = useDispatch();
//   const { token, isAuthenticated } = useSelector((state: RootState) => state.user);

//   useEffect(() => {
//     if (token && !isAuthenticated) {
//       dispatch(logout());
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
//         >
//           <Route path="events" element={<ManageEvents />} />
//           <Route path="bookings" element={<ManageBookings />} />
//           <Route path="support-tickets" element={<ManageSupportTickets />} /> {/* New route */}
//         </Route>
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
//               <div>Analytics Dashboard</div>
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<Navigate to="/" />} />
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
// import ManageEvents from './dashboard/AdminDashboard/ManageEvents/ManageEvents';
// import ManageBookings from './dashboard/AdminDashboard/ManageBookings/ManageBookings';
// import ManageSupportTickets from './dashboard/AdminDashboard/ManageSupportTickets/ManageSupportTickets';
// import ManagePayments from './dashboard/AdminDashboard/ManagePayments/ManagePayments'; // New import

// // Component to check authentication and role
// const AuthChecker = () => {
//   const dispatch = useDispatch();
//   const { token, isAuthenticated } = useSelector((state: RootState) => state.user);

//   useEffect(() => {
//     if (token && !isAuthenticated) {
//       dispatch(logout());
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
//         >
//           <Route path="events" element={<ManageEvents />} />
//           <Route path="bookings" element={<ManageBookings />} />
//           <Route path="support-tickets" element={<ManageSupportTickets />} />
//           <Route path="payments" element={<ManagePayments />} /> {/* New route */}
//         </Route>
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
//               <div>Analytics Dashboard</div>
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<Navigate to="/" />} />
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
import ManageEvents from './dashboard/AdminDashboard/ManageEvents/ManageEvents';
import ManageBookings from './dashboard/AdminDashboard/ManageBookings/ManageBookings';
import ManageSupportTickets from './dashboard/AdminDashboard/ManageSupportTickets/ManageSupportTickets';
import ManagePayments from './dashboard/AdminDashboard/ManagePayments/ManagePayments';
import Users from './dashboard/AdminDashboard/ManageUsers/Users'; // New import

// Component to check authentication and role
const AuthChecker = () => {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state: RootState) => state.user);

  useEffect(() => {
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
        >
          <Route path="events" element={<ManageEvents />} />
          <Route path="bookings" element={<ManageBookings />} />
          <Route path="support-tickets" element={<ManageSupportTickets />} />
          <Route path="payments" element={<ManagePayments />} />
          <Route path="users" element={<Users />} /> {/* New route */}
        </Route>
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
              <div>Analytics Dashboard</div>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;