const charactersService = require('../services/charactersService');

const getCharacters = async (_req, res) => {
  const characters = await charactersService.getCharacters();
  res.status(200).json(characters);
};

module.exports = {
  getCharacters,
}