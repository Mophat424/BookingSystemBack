
// import { Request, Response } from "express";
// import * as bookingService from "./booking.service";
// import { AuthenticatedRequest } from "../middleware/auth.middleware";

// export const createBooking = async (
//   req: AuthenticatedRequest,
//   res: Response
// ): Promise<void> => {
//   try {
//     const userId = req.user?.id;
//     if (!userId) {
//       res.status(400).json({ message: "User ID missing from token" });
//       return;
//     }
//     const data = { ...req.body, user_id: userId };
//     const newBooking = await bookingService.createBooking(data);
//     res.status(201).json(newBooking);
//   } catch (error) {
//     console.error("Booking creation failed:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const getBookings = async (
//   req: AuthenticatedRequest,
//   res: Response
// ): Promise<void> => {
//   try {
//     console.log("Request user:", req.user); // Debug the decoded user
//     const userId = req.user?.id;
//     if (!userId) {
//       res.status(400).json({ message: "User ID missing from token" });
//       return;
//     }
//     const bookings = req.user?.role === "admin"
//       ? await bookingService.getAllBookings()
//       : await bookingService.getBookingsByUser(userId);
//     res.json(bookings);
//   } catch (error) {
//     console.error("Failed to get bookings:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const deleteBooking = async (
//   req: AuthenticatedRequest,
//   res: Response
// ): Promise<void> => {
//   try {
//     const bookingId = parseInt(req.params.id);
//     const userId = req.user?.id;
//     const isAdmin = req.user?.role === "admin";

//     if (!userId) {
//       res.status(400).json({ message: "User ID missing from token" });
//       return;
//     }

//     const deleted = await bookingService.deleteBooking(bookingId, userId, isAdmin);

//     if (!deleted) {
//       res.status(403).json({ message: "Not authorized to delete this booking" });
//     } else {
//       res.json({ message: "Booking deleted successfully" });
//     }
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };





import { Request, Response } from "express";
import * as bookingService from "./booking.service";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import db from "../Drizzle/db";
import { bookings, events } from "../Drizzle/schema";
import { eq } from "drizzle-orm";

export const createBooking = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(400).json({ message: "User ID missing from token" });
      return;
    }
    const data = { ...req.body, user_id: userId };
    const newBooking = await bookingService.createBooking(data);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Booking creation failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBookings = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    console.log("Request user:", req.user); // Debug the decoded user
    const userId = req.user?.id;
    if (!userId) {
      res.status(400).json({ message: "User ID missing from token" });
      return;
    }
    const bookingsData = req.user?.role === "admin"
      ? await bookingService.getAllBookings()
      : await bookingService.getBookingsByUser(userId);
    res.json(bookingsData);
  } catch (error) {
    console.error("Failed to get bookings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteBooking = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const bookingId = parseInt(req.params.id);
    const userId = req.user?.id;
    const isAdmin = req.user?.role === "admin";

    if (!userId) {
      res.status(400).json({ message: "User ID missing from token" });
      return;
    }

    const deleted = await bookingService.deleteBooking(bookingId, userId, isAdmin);

    if (!deleted) {
      res.status(403).json({ message: "Not authorized to delete this booking" });
    } else {
      res.json({ message: "Booking deleted successfully" });
    }
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};