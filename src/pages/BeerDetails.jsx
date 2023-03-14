import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BeerDetails = () => {

    const { beerId } = useParams();
    const [singleBeer, setSingleBeer] = useState([]);

    const getSingleBeer = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            setSingleBeer(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleBeer()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="beer-details">
            <div className="beer-details-1">
                <img src={singleBeer.image_url} alt={singleBeer.name} />
            </div>
            <div>
                <div className="beer-details-2">
                    <h3>{singleBeer.name}</h3>
                    <h4>{singleBeer.attenuation_level}</h4>
                </div>
                <div className="beer-details-3">
                    <h4>{singleBeer.tagline}</h4>
                    <h4>{singleBeer.first_brewed}</h4>
                </div>
                <p>{singleBeer.description}</p>
                <p>{singleBeer.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerDetails;