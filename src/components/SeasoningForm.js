// src/components/SeasoningForm.js

import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';

// SeasoningForm component for creating and updating seasoning items.
// Props:
// - addSeasoning: Function to add a new seasoning.
// - updateSeasoning: Function to update an existing seasoning.
// - selectedSeasoning: Optional; the seasoning object to edit if passed in.
const SeasoningForm = ({ addSeasoning, updateSeasoning, selectedSeasoning }) => {

    // State to manage the seasoning object. Initialized to empty fields.
    const [seasoning, setSeasoning] = useState({ name: '', jarQty: '', bulkQty: '' });

    // State to handle error messages for form validation.
    const [error, setError] = useState('');

    // Effect hook to load selected seasoning details into form if editing.
    useEffect(() => {
        if (selectedSeasoning) {
            // Populate the form with existing seasoning details for editing.
            setSeasoning(selectedSeasoning);
        } else {
            // Clear form fields if no seasoning is selected (add mode).
            setSeasoning({ name: '', jarQty: '', bulkQty: '' });
        }
    }, [selectedSeasoning]);

    // Handler for input changes, updating the corresponding field in state.
    const handleChange = (e) => {
        setSeasoning({ ...seasoning, [e.target.name]: e.target.value });
    };

    // Handler for form submission, performing validation and calling the appropriate function (add/update).
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any form fields are empty, setting an error if so.
        if (seasoning.name === '' || seasoning.jarQty === '' || seasoning.bulkQty === '') {
            setError('All fields are required.');
            return;
        }

        // Clear error message if all fields are valid.
        setError('');

        // If editing, update the existing seasoning by ID; otherwise, add a new one.
        if (selectedSeasoning) {
            updateSeasoning({ ...seasoning, id: selectedSeasoning.id });
        } else {
            // Generate a unique ID for new seasonings (Date.now() as a simple solution).
            addSeasoning({ ...seasoning, id: Date.now() });
        }

        // Reset form fields after successful submission.
        setSeasoning({ name: '', jarQty: '', bulkQty: '' });
    };

    // Form layout with fields for seasoning name, jar quantity, and bulk quantity.
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h3>{selectedSeasoning ? 'Edit Seasoning' : 'Add New Seasoning'}</h3>

                    {/* Display error message if any required field is missing */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        {/* Seasoning Name Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Seasoning Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter seasoning name"
                                value={seasoning.name}
                                onChange={handleChange}
                                isInvalid={!!error && seasoning.name === ''}
                            />
                        </Form.Group>

                        {/* Jar Quantity Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Jar Qty</Form.Label>
                            <Form.Control
                                type="number"
                                name="jarQty"
                                placeholder="Enter jar quantity"
                                value={seasoning.jarQty}
                                onChange={handleChange}
                                isInvalid={!!error && seasoning.jarQty === ''}
                            />
                        </Form.Group>

                        {/* Bulk Quantity Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Bulk Qty</Form.Label>
                            <Form.Control
                                type="number"
                                name="bulkQty"
                                placeholder="Enter bulk quantity"
                                value={seasoning.bulkQty}
                                onChange={handleChange}
                                isInvalid={!!error && seasoning.bulkQty === ''}
                            />
                        </Form.Group>

                        {/* Submit button toggles between "Add" and "Update" based on the mode */}
                        <Button variant="primary" type="submit">
                            {selectedSeasoning ? 'Update' : 'Add'} Seasoning
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SeasoningForm;
