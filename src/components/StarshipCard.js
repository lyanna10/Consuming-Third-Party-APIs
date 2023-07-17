import React from 'react';
import styles from "./style.css"

function StarshipCard({ name }) {
    //renders the names of the Star Wars Starship in a card form 
  return <div className="starshipCard container">{name}</div>;
}

export default StarshipCard;