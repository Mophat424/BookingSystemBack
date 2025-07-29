import { useState } from "react";
import { useAppSelector } from "../../../app/store";
import "../UserDashboard.css";

const ProfileManagement = () => {
  const { user, token } = useAppSelector((state) => state.user) as { user: { id?: number; email?: string }; token: string | null };
  const [profile, setProfile] = useState({ email: user.email || "", newPassword: "" });
  const [message, setMessage] = useState<string | null>(null);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8081/Users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
      });
      if (!response.ok) throw new Error("Update failed");
      setMessage("Profile updated successfully!");
    } catch {
  setMessage("Update failed. Please try again.");
}

  };

  return (
    <div className="user-dashboard-card">
      <h2>Profile Management</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
      </div>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={profile.newPassword}
          onChange={(e) => setProfile({ ...profile, newPassword: e.target.value })}
        />
      </div>
      <button className="user-dashboard-btn user-dashboard-btn-primary" onClick={handleUpdate}>
        Update Profile
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProfileManagement;