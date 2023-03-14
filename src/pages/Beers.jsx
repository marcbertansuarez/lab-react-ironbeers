import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');
  

  const getBeers = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  const searchBeers = async () => {
    try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`);
        setBeers(response.data);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    searchBeers();
    // eslint-disable-next-line
  }, [search])

  return (
    <>
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="list-beers">
        {beers.map((elem) => {
            return (
            <div key={elem._id} className="single-beer">
            <div>
                <img src={elem.image_url} alt={elem.name} />
            </div>
            <div>
                <h2>{elem.name}</h2>
                <h3>{elem.tagline}</h3>
                <p>Created by: {elem.contributed_by}</p>
                <Link to={`/beers/${elem._id}`}>See details</Link>
            </div>
            </div>
            )
        })}
        </div>
    </>
  );
};

export default Beers;
