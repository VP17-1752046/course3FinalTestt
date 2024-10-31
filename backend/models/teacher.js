import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  status: { type: String, required: true },
  address: { type: String, required: true },
  position: { type: String, required: true },
  degree: { type: String, required: true },
  school: { type: String, required: true },
  workStatus: { type: String, required: true },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
