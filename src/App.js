import React, { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";

function App() {
  const [starships, setStarships] = useState([]); //Hold the starship objects in state with the useState hook, don't forget to initialize to an empty array!

  useEffect(() => { //Use the useEffect hook to make the AJAX request once the app loads
    const fetchStarships = async () => {
      const starshipsData = await getAllStarships();
      setStarships(starshipsData);
    };

    fetchStarships();
  }, []);

  return (
      <div className="App">
          <h1>STAR WARS STARSHIPS</h1>
      {starships.map((starship) => (
        <StarshipCard key={starship.name} name={starship.name} />
      ))}
    </div>
  );
}

export default App;
