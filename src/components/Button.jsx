import PropTypes from "prop-types";

export default function Button({...buttonSetup}){
    return(
        <button style={{backgroundColor: (buttonSetup.color), color: 'white'}}>{buttonSetup.label}</button>
    )
}

Button.propTypes = {
    buttonSetup: PropTypes.func.isRequired,
}