import React from "react";
import Proptypes from "prop-types"

export const Header = (props) => {
    return(
        <>
                <div className="py-5 my-3 bg-info col-12">
                    <h1 className="text-center text-white">Aquí quedaría bien un Banner o bien un<br/>
                        Jumbotron
                    </h1>
                </div>
                <div className="row mx-4">
                    <div className="col-4 mt-n6">
                    <div className="card text-center">
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><i class="fas fa-search fa-4x"></i></p>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt-n6">
                    <div className="card text-center">
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><i class="far fa-comments fa-4x"></i></p>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt-n6">
                    <div className="card text-center">
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><i class="far fa-star fa-4x"></i></p>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}
