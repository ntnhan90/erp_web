import { Container } from "react-bootstrap";
import React from "react";

export default function Layout({
    children,
}:{
    children:React.ReactNode
}) {
    return(
        <>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">

                <div className="body flex-grow-1 px-sm-2 mb-4">
                    <Container fluid="lg">
                        {children}
                    </Container>
                </div>

            </div>
        </>
    )
}