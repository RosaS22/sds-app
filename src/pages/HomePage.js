// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import seasoningsImage from '../assets/seasoningset.png';


const HomePage = () => {
    return (
        <Container className="text-center mt-5">
            <h1>Seasoning Inventory App</h1>
            <p>Keep track of your supply!</p>
            <Link to="/seasonings">
                <Button className="seasonings-button">Seasonings</Button>
            </Link>
            <Link to="/sweetenings" style={{ marginTop: '10px', padding: '10px' }}>
                <Button className="sweetenings-button">Sweetenings</Button>
            </Link>
            <img src={seasoningsImage} alt="Seasonings" style={{ width: '85%', height: '85%' }} />
        </Container>
  
        
    );
};

export default HomePage;
