import React from "react";
import Proptypes from "prop-types"

export const Footer = (props) => {
    return(
        <>
            <div className="container py-3 my-3">
                    <p>Made with love by {props.foot1}</p>
            </div>
        </>
    )
}
Footer.proptype={
    foot1: Proptypes.string
}