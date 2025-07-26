// src/dashboard/UserDashboard.tsx
// import React from 'react';
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h1>Welcome to Your User Dashboard</h1>
      <p>This is a temporary placeholder for the user dashboard.</p>
      <div className="dashboard-section">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Event 1 - July 28, 2025</li>
          <li>Event 2 - August 1, 2025</li>
          <li>Event 3 - August 5, 2025</li>
        </ul>
      </div>
      <div className="dashboard-section">
        <h2>Account Details</h2>
        <p>Email: user@example.com</p>
        <p>Joined: July 1, 2025</p>
      </div>
      <button className="dummy-button">View Tickets</button>
    </div>
  );
};

export default UserDashboard;