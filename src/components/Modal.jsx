
function Modal( {country} ) {
    function name() {
        return country && country.name ? country.name.common : "";    }
    
    return(

        <div className = "test">
            {name()}
        </div>
    )
}

export default Modal