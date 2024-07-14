import express from "express";
import {
  updateUser,
  deleteUser,
  getUserListings,
} from "../controllers/user.controller.js";
import { VerifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "hello world",
  });
});

router.post("/update/:id", VerifyToken, updateUser);
router.delete("/delete/:id", VerifyToken, deleteUser);
router.get("/listings/:id", VerifyToken, getUserListings);

export default router;
