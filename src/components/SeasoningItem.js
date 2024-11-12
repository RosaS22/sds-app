// src/components/SeasoningItem.js

import React from 'react';
import { Button } from 'react-bootstrap';

// SeasoningItem component represents a single row in a table for a seasoning item.
// Props:
// - seasoning: The seasoning object containing name, jar quantity, and bulk quantity.
// - onDelete: Callback function to delete this seasoning item.
// - onEdit: Callback function to edit this seasoning item.
const SeasoningItem = ({ seasoning, onDelete, onEdit }) => {
    return (
        <tr>
            {/* Display the seasoning's name */}
            <td>{seasoning.name}</td>

            {/* Display the quantity in jars */}
            <td>{seasoning.jarQty}</td>

            {/* Display the bulk quantity */}
            <td>{seasoning.bulkQty}</td>

            {/* Action buttons for editing and deleting the item */}
            <td>
                {/* Edit button triggers onEdit with the full seasoning object */}
                <Button variant="warning" onClick={() => onEdit(seasoning)}>Edit</Button>{' '}
                
                {/* Delete button triggers onDelete with the seasoning ID only */}
                <Button variant="danger" onClick={() => onDelete(seasoning.id)}>Delete</Button>
            </td>
        </tr>
    );
};

export default SeasoningItem;
