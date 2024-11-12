// src/components/SweeteningForm.js

import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';

// SweeteningForm component for creating and updating sweetening items.
// Props:
// - addSweetening: Function to add a new sweetening.
// - updateSweetening: Function to update an existing sweetening.
// - selectedSweetening: Optional; the sweetening object to edit if provided.
const SweeteningForm = ({ addSweetening, updateSweetening, selectedSweetening }) => {
    
    // State to manage the sweetening object with default empty fields.
    const [sweetening, setSweetening] = useState({ name: '', jarQty: '', bulkQty: '' });

    // State to handle form validation errors.
    const [error, setError] = useState('');

    // Effect hook to populate form fields if editing a selected sweetening.
    useEffect(() => {
        if (selectedSweetening) {
            // Populate form fields for edit mode.
            setSweetening(selectedSweetening);
        } else {
            // Clear form fields if adding a new sweetening.
            setSweetening({ name: '', jarQty: '', bulkQty: '' });
        }
    }, [selectedSweetening]);

    // Handler for input field changes, updating the corresponding field in state.
    const handleChange = (e) => {
        setSweetening({ ...sweetening, [e.target.name]: e.target.value });
    };

    // Handler for form submission, performs validation and calls add or update function.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled; show error if any are empty.
        if (sweetening.name === '' || sweetening.jarQty === '' || sweetening.bulkQty === '') {
            setError('All fields are required.');
            return;
        }

        // Clear error message once validation is successful.
        setError('');

        // Update if editing an existing item; add a new item if not.
        if (selectedSweetening) {
            updateSweetening({ ...sweetening, id: selectedSweetening.id });
        } else {
            // Use Date.now() to generate a unique ID for new items.
            addSweetening({ ...sweetening, id: Date.now() });
        }

        // Reset form fields after submission.
        setSweetening({ name: '', jarQty: '', bulkQty: '' });
    };

    // Form layout for entering sweetening details: name, jar quantity, and bulk quantity.
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h3>{selectedSweetening ? 'Edit Sweetening' : 'Add New Sweetening'}</h3>

                    {/* Display validation error if any field is missing */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        {/* Sweetening Name Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Sweetening Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter sweetening name"
                                value={sweetening.name}
                                onChange={handleChange}
                                isInvalid={!!error && sweetening.name === ''}
                            />
                        </Form.Group>

                        {/* Jar Quantity Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Jar Qty</Form.Label>
                            <Form.Control
                                type="number"
                                name="jarQty"
                                placeholder="Enter jar quantity"
                                value={sweetening.jarQty}
                                onChange={handleChange}
                                isInvalid={!!error && sweetening.jarQty === ''}
                            />
                        </Form.Group>

                        {/* Bulk Quantity Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Bulk Qty</Form.Label>
                            <Form.Control
                                type="number"
                                name="bulkQty"
                                placeholder="Enter bulk quantity"
                                value={sweetening.bulkQty}
                                onChange={handleChange}
                                isInvalid={!!error && sweetening.bulkQty === ''}
                            />
                        </Form.Group>

                        {/* Submit button changes text between "Add" and "Update" based on the mode */}
                        <Button variant="primary" type="submit">
                            {selectedSweetening ? 'Update' : 'Add'} Sweetening
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SweeteningForm;
