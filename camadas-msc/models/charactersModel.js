const connection = require('./database');

const getCharacters = async () => {
  const query = 'SELECT * FROM TheLegendOfZelda.characters';
  const [characters] = await connection.execute(query);
  return characters;
}

module.exports = {
  getCharacters,
};