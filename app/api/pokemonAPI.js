

export const getPokemon = async () => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000`, {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'}
    }).then(response => response.json());
    return res
  } catch (err) {
    console.log("get pokemon error " + err);
  }
};

export const getData = async (url) => {

  try {
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json());
    return res
  } catch (err) {
    console.log("get data error " + err);
  }

};