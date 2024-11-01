// src/components/SeasoningList.js

import React from 'react';
import { Table } from 'react-bootstrap';
import SweeteningItem from './SweeteningItem';

const SweeteningList = ({ sweetenings, onDelete, onEdit }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Jar Quantity</th>
                    <th>Bulk Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {sweetenings.map((sweetening) => (
                    <SweeteningItem
                        key={sweetening.id}
                        sweetening={sweetening}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default SweeteningList;
