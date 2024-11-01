// src/components/SeasoningForm.js

import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';

const SeasoningForm = ({ addSeasoning, updateSeasoning, selectedSeasoning }) => {
    const [seasoning, setSeasoning] = useState({ name: '', jarQty: '', bulkQty: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        if (selectedSeasoning) {
            setSeasoning(selectedSeasoning);
        } else {
            setSeasoning({ name: '', jarQty: '', bulkQty: '' });
        }
    }, [selectedSeasoning]);

    const handleChange = (e) => {
        setSeasoning({ ...seasoning, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (seasoning.name === '' || seasoning.jarQty === '' || seasoning.bulkQty === '') {
            setError('All fields are required.');
            return;
        }
        setError('');

        if (selectedSeasoning) {
            updateSeasoning({ ...seasoning, id: selectedSeasoning.id });
        } else {
            addSeasoning({ ...seasoning, id: Date.now() }); // Use Date.now() for unique id
        }

        // Reset form after submitting
        setSeasoning({ name: '', jarQty: '', bulkQty: '' });
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h3>{selectedSeasoning ? 'Edit Seasoning' : 'Add New Seasoning'}</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
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
