import React from "react";
import { Container } from 'react-bootstrap'

const Footer = () =>{
	return(
		<footer className="footer border-top px-sm-2 py-2">
      <Container fluid className="align-items-center flex-column flex-md-row d-flex justify-content-between">
        <div>
          <a className="text-decoration-none" href="https://coreui.io">CoreUI </a>
          <a className="text-decoration-none" href="https://coreui.io">
            Bootstrap Admin
            Template
          </a>
         
        </div>
        <div className="ms-md-auto">
          Powered by&nbsp;
          <a
            className="text-decoration-none"
            href="@layout/AdminLayout/AdminLayout"
          >
            CoreUI UI
            Components
          </a>
        </div>
      </Container>
    </footer>
	)
}

export default Footer