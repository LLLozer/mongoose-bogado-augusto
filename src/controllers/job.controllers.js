import { JobModel } from "../models/job.model.js";

export const createJob = async (req, res) => {
  const { occupation, experience } = req.body;
  try {
    const newJob = await JobModel.create({
      occupation: occupation,
      experience: experience,
    });
    res.status(201).json({
      msg: "Trabajo creado correctamente",
      newJob,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const listAll = await JobModel.find();
    res.status(200).json({
      msg: "Listando todos los trabajos",
      listAll,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getJobById = async (req, res) => {
  const { id } = req.params;
  try {
    const findID = await JobModel.findById(id);
    res.status(200).json({
      msg: "Trabajo encontrado",
      findID,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor");
  }
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { occupation, experience } = req.body;
  try {
    const updatedJob = await JobModel.findByIdAndUpdate(
      id,
      {
        occupation,
        experience,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      msg: "Trabajo actualizado",
      updatedJob,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedJob = await JobModel.findByIdAndDelete(id);
    res.status(200).json({
      msg: "Trabajo eliminado correctamente",
      deletedJob,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor");
  }
};
