const mongoose = require("mongoose");
const User = require("./user.model");

const bookingSchema = new mongoose.Schema({
  numbers: [Number],
  price: Number,
  total: Number,
  reserverName: String,
  approvedBy: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "approved", "rejected", "cancelled"],
  },
  date: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
