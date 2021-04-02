import React from "react";
import Proptypes from "prop-types"
import {Link} from "react-router-dom"

export const Blog = (props) => {
    return(
        <>
            <div className="card mb-3">
  			<div className="row no-gutters">
    			<div className="col">
      			<div className="card-body">
        			<h5 className="card-title">Card title</h5>
        			<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
						quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
						incidunt recusandae expedita nesciunt velit?
					</p>
                    <Link to={`/post/${props.id}`}>
                            <span className="btn btn-info">Leer Más...</span>
                    </Link>
      			</div>
    			</div>
					  <img src={props.blog1} alt="..." width="100%" className="d-block col-4"/>
  			</div>
			</div>
        </>
    )
}
Blog.proptype={
    blog1: Proptypes.string
}