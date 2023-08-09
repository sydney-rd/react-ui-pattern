function Stamp({ country, onClick }) {
  return (
    <div onClick={onClick}>
      <div className="stamp">
        <img
          className="stamp-flag"
          src={country.flags.png}
          alt={country.name.common}
        />
      </div>
    </div>
  );
}

export default Stamp;
