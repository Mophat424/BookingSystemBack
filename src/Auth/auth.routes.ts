// // src/auth/auth.routes.ts
// import express from "express";
// import { register, login, update } from "./auth.controller";

// const router = express.Router();

// // Existing routes
// router.post("/register", register);
// router.post("/login", login);

// // New update route
// router.post("/update/:userId", authenticate, update); // Assuming authenticate middleware is used

// export default router;






// import express from "express";
// import { register, login, update } from "./auth.controller";
// import { authenticate } from "../middleware/auth.middleware";
 

// const router = express.Router();

// // Existing routes
// router.post("/register", register);
// router.post("/login", login);

// // New update route
// router.post("/update/:userId", authenticate, update); // Now includes authenticate

// export default router;






import express from "express";
import { register, login, update } from "./auth.controller";
import { authenticate } from "../middleware/auth.middleware";
import { Request, Response } from "express";

const router = express.Router();

router.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Auth route is working!" });
});

router.post("/register", register);
router.post("/login", login);
router.post("/update/:userId", authenticate, update);

export default router;
