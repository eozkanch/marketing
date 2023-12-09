import { constants } from "../../../constant";
import { Container, Spinner } from "react-bootstrap";
import "./style.scss";

const { website } = constants;

const LoadingPage = () => {
    return (
        <Container className="loading-page">
            <Spinner animation="border" variant="primary" />
            <div className="logo">
                <img src="/cookery-tech-logo.png" alt={website.name} />
                <div className="logo_text">
                  
                    <p>Elevating Culinary Excellence with Innovative Solutions</p>
                </div>
            </div>
        </Container>
    );
};

export default LoadingPage;
