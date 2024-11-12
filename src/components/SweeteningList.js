// src/components/SweeteningList.js

import React from 'react';
import { Table } from 'react-bootstrap';
import SweeteningItem from './SweeteningItem';

// SweeteningList component displays a list of sweetening items in a table format.
// Props:
// - sweetenings: Array of sweetening objects to display in the table.
// - onDelete: Function to handle deletion of a sweetening item, passed down to each SweeteningItem.
// - onEdit: Function to handle editing of a sweetening item, passed down to each SweeteningItem.
const SweeteningList = ({ sweetenings, onDelete, onEdit }) => {
    return (
        <Table striped bordered hover>
            {/* Table header with columns for sweetening properties and actions */}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Jar Quantity</th>
                    <th>Bulk Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>

            {/* Table body iterates over sweetenings array and renders each item */}
            <tbody>
                {sweetenings.map((sweetening) => (
                    <SweeteningItem
                        key={sweetening.id}          // Unique key for each item
                        sweetening={sweetening}      // Sweetening data passed to SweeteningItem
                        onDelete={onDelete}          // Delete function passed down
                        onEdit={onEdit}              // Edit function passed down
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default SweeteningList;
