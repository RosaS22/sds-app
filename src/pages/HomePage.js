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
                <Button variant="primary">View Seasonings</Button>
            </Link>
            <br />
            <Link to="/sweetenings" style={{ marginTop: '10px' }}>
                <Button variant="secondary">View Sweetenings</Button>
            </Link>
            <img src={seasoningsImage} alt="Seasonings" style={{ width: '90%', height: 'auto' }} />
        </Container>
  
        
    );
};

export default HomePage;
