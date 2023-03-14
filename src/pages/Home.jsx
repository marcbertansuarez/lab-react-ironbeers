import React from "react";
import { Link } from "react-router-dom";
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randombeer from '../assets/random-beer.png';

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-page-1">
                <img src={beers} alt="beers" />
                <Link className="beer-link" to="/beers">All Beers</Link>
                <p>Get all the beers!</p>
            </div>
            <div className="home-page-1">
                <img src={randombeer} alt="random-beer" />
                <Link className="beer-link" to="/random-beer">Random Beer</Link>
                <p>Find a random beer!</p>
            </div>
            <div className="home-page-1">
                <img src={newbeer} alt="new-beer" />
                <Link className="beer-link" to="/new-beer">New Beer</Link>
                <p>Create a new beer!</p>
            </div>            
        </div>
    )
}

export default Home;