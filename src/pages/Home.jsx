import { useEffect, useState } from "react";
import axios from "axios";
import Stamp from "../components/Stamp";
import Modal from "../components/Modal";

// fetch request that happens everytime the homepage is loaded
function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("oceania"); // name of region that starts with useffect
  const [countryModal, setCountryModal] = useState({});
  const [toggle, setToggle] = useState(false);

  const getCountries = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/region/${search}`
    );
    let limit = 15;
    let results = response.data;

    if (results.length > limit) {
      results.length = 15;
    }
    setCountries(results);
    setSearch("");
  };

  useEffect(() => {
    getCountries();
  }, []);

  function modalPopUp(country) {
    console.log(country);
    if (toggle) {
      setToggle(false);
      setCountryModal({});
    } else {
      setToggle(true);
      setCountryModal(country);
    }
  }

  function modalExit(country) {}

  // handle input change for searching regions
  function handleInputChange() {
    getCountries();
  }

  return (
    <div>
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="region of the world"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={handleInputChange}>Explore</button>
      </div>
      <div className="home-container">
        {toggle && <Modal country={countryModal} />}
        <div className="stamp-container">
          {countries.map((country, idx) => {
            return (
              <Stamp
                country={country}
                key={idx}
                onClick={() => modalPopUp(country)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
