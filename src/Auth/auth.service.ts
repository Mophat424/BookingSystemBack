// // src/auth/auth.service.ts
// import db from "../Drizzle/db";
// import { users } from "../Drizzle/schema";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { eq } from "drizzle-orm";
// import { sendWelcomeEmail, sendVerificationEmail } from "./email";
// import dotenv from "dotenv";

// dotenv.config();

// const JWT_SECRET = process.env.JWT_SECRET;

// if (!JWT_SECRET) {
//   throw new Error("JWT_SECRET is not defined in .env");
// }

// // In-memory OTP store (replace with DB in production)
// const otpStore: { [email: string]: { otp: string; expires: number } } = {};

// // Type representing safe user response
// export interface PublicUser {
//   user_id: number;
//   email: string | null; // Allow null based on schema
//   name: string; // Derived, with fallback
//   role: "user" | "admin" | null; // Allow null based on schema default
// }

// // REGISTER USER
// export const registerUser = async (data: {
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
//   contact_phone?: string;
//   address?: string;
//   role?: string;
// }): Promise<{ message: string; token: string; user: PublicUser }> => {
//   const normalizedRole = data.role?.toLowerCase() === "admin" ? "admin" : "user";

//   if (data.role && !["admin", "user"].includes(normalizedRole)) {
//     throw new Error("Invalid role specified");
//   }

//   const hashedPassword = await bcrypt.hash(data.password, 10);

//   const [newUser] = await db
//     .insert(users)
//     .values({
//       first_name: data.first_name,
//       last_name: data.last_name,
//       email: data.email,
//       password: hashedPassword,
//       contact_phone: data.contact_phone ?? "",
//       address: data.address ?? "",
//       role: normalizedRole,
//     } satisfies typeof users.$inferInsert)
//     .returning();

//   if (!newUser?.email || !newUser?.first_name) {
//     throw new Error("User creation failed");
//   }

//   // Generate OTP
//   const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//   otpStore[newUser.email] = {
//     otp,
//     expires: Date.now() + 10 * 60 * 1000, // Expires in 10 minutes
//   };

//   await sendWelcomeEmail(newUser.email, newUser.first_name);
//   await sendVerificationEmail(newUser.email, otp);

//   const token = jwt.sign(
//     { id: newUser.user_id, email: newUser.email, role: newUser.role },
//     JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   return {
//     message: "User registered successfully",
//     token,
//     user: {
//       user_id: newUser.user_id,
//       email: newUser.email,
//       name: `${newUser.first_name} ${newUser.last_name}`.trim() || "Unnamed User", // Fallback for null
//       role: newUser.role,
//     },
//   };
// };

// // LOGIN USER
// export const loginUser = async (
//   email: string,
//   password: string
// ): Promise<{ token: string; user: PublicUser }> => {
//   const [user] = await db.select().from(users).where(eq(users.email, email));

//   if (!user || !user.password) {
//     throw new Error("Invalid email or password");
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     throw new Error("Invalid email or password");
//   }

//   const token = jwt.sign(
//     { id: user.user_id, email: user.email, role: user.role },
//     JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   return {
//     token,
//     user: {
//       user_id: user.user_id,
//       email: user.email, // Removed ! since it can be null
//       name: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim() || "Unnamed User", // Handle null
//       role: user.role,
//     },
//   };
// };

// // VERIFY OTP
// export const verifyOtp = async (
//   email: string,
//   otp: string
// ): Promise<{ token: string; user: PublicUser }> => {
//   const otpData = otpStore[email];
//   if (!otpData || otpData.expires < Date.now() || otpData.otp !== otp) {
//     throw new Error("Invalid or expired OTP");
//   }

//   delete otpStore[email];

//   const [user] = await db.select().from(users).where(eq(users.email, email));
//   if (!user || !user.email || !user.role) {
//     throw new Error("User not found or incomplete data");
//   }

//   const token = jwt.sign(
//     { id: user.user_id, email: user.email, role: user.role },
//     JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   return {
//     token,
//     user: {
//       user_id: user.user_id,
//       email: user.email,
//       name: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim() || "Unnamed User", // Handle null
//       role: user.role,
//     },
//   };
// };








