import Position from "../models/position.js";

const getAllPositions = async (req, res) => {
  try {
    const positions = await Position.find();
    res.status(200).json(positions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPosition = async (req, res) => {
  try {
    const { index, code, name, status, desc } = req.body;

    const newPosition = new Position({
      index,
      code,
      name,
      status,
      desc,
    });

    await newPosition.save();
    res.status(201).json({
      message: "Position created successfully",
      position: newPosition,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating position", error: error.message });
  }
};

export { getAllPositions, createPosition };
