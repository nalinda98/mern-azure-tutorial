import mongoose from "mongoose";

const dateEnableSchema = new mongoose.Schema({
  prices: [Number],
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

  selectedDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DateEnable = mongoose.model("DateEnable", dateEnableSchema);

export default DateEnable;