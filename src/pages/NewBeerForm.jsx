import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewBeerForm = () => {

    const navigate = useNavigate();
    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    });

    const handleChange = (e) => {
        setNewBeer(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: newBeer.name,
            tagline: newBeer.tagline,
            description: newBeer.description,
            first_brewed: newBeer.first_brewed,
            brewers_tips: newBeer.brewers_tips,
            attenuation_level: parseInt(newBeer.attenuation_level),
            contributed_by: newBeer.contributed_by 
        }
        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
            navigate('/beers')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="form">
            <h2>New Beer</h2>
            <form onSubmit={handleSubmit}>
                <label>Beer's name</label>
                <input type="text" name="name" value={newBeer.name} onChange={handleChange} required />
                <label>Tagline</label>
                <input type="text" name="tagline" value={newBeer.tagline} onChange={handleChange} required />
                <label>Description</label>
                <input type="text" name="description" value={newBeer.description} onChange={handleChange} required />
                <label>First Brewed</label>
                <input type="text" name="first_brewed" value={newBeer.first_brewed} onChange={handleChange} required />
                <label>Brewers Tips</label>
                <input type="text" name="brewers_tips" value={newBeer.brewers_tips} onChange={handleChange} required />
                <label>Attenuation Label</label>
                <input type="number" name="attenuation_level" value={newBeer.attenuation_level} onChange={handleChange} required />
                <label>Contributed by</label>
                <input type="text" name="contributed_by" value={newBeer.contributed_by} onChange={handleChange} required />
                <button>ADD NEW</button>
            </form>
        </div>

    )
}

export default NewBeerForm;