import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Stamp({ country, onClick }) {

    return (
        <div className="stamp-container" onClick={onClick}>

            <div className="stamp">
                <img className="stamp-flag" src={country.flags.png} alt={country.name.common} />
                

            </div>
        </div>
    )
}

export default Stamp;