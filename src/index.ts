import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import cors from "cors";

// Import routes
import userRoutes from "./Users/user.routes";
import eventRoutes from "./Events/event.routes";
import bookingRoutes from "./Bookings/booking.routes";
import paymentRoutes from "./Payments/payment.routes";
import venueRoutes from "./Venues/venue.routes";
import supportTicketRoutes from "./Tickets/supportTicket.routes";
import authRoutes from "./Auth/auth.routes";

// Initialize app
const app: Express = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/bookings", bookingRoutes);
app.use("/events", eventRoutes);
app.use("/payments", paymentRoutes);
app.use("/venues", venueRoutes);
app.use("/tickets", supportTicketRoutes);
app.use("/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 8081;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// Export for testability
export { app, server };
