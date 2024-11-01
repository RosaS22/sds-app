// src/components/SeasoningItem.js

import React from 'react';
import { Button } from 'react-bootstrap';

const SeasoningItem = ({ seasoning, onDelete, onEdit }) => {
    return (
        <tr>
            <td>{seasoning.name}</td>
            <td>{seasoning.jarQty}</td>
            <td>{seasoning.bulkQty}</td>
            <td>
                <Button variant="warning" onClick={() => onEdit(seasoning)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => onDelete(seasoning.id)}>Delete</Button>
            </td>
        </tr>
    );
};

export default SeasoningItem;
