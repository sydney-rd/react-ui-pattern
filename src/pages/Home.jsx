import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Stamp from "../components/Stamp";
import Modal from "../components/Modal";

// fetch request that happens everytime the homepage is loaded
function Home() {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("oceania") // name of region
    const [countryModal, setCountryModal] = useState({})
    const [toggle, setToggle] = useState(false)

    const getCountries = async () => {
        const response = await axios.get(
            // "https://restcountries.com/v3.1/region/asia"
            `https://restcountries.com/v3.1/region/${search}`
        )
        let limit = 15 
        let results = response.data

        if (results.length > limit) {
            results.length = 15
        }
        setCountries(results)
    }

    useEffect(() => {
        getCountries();
    }, [search])

    function modalPopUp(country) {
        console.log(country)
        if (toggle) {
            setToggle(false)
            setCountryModal({});
        } else {
            setToggle(true)
            setCountryModal(country);
        }
    }   

    function handleInputChange(event) {
        setSearch(event.target.value)
    }

    // console.log(countries); // console logs oceanic countries
    return (
        <div className="home-container">
            <div>
                <input type="text" onChange={handleInputChange} />
            </div>
            {toggle && <Modal country={countryModal}/>} 
            {countries.map((country, idx) => {
                return (
                    <Stamp 
                    country={country} 
                    key={idx} 
                    onClick={() => modalPopUp(country)} />
                ) // returns # of stamps
                
            })}
        </div>
        
        
    )
}

export default Home;