import express from "express";
import { VerifyToken } from "../utils/verifyUser.js";
import {
  bookFlight,
  bookHotel,
  getFlight,
  getHotel,
} from "../controllers/booking.controller.js";

const router = express.Router();

router.post("/hotel", VerifyToken, bookHotel);
router.post("/flight", VerifyToken, bookFlight);
router.get("/hotel/get", VerifyToken, getHotel);
router.get("/flight/get", VerifyToken, getFlight);

export default router;
