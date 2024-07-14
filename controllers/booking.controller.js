import HotelBooking from "../models/hotel.model.js";
import FlightBooking from "../models/flight.model.js";

export const bookHotel = async (req, res, next) => {
  const { username, email, hotelName, price, dateOfBooking } = req.body;
  const newHotel = new HotelBooking({
    username,
    email,
    hotelName,
    price,
    dateOfBooking,
  });
  try {
    await newHotel.save();
    res.status(201).json("booking created sucessfully");
  } catch (error) {
    next(error);
  }
};

export const bookFlight = async (req, res, next) => {
  const { username, email, flightName, price, dateOfBooking } = req.body;
  const newFlight = new FlightBooking({
    username,
    email,
    flightName,
    price,
    dateOfBooking,
  });
  try {
    await newFlight.save();
    res.status(201).json("booking created sucessfully");
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const data = await HotelBooking.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const getFlight = async (req, res, next) => {
  try {
    const data = await FlightBooking.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
};
