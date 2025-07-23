// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav/Nav";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import AdminDashboard from "./dashboards/AdminDashboard";
// import UserDashboard from "./dashboards/UserDashboard";
// import Landing from "./pages/Landing";
// import Error from "./components/Error/Error";
// import Dashboard from "./dashboards/Dashboard";


// const App = () => {
//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/landing" element={<Landing />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/dashboard/admin" element={<AdminDashboard />} />
//         <Route path="/dashboard/user" element={<UserDashboard />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="*" element={<Error />} />
  

//     </Router>
//   );
// };

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AdminDashboard from "./dashboards/AdminDashboard";
import UserDashboard from "./dashboards/UserDashboard";
import Landing from "./pages/Landing";
import Error from "./components/Error/Error";
import Dashboard from "./dashboards/Dashboard";
import LoginForm from "./components/Forms/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm"; // Create this if you haven't yet


const App = () => {
  return (
    <Router>
      <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
  </Routes>

    </Router>
  );
};

export default App;


