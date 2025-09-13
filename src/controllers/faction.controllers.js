import { FactionModel } from "../models/faction.model.js";

export const createFaction = async (req, res) => {
  const { faction_name, racism, members, military_forces } = req.body;
  try {
    if (!military_forces) {
      return res.status(406).json({
        msg: "Error: Se requiere al menos un regimiento de la guardia imperial",
        error: "Not acceptable",
        status: 406,
      });
    }
    const newFaction = await FactionModel.create({
      faction_name: faction_name,
      racism: racism,
      members: members,
      military_forces: military_forces,
    });
    res.status(201).json({
      msg: "Facción creada exitosamente",
      newFaction,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getAllFactions = async (req, res) => {
  try {
    const listAll = await FactionModel.find();
    res.status(200).json({
      msg: "Listando todas las facciones",
      listAll,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getFactionById = async (req, res) => {
  const { id } = req.params;
  try {
    const findID = await FactionModel.findById(id);
    res.status(200).json({
      msg: "Facción encontrada",
      findID,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const updateFaction = async (req, res) => {
  const { faction_name, racism, members, military_forces } = req.body;
  const { id } = req.params;
  try {
    const updatedFaction = await FactionModel.findByIdAndUpdate(
      id,
      {
        faction_name,
        racism,
        members,
        military_forces,
      },
      { new: true }
    );
    res.status(200).json({
      msg: "Facción actualizada",
      updatedFaction,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const deleteFaction = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFaction = await FactionModel.findByIdAndDelete(id);
    res.status(200).json({
      msg: "Facción eliminada correctamente",
      deletedFaction,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};
