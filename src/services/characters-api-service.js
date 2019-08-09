import config from '../config';

const CharactersAPIService = {
  async getAllCharacters() {
    const res = await fetch(`${config.API_ENDPOINT}/characters`);
    return res.json();
  },
  async getCharacterById(id) {
    const res = await fetch(`${config.API_ENDPOINT}/characters/${id}`);
    return res.json();
  },
  async addCharacter(char) {
    const res = await fetch(`${config.API_ENDPOINT}/characters/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...char
      })
    });

    const newCharacter = await res.json();

    return newCharacter;
  }
};

export default CharactersAPIService;