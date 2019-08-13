import config from '../config';
import TokenService from './token-service';


const CharactersAPIService = {
  async getAllCharacters() {
    const res = await fetch(`${config.API_ENDPOINT}/characters`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    });

    return (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json();
  },
  async getCharacterById(id) {
    const res = await fetch(`${config.API_ENDPOINT}/characters/${id}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    });

    return (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json();
  },
  async addCharacter(char) {
    const res = await fetch(`${config.API_ENDPOINT}/characters/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
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