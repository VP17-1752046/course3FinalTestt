import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
  index: { type: Number, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  status: { type: String, required: true },
  desc: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

const Position = mongoose.model("Position", positionSchema);
export default Position;