// // src/auth/auth.service.ts
// import db from "../Drizzle/db";
// import { users } from "../Drizzle/schema";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { eq } from "drizzle-orm";
// import { sendWelcomeEmail, sendVerificationEmail } from "./email";
// import dotenv from "dotenv";

// dotenv.config();

// const JWT_SECRET = process.env.JWT_SECRET;

// if (!JWT_SECRET) {
//   throw new Error("JWT_SECRET is not defined in .env");
// }

// // In-memory OTP store (replace with DB in production)
// const otpStore: { [email: string]: { otp: string; expires: number } } = {};

// // Type representing safe user response
// export interface PublicUser {
//   id: number; // Changed from user_id to id
//   email: string | null; // Allow null based on schema
//   name: string; // Derived, with fallback
//   role: "user" | "admin" | null; // Allow null based on schema default
// }

// // REGISTER USER
// export const registerUser = async (data: {
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
//   contact_phone?: string;
//   address?: string;
//   role?: string;
// }): Promise<{ message: string; token: string; user: PublicUser }> => {
//   const normalizedRole = data.role?.toLowerCase() === "admin" ? "admin" : "user";

//   if (data.role && !["admin", "user"].includes(normalizedRole)) {
//     throw new Error("Invalid role specified");
//   }

//   const hashedPassword = await bcrypt.hash(data.password, 10);

//   const [newUser] = await db
//     .insert(users)
//     .values({
//       first_name: data.first_name,
//       last_name: data.last_name,
//       email: data.email,
//       password: hashedPassword,
//       contact_phone: data.contact_phone ?? "",
//       address: data.address ?? "",
//       role: normalizedRole,
//     } satisfies typeof users.$inferInsert)
//     .returning();

//   if (!newUser?.email || !newUser?.first_name) {
//     throw new Error("User creation failed");
//   }

//   // Generate OTP
//   const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//   otpStore[newUser.email] = {
//     otp,
//     expires: Date.now() + 10 * 60 * 1000, // Expires in 10 minutes
//   };

//   await sendWelcomeEmail(newUser.email, newUser.first_name);
//   await sendVerificationEmail(newUser.email, otp);

//   const token = jwt.sign(
//     { id: newUser.user_id, email: newUser.email, role: newUser.role },
//     JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   return {
//     message: "User registered successfully",
//     token,
//     user: {
//       id: newUser.user_id, // Changed to id
//       email: newUser.email,
//       name: `${newUser.first_name} ${newUser.last_name}`.trim() || "Unnamed User",
//       role: newUser.role,
//     },
//   };
// };

// // LOGIN USER
// export const loginUser = async (
//   email: string,
//   password: string
// ): Promise<{ token: string; user: PublicUser }> => {
//   const [user] = await db.select().from(users).where(eq(users.email, email));

//   if (!user || !user.password) {
//     throw new Error("Invalid email or password");
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     throw new Error("Invalid email or password");
//   }

//   const token = jwt.sign(
//     { id: user.user_id, email: user.email, role: user.role },
//     JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   return {
//     token,
//     user: {
//       id: user.user_id, // Changed to id
//       email: user.email,
//       name: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim() || "Unnamed User",
//       role: user.role,
//     },
//   };


  
// };

// // VERIFY OTP
// export const verifyOtp = async (
//   email: string,
//   otp: string
// ): Promise<{ token: string; user: PublicUser }> => {
//   const otpData = otpStore[email];
//   if (!otpData || otpData.expires < Date.now() || otpData.otp !== otp) {
//     throw new Error("Invalid or expired OTP");
//   }

//   delete otpStore[email];

//   const [user] = await db.select().from(users).where(eq(users.email, email));
//   if (!user || !user.email || !user.role) {
//     throw new Error("User not found or incomplete data");
//   }

//   const token = jwt.sign(
//     { id: user.user_id, email: user.email, role: user.role },
//     JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   return {
//     token,
//     user: {
//       id: user.user_id, // Changed to id
//       email: user.email,
//       name: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim() || "Unnamed User",
//       role: user.role,
//     },
//   };
// };












// src/auth/auth.service.ts
import db from "../Drizzle/db";
import { users } from "../Drizzle/schema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { eq } from "drizzle-orm";
import { sendWelcomeEmail, sendVerificationEmail } from "./email";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env");
}

