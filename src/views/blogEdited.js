import React from "react";
import Proptypes from "prop-types"
import {Link, useParams} from "react-router-dom"

export const BlogEdit = (props) => {
	let params = useParams()
    return(
        <>
			<div class="card">
    			<img src={props.blog1[params.blogid]} alt="..." width="100%" className="d-block card-img-top" />
    			<div class="card-body">
      				<h5 class="card-title">Card title</h5>
      				<p class="card-text">
		  				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
						quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
						incidunt recusandae expedita nesciunt velit?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
						quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
						incidunt recusandae expedita nesciunt velit?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
						quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
						incidunt recusandae expedita nesciunt velit?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
						quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
						incidunt recusandae expedita nesciunt velit?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
						quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
						incidunt recusandae expedita nesciunt velit?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
						quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
						incidunt recusandae expedita nesciunt velit?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
						quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
						incidunt recusandae expedita nesciunt velit?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
						quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
						incidunt recusandae expedita nesciunt velit?
	  				</p>
    			</div>
  			</div>
        </>
    )
}
BlogEdit.proptype={
    blog1: Proptypes.string
}