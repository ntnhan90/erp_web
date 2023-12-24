import React from "react";

const Footer = () =>{

	return(
		<footer className="footer border-top py-2">
         	<div className="align-items-center flex-column flex-md-row d-flex justify-content-between container-fluid">
         		<a className="text-decoration-none" href="https://coreui.io">CoreUI </a>
          		<a className="text-decoration-none" href="https://coreui.io">
            		Bootstrap Admin
            		Template
          		</a>
         	</div>
         	<div class="ms-md-auto">
         		Powered by&nbsp;
         		<a class="text-decoration-none" href="#">CoreUI UI Components</a>
         	</div>
        </footer>
	)
}

export default Footer