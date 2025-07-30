// import { Request, Response } from "express";
// import * as userService from "./user.service";
// import { JwtPayload } from "jsonwebtoken";

// // Extend request to include user info
// interface AuthenticatedRequest extends Request {
//   user?: JwtPayload & { id?: number; role?: string };
// }

// // Admin: Get all users
// export const getAllUsers = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
//   try {
//     if (req.user?.role !== "admin") {
//       res.status(403).json({ message: "Only admins can view all users" });
//       return;
//     }

//     const users = await userService.getAllUsers();
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Get current user profile (self)
// export const getProfile = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
//   try {
//     const userId = req.user?.id;

//     const user = await userService.getUserById(userId!);
//     if (!user) {
//       res.status(404).json({ message: "User not found" });
//       return;
//     }

//     res.json(user);
//   } catch (error) {
//     console.error("Error fetching user profile:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Update own profile
// export const updateProfile = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
//   try {
//     const userId = req.user?.id;

//     const updatedUser = await userService.updateUser(userId!, req.body);
//     if (!updatedUser) {
//       res.status(404).json({ message: "User not found" });
//       return;
//     }

//     res.json(updatedUser);
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Admin: Delete any user
// export const deleteUser = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
//   try {
//     if (req.user?.role !== "admin") {
//       res.status(403).json({ message: "Only admins can delete users" });
//       return;
//     }

//     const userId = parseInt(req.params.id);
//     const deleted = await userService.deleteUser(userId);

//     if (!deleted) {
//       res.status(404).json({ message: "User not found" });
//       return;
//     }

//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// import { Request, Response } from "express";
// import * as userService from "./user.service";
// import { JwtPayload } from "jsonwebtoken";

// // Export the interface for use in other files
// export interface AuthenticatedRequest extends Request {
//   user?: JwtPayload & { id?: number; role?: string };
// }

// // Admin: Get all users
// export const getAllUsers = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
//   try {
//     if (req.user?.role !== "admin") {
//       res.status(403).json({ message: "Only admins can view all users" });
//       return;
//     }

//     const users = await userService.getAllUsers();
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Get current user profile (self)
// export const getProfile = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
//   try {
//     const userId = req.user?.id;

//     const user = await userService.getUserById(userId!);
//     if (!user) {
//       res.status(404).json({ message: "User not found" });
//       return;
//     }

//     res.json(user);
//   } catch (error) {
//     console.error("Error fetching user profile:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Update own profile or any user (admin)
// export const updateProfile = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
//   try {
//     const userId = req.user?.id || req.body.id; // Use req.user.id for self, req.body.id for admin
//     if (!userId) {
//       res.status(400).json({ message: "User ID is required" });
//       return;
//     }

//     // Check if admin is updating another user
//     const isAdminUpdatingOther = req.user?.role === "admin" && req.body.id && req.body.id !== req.user.id;
//     if (isAdminUpdatingOther && req.user?.role !== "admin") {
//       res.status(403).json({ message: "Only admins can update other users" });
//       return;
//     }

//     const updatedUser = await userService.updateUser(userId, req.body);
//     if (!updatedUser) {
//       res.status(404).json({ message: "User not found" });
//       return;
//     }

//     res.json(updatedUser);
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Admin: Delete any user
// export const deleteUser = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
//   try {
//     if (req.user?.role !== "admin") {
//       res.status(403).json({ message: "Only admins can delete users" });
//       return;
//     }

//     const userId = parseInt(req.params.id);
//     const deleted = await userService.deleteUser(userId);

//     if (!deleted) {
//       res.status(404).json({ message: "User not found" });
//       return;
//     }

//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };








import { Request, Response } from "express";
import * as userService from "./user.service";
import { JwtPayload } from "jsonwebtoken";

// Export the interface for use in other files
export interface AuthenticatedRequest extends Request {
  user?: JwtPayload & { id?: number; role?: string };
}

// Admin: Get all users
export const getAllUsers = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (req.user?.role !== "admin") {
      res.status(403).json({ message: "Only admins can view all users" });
      return;
    }

    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get current user profile (self)
export const getProfile = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    const user = await userService.getUserById(userId!);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update own profile or any user (admin)
export const updateProfile = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.role === "admin" && req.body.id
      ? req.body.id
      : req.user?.id;

    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }

    const updatedUser = await userService.updateUser(userId, req.body);
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Admin: Delete any user
export const deleteUser = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (req.user?.role !== "admin") {
      res.status(403).json({ message: "Only admins can delete users" });
      return;
    }

    const userId = parseInt(req.params.id);
    const deleted = await userService.deleteUser(userId);

    if (!deleted) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
