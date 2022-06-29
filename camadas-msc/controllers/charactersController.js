const charactersService = require('../services/charactersService');

const getCharacters = async (_req, res) => {
  const characters = await charactersService.getCharacters();
  res.status(200).json(characters);
};

const createCharacter = async (req, res) => {
  const { name, races_id } = req.body;
  const { statusCode, response } = await charactersService.createCharacter(name, races_id);
  res.status(statusCode).json(response);
}

module.exports = {
  getCharacters,
  createCharacter,
}