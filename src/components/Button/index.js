import React from "react";
import './button.scss';
import PropTypes from 'prop-types'

function Button({children, onClick, width}) {
    return (
        <button className="button" onClick={onClick} style={{width}}>
            {children}
        </button> 
    )
}
Button.propTypes = {
    children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onclick:PropTypes.func.isRequired,
    with:PropTypes.number.isRequired
}
export default Button