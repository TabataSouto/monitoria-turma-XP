const charactersModel = require('../models/charactersModel');

const getCharacters = async () => await charactersModel.getCharacters();

const createCharacter = async (name, races_id) => {
  console.log(await getCharacters());

  // REGRA DE NEGOCIO 6 -15 <- NÃO VAI ENTRAR NO MODEL DA CREATE, MAS ENTRA NA MODEL DA GETCHARACTERS;
  const allCharacters = await getCharacters()
  const findCharacters = allCharacters.some((character) => character.name === name);

  console.log(findCharacters)

  if (findCharacters) {
    return {
      statusCode: 400,
      response: { message: 'Personagem já existe' }
    };
  };

  // SE A REGRA DE NEGOCIO FOR ATENDIDA, ELE ENTRA NA MODEL DA CREATECHARACTERS;
  const isertId = await charactersModel.createCharacter(name, races_id)

  return {
    statusCode: 200,
    response: {
      isertId,
      name,
      races_id
    },
  };
}

module.exports = {
  getCharacters,
  createCharacter,
}