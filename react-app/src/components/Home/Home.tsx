import eventImage from "../../assets/images/event.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="hero-image-container">
        <img src={eventImage} alt="Event Hero" className="hero-image" />
      </div>

      <h1 className="home-title">Welcome to EventMaster</h1>
      <p className="home-description">
        Simplify your event management and bookings with our user-friendly platform.
      </p>

      <div className="home-features">
        <div className="feature-card">
          <h3>🗓️ Easy Booking</h3>
          <p>Book and manage events quickly from your dashboard.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Access</h3>
          <p>OTP-based authentication to keep your data safe.</p>
        </div>
        <div className="feature-card">
          <h3>📊 Personalized Dashboard</h3>
          <p>Track your event activity and manage your profile.</p>
        </div>
      </div>

      <button className="get-started-button">Get Started</button>
    </div>
  );
};

export default Home;