// import express from "express";
// import {
//   getAllUsers,
//   getProfile,
//   updateProfile,
//   deleteUser,
// } from "./user.controller";
// import { authenticate } from "../middleware/auth.middleware";

// const router = express.Router();

// // Authenticated user: View their own profile
// router.get("/me", authenticate, getProfile);

// // Authenticated user: Update their own profile
// router.put("/me", authenticate, updateProfile);

// // Admin only: View all users
// router.get("/", authenticate, getAllUsers);

// // Admin only: Delete a user by ID
// router.delete("/:id", authenticate, deleteUser);

// export default router;



import express, { Response, Request, NextFunction } from "express";
import {
  getAllUsers,
  getProfile,
  updateProfile,
  deleteUser,
  AuthenticatedRequest,
} from "./user.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

// Authenticated user: View their own profile
router.get("/me", authenticate, getProfile);

// Authenticated user: Update their own profile
router.put("/me", authenticate, updateProfile);

// Admin only: View all users
router.get("/", authenticate, getAllUsers);

// Admin only: Update any user by ID
router.put("/:id", authenticate, (req: Request, res: Response, next: NextFunction) => {
  const authReq = req as AuthenticatedRequest;

  if (authReq.user?.role !== "admin") {
    return res.status(403).json({ message: "Only admins can update other users" });
  }

  authReq.body.id = parseInt(req.params.id);
  return updateProfile(authReq, res);
});

// Admin only: Delete a user by ID
router.delete("/:id", authenticate, deleteUser);

export default router;
