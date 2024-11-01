// src/components/SweeteningForm.js

import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';

const SweeteningForm = ({ addSweetening, updateSweetening, selectedSweetening }) => {
    const [sweetening, setSweetening] = useState({ name: '', jarQty: '', bulkQty: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        if (selectedSweetening) {
            setSweetening(selectedSweetening);
        } else {
            setSweetening({ name: '', jarQty: '', bulkQty: '' });
        }
    }, [selectedSweetening]);

    const handleChange = (e) => {
        setSweetening({ ...sweetening, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sweetening.name === '' || sweetening.jarQty === '' || sweetening.bulkQty === '') {
            setError('All fields are required.');
            return;
        }
        setError('');

        if (selectedSweetening) {
            updateSweetening({ ...sweetening, id: selectedSweetening.id });
        } else {
            addSweetening({ ...sweetening, id: Date.now() }); // Use Date.now() for unique id
        }

        // Reset form after submitting
        setSweetening({ name: '', jarQty: '', bulkQty: '' });
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h3>{selectedSweetening ? 'Edit Sweetening' : 'Add New Sweetening'}</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
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
