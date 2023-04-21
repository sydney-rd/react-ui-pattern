import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Stamp({ country, onClick }) {

    return (
        <div className="stamp-container" onClick={onClick}>

            <div className="stamp">
                {country.name.common} 
            </div>

        </div>

    )
}

export default Stamp;