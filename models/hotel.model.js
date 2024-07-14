import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    Email: {
      type: String,
    },
    hotelName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    dateOfBooking: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const HotelBooking = mongoose.model("Hotel", hotelSchema);

export default HotelBooking;
