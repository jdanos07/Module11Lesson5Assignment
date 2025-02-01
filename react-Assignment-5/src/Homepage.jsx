import React from "react";
import { Button, Container, Image} from "react-bootstrap";
import welcomeImage from "./assets/welcome-image.jpg";
import 'bootstrap/dist/css/bootstrap.min.css'

const HomePage = () => {
    return (
        <Container fluid className="text-center p-4" style={{ backgroundColor: "grey", color: "#333", border: "1px solid #ddd", borderRadius: "10px" }}>
            

                    <Image 
                        src={welcomeImage} 
                        alt="Welcome" 
                        className="img-fluid mb-3 rounded w-100 w-md-75 w-lg-50"
                    />
                
            <Button variant="primary" size="lg" className="mt-2 shadow">
                Shop Now
            </Button>

        </Container>
    );
};

export default HomePage;
