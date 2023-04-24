function Modal({ country }) {
  function name() {
    return country && country.name ? country.name.common : "";
  }

  return (
    <div className="modal">
      <p> I just traveled to {name()} check this out...</p>
      <p> The capital here is {country.capital}! </p>
      <p>
        {" "}
        The population in {name()} is {country.population}{" "}
      </p>
      <p> You'll find this country in {country.region} </p>
      <p> How cool is their flag? {country.flag} </p>
    </div>
  );
}

export default Modal;
