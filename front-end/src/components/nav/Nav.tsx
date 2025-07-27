// // src/components/nav/Nav.tsx
// import logo from '../../assets/images/logo.png';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import type { RootState } from '../../app/store';
// import './Nav.css';

// const Nav = () => {
//   const userRole = useSelector((state: RootState) => state.user.user?.role);
//   const userToken = useSelector((state: RootState) => state.user.token);
//   const isAdmin = userRole === 'admin';
//   const isUser = userRole === 'user';

//   // Debug log to check initial state
//   console.log('Nav - userToken:', userToken, 'userRole:', userRole);

//   return (
//     <div className="nav-container">
//       <div className="navbar">
//         <div className="navbar-start">
//           <div className="dropdown">
//             {/* <button className="menu-toggle">☰</button> */}
//             <ul className="dropdown-menu">
//               <li><NavLink to="/">Home</NavLink></li>
//               <li><NavLink to="/about">About</NavLink></li>
//               {userToken && (
//                 <li>
//                   <NavLink to={isAdmin ? '/admin/dashboard' : isUser ? '/user/dashboard' : '/dashboard/analytics'}>
//                     Dashboard
//                   </NavLink>
//                 </li>
//               )}
//               {!userToken && (
//                 <>
//                   <li><NavLink to="/register">Register</NavLink></li>
//                   <li><NavLink to="/login">Login</NavLink></li>
//                 </>
//               )}
//             </ul>
//           </div>
//           <img src={logo} alt="EventMaster Logo" className="logo" />
//         </div>
//         <div className="navbar-center">
//           <ul className="nav-links">
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/about">About</NavLink></li>
//             {userToken && (
//               <li>
//                 <NavLink to={isAdmin ? '/admin/dashboard' : isUser ? '/user/dashboard' : '/dashboard/analytics'}>
//                   Dashboard
//                 </NavLink>
//               </li>
//             )}
//           </ul>
//         </div>
//         <div className="navbar-end">
//           {!userToken && (
//             <div className="auth-links">
//               <NavLink to="/register">Register</NavLink>
//               <NavLink to="/login">Login</NavLink>
//             </div>
//           )}
//           {userToken && <button className="profile-btn">Profile</button>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;




// src/components/nav/Nav.tsx
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import './Nav.css';

const Nav = () => {
  const userRole = useSelector((state: RootState) => state.user.user?.role);
  const userToken = useSelector((state: RootState) => state.user.token);
  const isAdmin = userRole === 'admin';
  const isUser = userRole === 'user';

  // Debug log to check initial state
  console.log('Nav - userToken:', userToken, 'userRole:', userRole);

  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navbar-start">
          <img src={logo} alt="EventMaster Logo" className="logo" />
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            {userToken && (
              <li>
                <NavLink to={isAdmin ? '/admin/dashboard' : isUser ? '/user/dashboard' : '/dashboard/analytics'}>
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {!userToken && (
            <div className="auth-links">
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          )}
          {userToken && <button className="profile-btn">Profile</button>}
        </div>
      </div>
    </div>
  );
};

export default Nav;