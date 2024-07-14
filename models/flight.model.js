import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    Email: {
      type: String,
    },
    flightName: {
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

const FlightBooking = mongoose.model("Flight", flightSchema);

export default FlightBooking;
