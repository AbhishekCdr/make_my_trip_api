import express from "express";
import { VerifyToken } from "../utils/verifyUser.js";
import {
  bookFlight,
  bookHotel,
  getFlight,
  getHotel,
} from "../controllers/booking.controller.js";

const router = express.Router();

router.post("/hotel", bookHotel);
router.post("/flight", bookFlight);
router.get("/hotel/get", getHotel);
router.get("/flight/get", getFlight);

export default router;