// In-memory OTP store (replace with DB in production)
const otpStore: { [email: string]: { otp: string; expires: number } } = {};

// Type representing safe user response
export interface PublicUser {
  id: number;
  email: string | null;
  name: string;
  role: "user" | "admin" | null;
}

// REGISTER USER
export const registerUser = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  contact_phone?: string;
  address?: string;
  role?: string;
}): Promise<{ message: string; token: string; user: PublicUser }> => {
  // const normalizedRole = data.role?.toLowerCase() === "admin" ? "admin" : "user";
  const normalizedRole =
  data.role && ["admin", "user"].includes(data.role.toLowerCase())
    ? data.role.toLowerCase() as "admin" | "user"
    : "user";

  if (data.role && !["admin", "user"].includes(normalizedRole)) {
    throw new Error("Invalid role specified");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const [newUser] = await db
    .insert(users)
    .values({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: hashedPassword,
      contact_phone: data.contact_phone ?? "",
      address: data.address ?? "",
      role: normalizedRole,
    } satisfies typeof users.$inferInsert)
    .returning();

  if (!newUser?.email || !newUser?.first_name) {
    throw new Error("User creation failed");
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[newUser.email] = {
    otp,
    expires: Date.now() + 10 * 60 * 1000,
  };

  await sendWelcomeEmail(newUser.email, newUser.first_name);
  await sendVerificationEmail(newUser.email, otp);

  const token = jwt.sign(
    { id: newUser.user_id, email: newUser.email, role: newUser.role },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    message: "User registered successfully",
    token,
    user: {
      id: newUser.user_id,
      email: newUser.email,
      name: `${newUser.first_name} ${newUser.last_name}`.trim() || "Unnamed User",
      role: newUser.role,
    },
  };
};

// LOGIN USER
export const loginUser = async (
  email: string,
  password: string
): Promise<{ token: string; user: PublicUser }> => {
  const [user] = await db.select().from(users).where(eq(users.email, email));

  if (!user || !user.password) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { id: user.user_id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    user: {
      id: user.user_id,
      email: user.email,
      name: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim() || "Unnamed User",
      role: user.role,
    },
  };
};

// VERIFY OTP
export const verifyOtp = async (
  email: string,
  otp: string
): Promise<{ token: string; user: PublicUser }> => {
  const otpData = otpStore[email];
  if (!otpData || otpData.expires < Date.now() || otpData.otp !== otp) {
    throw new Error("Invalid or expired OTP");
  }

  delete otpStore[email];

  const [user] = await db.select().from(users).where(eq(users.email, email));
  if (!user || !user.email || !user.role) {
    throw new Error("User not found or incomplete data");
  }

  const token = jwt.sign(
    { id: user.user_id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    user: {
      id: user.user_id,
      email: user.email,
      name: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim() || "Unnamed User",
      role: user.role,
    },
  };
};


export const updateUser = async (
  userId: number,
  data: { email?: string; currentPassword?: string; newPassword?: string }
): Promise<{ message: string; user: PublicUser }> => {
  const [user] = await db.select().from(users).where(eq(users.user_id, userId));

  if (!user) throw new Error("User not found");

  let updatedEmail = user.email;
  let didUpdateSomething = false;

  // Email update
  if (data.email && data.email !== user.email) {
    await db.update(users).set({ email: data.email }).where(eq(users.user_id, userId));
    updatedEmail = data.email;
    didUpdateSomething = true;
  }

  // Password update
  if (data.newPassword) {
    if (!data.currentPassword) throw new Error("Current password is required");
    if (!user.password) throw new Error("User does not have a password set");

    const isMatch = await bcrypt.compare(data.currentPassword, user.password);
    if (!isMatch) throw new Error("Invalid current password");

    const hashedPassword = await bcrypt.hash(data.newPassword, 10);
    await db.update(users).set({ password: hashedPassword }).where(eq(users.user_id, userId));
    didUpdateSomething = true;
  }

  if (!didUpdateSomething) {
    throw new Error("No valid fields provided to update");
  }

  return {
    message: "User updated successfully",
    user: {
      id: user.user_id,
      email: updatedEmail,
      name: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim() || "Unnamed User",
      role: user.role,
    },
  };
};
