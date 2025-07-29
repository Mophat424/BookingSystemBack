// import db from "../Drizzle/db";
// import { bookings } from "../Drizzle/schema";
// import { eq } from "drizzle-orm";

// export const createBooking = (data: typeof bookings.$inferInsert) =>
//   db.insert(bookings).values(data).returning().then(([b]) => b);

// // Admin: all bookings
// export const getAllBookings = () => db.select().from(bookings);

// // User: own bookings
// export const getBookingsByUser = (userId: number) =>
//   db.select().from(bookings).where(eq(bookings.user_id, userId));

// // Delete logic
// export const deleteBooking = async (
//   bookingId: number,
//   userId: number,
//   isAdmin: boolean
// ) => {
//   if (isAdmin) {
//     await db.delete(bookings).where(eq(bookings.booking_id, bookingId));
//     return true;
//   }

//   // Check if booking belongs to user
//   const booking = await db
//     .select()
//     .from(bookings)
//     .where(eq(bookings.booking_id, bookingId))
//     .then(([b]) => b);

//   if (!booking || booking.user_id !== userId) {
//     return false;
//   }

//   await db.delete(bookings).where(eq(bookings.booking_id, bookingId));
//   return true;
// };







import db from "../Drizzle/db";
import { bookings, events } from "../Drizzle/schema";
import { eq } from "drizzle-orm";
import { InferSelectModel } from "drizzle-orm"; // For typing

// Define types based on schema
type Booking = InferSelectModel<typeof bookings>;
type Event = InferSelectModel<typeof events>;

export const createBooking = (data: typeof bookings.$inferInsert) =>
  db
    .insert(bookings)
    .values(data)
    .returning()
    .then(async ([booking]) => {
      if (!booking) throw new Error("Booking creation failed");
      if (!booking.event_id) throw new Error("Event ID missing in booking");
      // Fetch associated event details with type safety
      const [event] = await db
        .select({ title: events.title, date: events.date })
        .from(events)
        .where(eq(events.event_id, booking.event_id!)); // Non-null assertion
      return {
        ...booking,
        event: event || { title: "Unknown event", date: null },
      };
    });

// Admin: all bookings
export const getAllBookings = () =>
  db
    .select({
      booking_id: bookings.booking_id,
      user_id: bookings.user_id,
      event_id: bookings.event_id,
      quantity: bookings.quantity,
      total_amount: bookings.total_amount,
      booking_status: bookings.booking_status,
      created_at: bookings.created_at,
      event: {
        title: events.title,
        date: events.date,
      },
    })
    .from(bookings)
    .innerJoin(events, eq(bookings.event_id, events.event_id));

// User: own bookings
export const getBookingsByUser = (userId: number) =>
  db
    .select({
      booking_id: bookings.booking_id,
      user_id: bookings.user_id,
      event_id: bookings.event_id,
      quantity: bookings.quantity,
      total_amount: bookings.total_amount,
      booking_status: bookings.booking_status,
      created_at: bookings.created_at,
      event: {
        title: events.title,
        date: events.date,
      },
    })
    .from(bookings)
    .innerJoin(events, eq(bookings.event_id, events.event_id))
    .where(eq(bookings.user_id, userId));

// Delete logic
export const deleteBooking = async (
  bookingId: number,
  userId: number,
  isAdmin: boolean
) => {
  if (isAdmin) {
    await db.delete(bookings).where(eq(bookings.booking_id, bookingId));
    return true;
  }

  // Check if booking belongs to user
  const [booking] = await db
    .select()
    .from(bookings)
    .where(eq(bookings.booking_id, bookingId))
    .limit(1);

  if (!booking || booking.user_id !== userId) {
    return false;
  }

  await db.delete(bookings).where(eq(bookings.booking_id, bookingId));
  return true;
};