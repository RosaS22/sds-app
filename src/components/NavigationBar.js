// src/components/NavigationBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const NavigationBar = () => (

  <Navbar bg="dark" data-bs-theme="dark">
  <Button variant="secondary" href="/">Home</Button>{' '}
  <Button variant="secondary" href="/seasonings">Seasonings</Button>{' '}
  <Button variant="secondary" href="/sweetenings">Sweetenings</Button>{' '}
  </Navbar>


);

export default NavigationBar;
