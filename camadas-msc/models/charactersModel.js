const connection = require('./database');

const getCharacters = async () => {
  const query = 'SELECT * FROM characters';
  const [characters] = await connection.execute(query);
  return characters;
}

const createCharacter = async (name, races_id) => {
  const query = 'INSERT INTO characters (name, races_id) VALUES (?,?);'
  const [character] = await connection.execute(query, [name, races_id])
  return character.insertId;
}

module.exports = {
  getCharacters,
  createCharacter,
};