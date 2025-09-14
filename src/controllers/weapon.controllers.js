import { WeaponModel } from "../models/weapon.model.js";

export const createWeapon = async (req, res) => {
  const { weapon_name, type, status, kill_count, bearer } = req.body;
  try {
    const newWeapon = await WeaponModel.create({
      weapon_name: weapon_name,
      type: type,
      status: status,
      kill_count: kill_count,
      bearer: bearer,
    });
    res.status(201).json({
      msg: "Arma creada correctamente",
      newWeapon,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getAllWeapons = async (req, res) => {
  try {
    const listAll = await WeaponModel.find().populate("bearer");
    res.status(200).json({
      msg: "Listando todas las armas",
      listAll,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getWeaponById = async (req, res) => {
  const { id } = req.params;
  try {
    const findID = await WeaponModel.findById(id).populate("bearer");
    res.status(200).json({
      msg: "Arma encontrada",
      findID,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const updateWeapon = async (req, res) => {
  const { id } = req.params;
  const { weapon_name, type, status, kill_count, bearer } = req.body;
  try {
    const udpatedWeapon = await WeaponModel.findByIdAndUpdate(
      id,
      {
        weapon_name,
        type,
        status,
        kill_count,
        bearer,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      msg: "Arma actualizada correctamente",
      udpatedWeapon,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const deleteWeapon = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWeapon = await WeaponModel.findByIdAndDelete(id);
    res.status(200).json({
      msg: "Arma eliminada correctamente",
      deletedWeapon,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};
