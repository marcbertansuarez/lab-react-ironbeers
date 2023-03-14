import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="beer-details">
      <div className="beer-details-1">
        <img src={randomBeer.image_url} alt={randomBeer.name} />
      </div>
      <div>
        <div className="beer-details-2">
          <h3>{randomBeer.name}</h3>
          <h4>{randomBeer.attenuation_level}</h4>
        </div>
        <div className="beer-details-3">
          <h4>{randomBeer.tagline}</h4>
          <h4>{randomBeer.first_brewed}</h4>
        </div>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
};

export default RandomBeer;
