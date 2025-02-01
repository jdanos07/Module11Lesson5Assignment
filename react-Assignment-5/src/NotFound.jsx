import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import notFoundImage from "./assets/not-found.jpg"; 
const NotFound = () => {
    return (
        <Container 
            fluid 
            className="text-center d-flex flex-column justify-content-center align-items-center vh-100" 
            style={{ backgroundColor: "#f8f9fa", color: "#343a40" }}
        >
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Image 
                        src={notFoundImage} 
                        alt="Page Not Found" 
                        className="img-fluid mb-4" 
                        style={{ maxHeight: "300px" }}
                    />
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <h1 className="display-4 fw-bold">Oops! Page Not Found</h1>
                    <p className="lead">It looks like you took a wrong turn. Let's get you back on track!</p>

                    <NavLink to="/" className="text-decoration-none">
                        <Button variant="primary" size="lg" className="shadow">
                            Go Back Home
                        </Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
