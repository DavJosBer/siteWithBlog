import React from "react";
import Proptypes from "prop-types"
import {NavLink} from "react-router-dom"

export const NavBar = (props) => {
    return(
        <>
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 text-left">
                        <NavLink to="/">
                            <div className="d-flex align-items-center"><h1 className="text-info">Lorem Ipsum</h1><i class="fas fa-users fa-2x ml-3 text-info"></i></div>
                        </NavLink>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light border-bottom rounded border-dark">
                <div className="text-center mx-auto" id="navbarNav">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <span className="nav-link px-3 h6"><NavLink exact activeClassName="text-info" to="/">{props.nav1}</NavLink><span class="sr-only">(current)</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link px-3 h6"><NavLink exact activeClassName="text-info" to="/about_us">{props.nav2}</NavLink></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link px-3 h6"><NavLink exact activeClassName="text-info" to="/blog">{props.nav3}</NavLink></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link px-3 h6"><NavLink exact activeClassName="text-info" to="/blogEdit">{props.nav4}</NavLink></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link px-3 h6"><NavLink exact activeClassName="text-info" to="/home">{props.nav5}</NavLink></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link px-3 h6"><NavLink exact activeClassName="text-info" to="/home">{props.nav6}</NavLink></span>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </>
    )
}
NavBar.proptype={
    nav1: Proptypes.string,
    nav2: Proptypes.string,
    nav3: Proptypes.string,
    nav4: Proptypes.string,
    nav5: Proptypes.string,
    nav6: Proptypes.string
}