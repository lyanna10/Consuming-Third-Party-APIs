//request the api htpps from the website 
export async function getAllStarships() {
  try {
    const response = await fetch("https://swapi.dev/api/starships/"); //the actual https request
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
