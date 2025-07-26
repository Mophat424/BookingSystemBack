// src/pages/About.tsx
import concertImage from "../assets/images/concert (1).jpg"; // ✅ correct



const About = () => {
  return (
    <div className="about-container">
      <div className="about-header" style={{ backgroundImage: `url(${concertImage})` }}>
        <h1 className="about-title">About EventMaster</h1>
      </div>

      <div className="about-content">
        <p className="about-description">
          EventMaster is your all-in-one platform for discovering, booking, and managing events—perfect for attendees and organizers alike. We’ve designed it to be simple, secure, and stress-free, connecting you with the events that matter.
        </p>

        <section className="about-section">
          <h2>For Attendees</h2>
          <p>
            Dive into a diverse lineup of concerts, conferences, workshops, and festivals. Book tickets in moments and access them anytime via your personalized dashboard.
          </p>
        </section>

        <section className="about-section">
          <h2>For Organizers</h2>
          <p>
            Effortlessly create and manage events. Monitor bookings, analyze performance, and engage with attendees—all within a secure, intuitive interface.
          </p>
        </section>

        <section className="about-section">
          <h2>Why EventMaster?</h2>
          <ul className="about-list">
            <li>Lightning-fast ticket booking</li>
            <li>Robust OTP-based security</li>
            <li>Custom dashboards for users and admins</li>
            <li>Sleek, intuitive design</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We’re committed to making event planning and participation a breeze. Whether you’re hosting a gathering or attending a concert, EventMaster is your partner from start to finish.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;