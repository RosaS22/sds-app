// src/components/SweeteningItem.js

import React from 'react';
import { Button } from 'react-bootstrap';

// SweeteningItem component represents a single row in the sweetening list table.
// Props:
// - sweetening: Object containing details of a single sweetening item (name, jar quantity, bulk quantity).
// - onDelete: Function to handle the deletion of this sweetening item.
// - onEdit: Function to handle editing this sweetening item.
const SweeteningItem = ({ sweetening, onDelete, onEdit }) => {
    return (
        <tr>
            {/* Display the name, jar quantity, and bulk quantity of the sweetening item */}
            <td>{sweetening.name}</td>
            <td>{sweetening.jarQty}</td>
            <td>{sweetening.bulkQty}</td>
            
            <td>
                {/* Edit button triggers the onEdit function with the current sweetening item */}
                <Button variant="warning" onClick={() => onEdit(sweetening)}>Edit</Button>{' '}
                
                {/* Delete button triggers the onDelete function with the sweetening item's ID */}
                <Button variant="danger" onClick={() => onDelete(sweetening.id)}>Delete</Button>
            </td>
        </tr>
    );
};

export default SweeteningItem;
