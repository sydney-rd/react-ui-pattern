import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Stamp from "../components/Stamp";

// fetch request that happens everytime the homepage is loaded
function Home() {
    // js
    const [country, setCountry] = useState([])
    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get(
                "https://restcountries.com/v3.1/region/oceania"
            )
            setCountry(response.data)
        }
        getCountries();
    }, [])

    console.log(country); // console logs oceanic countries
    
    return (
        <div className="home-container">
            <Stamp />
        </div>
        
        
    )
}

export default Home;