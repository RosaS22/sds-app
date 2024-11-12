// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import seasoningsImage from '../assets/seasoningset.png';

// HomePage component displays the landing page with navigation links to different sections of the app.
const HomePage = () => {
    return (
        <Container className="text-center mt-5">
            {/* App title and brief description */}
            <h1>Seasoning Inventory App</h1>
            <p>Keep track of your supply!</p>

            {/* Link to the Seasonings page with a button */}
            <Link to="/seasonings">
                <Button className="seasonings-button">Seasonings</Button>
            </Link>

            {/* Link to the Sweetenings page with a button, styled for spacing */}
            <Link to="/sweetenings" style={{ marginTop: '10px', padding: '10px' }}>
                <Button className="sweetenings-button">Sweetenings</Button>
            </Link>

            {/* Display an image for visual appeal, with controlled dimensions */}
            <img src={seasoningsImage} alt="Seasonings" style={{ width: '85%', height: '85%' }} />
        </Container>
    );
};

export default HomePage;
