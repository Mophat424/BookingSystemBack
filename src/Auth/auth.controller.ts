// // src/auth/auth.controller.ts
// import { Request, Response } from "express";
// import { registerUser, loginUser, verifyOtp } from "./auth.service";

// // Register controller
// export const register = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const result = await registerUser(req.body);
//     res.status(201).json(result);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Login controller
// export const login = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { email, password } = req.body;
//     const result = await loginUser(email, password);
//     res.status(200).json(result);
//   } catch (error: any) {
//     res.status(401).json({ message: error.message });
//   }
// };

// // Verify OTP controller
// export const verify = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { email, otp } = req.body; // Expect email and OTP in body
//     const result = await verifyOtp(email, otp);
//     res.status(200).json(result);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };



// // src/auth/auth.controller.ts
// import { Request, Response } from "express";
// import { registerUser, loginUser, verifyOtp } from "./auth.service";

// // Register controller
// export const register = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const result = await registerUser(req.body);
//     res.status(201).json(result);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Login controller
// export const login = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { email, password } = req.body;
//     const result = await loginUser(email, password);
//     res.status(200).json(result);
//   } catch (error: any) {
//     res.status(401).json({ message: error.message });
//   }
// };

// // Verify OTP controller
// export const verify = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { email, otp } = req.body;
//     const result = await verifyOtp(email, otp);
//     res.status(200).json(result);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };









// src/auth/auth.controller.ts
import { Request, Response } from "express";
import { registerUser, loginUser, verifyOtp, updateUser } from "./auth.service";

// Register controller
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await registerUser(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Login controller
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

// Verify OTP controller
export const verify = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, otp } = req.body;
    const result = await verifyOtp(email, otp);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update user controller
export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const { email, currentPassword, newPassword } = req.body;

    const result = await updateUser(Number(userId), {
      email,
      currentPassword,
      newPassword,
    });

    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
