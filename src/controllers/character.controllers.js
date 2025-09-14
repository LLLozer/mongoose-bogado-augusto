import { CharacterModel } from "../models/character.model.js";

export const createCharacter = async (req, res) => {
  const { character_name, race, mutations, psyker, affiliation, jobs } = req.body;
  try {
    const newCharacter = await CharacterModel.create({
      character_name: character_name,
      race: race,
      mutations: mutations,
      psyker: psyker,
      affiliation: affiliation,
      jobs: jobs,
    });
    res.status(201).json({
      msg: "Personaje creado correctamente",
      newCharacter,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getAllCharacters = async (req, res) => {
  try {
    const listAll = await CharacterModel.find().populate("affiliation").populate("jobs");
    res.status(200).json({
      msg: "Listando todos los personajes",
      listAll,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getCharacterById = async (req, res) => {
  const { id } = req.params;
  try {
    const findID = await CharacterModel.findById(id).populate("affiliation").populate("jobs");
    res.status(200).json({
      msg: "Personaje encontrado",
      findID,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const updateCharacter = async (req, res) => {
  const { character_name, race, mutations, psyker, affiliation, jobs } = req.body;
  const { id } = req.params;
  try {
    const updatedCharacter = await CharacterModel.findByIdAndUpdate(
      id,
      {
        character_name,
        race,
        mutations,
        psyker,
        affiliation,
        jobs,
      },
      { new: true }
    );
    res.status(200).json({
      msg: "Personaje actualizado",
      updatedCharacter,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCharacter = await CharacterModel.findByIdAndDelete(id);
    res.status(200).json({
      msg: "Personaje eliminado correctamente",
      deletedCharacter,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};
