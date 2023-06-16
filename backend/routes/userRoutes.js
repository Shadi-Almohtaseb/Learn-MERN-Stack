import express from "express";
import {
  authUser,
  getAllUsers,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect, verifyIsAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

//only Admin can user this route!
router.route("/all-users").get(verifyIsAdmin, getAllUsers);

export default router;
