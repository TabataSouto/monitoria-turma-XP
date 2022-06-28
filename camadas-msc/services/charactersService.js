const charactersModel = require('../models/charactersModel');

const getCharacters = async () => {
  const characters = await charactersModel.getCharacters();
  return characters;
}

module.exports = {
  getCharacters,
}