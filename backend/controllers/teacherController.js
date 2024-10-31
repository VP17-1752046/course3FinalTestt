import Teacher from "../models/teacher.js";

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createTeacher = async (req, res) => {
  try {
    const {
      id,
      name,
      email,
      phone,
      status,
      address,
      position,
      degree,
      school,
      workStatus,
    } = req.body;

    const existingTeacher = await Teacher.findOne({ $or: [{ id }, { email }] });
    if (existingTeacher) {
      return res.status(400).json({ message: "Teacher already exists" });
    }

    const newTeacher = new Teacher({
      id,
      name,
      email,
      phone,
      status,
      address,
      position,
      degree,
      school,
      workStatus,
    });
    await newTeacher.save();

    res
      .status(201)
      .json({ message: "Teacher created successfully", teacher: newTeacher });
  } catch (error) {
    console.error("Error creating teacher:", error);
    res.status(500).json({ message: "Fail to create teacher" });
  }
};

export { getAllTeachers, createTeacher };
