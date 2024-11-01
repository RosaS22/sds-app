// src/components/SweeteningItem.js

import React from 'react';
import { Button } from 'react-bootstrap';

const SweeteningItem = ({ sweetening, onDelete, onEdit }) => {
    return (
        <tr>
            <td>{sweetening.name}</td>
            <td>{sweetening.jarQty}</td>
            <td>{sweetening.bulkQty}</td>
            <td>
                <Button variant="warning" onClick={() => onEdit(sweetening)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => onDelete(sweetening.id)}>Delete</Button>
            </td>
        </tr>
    );
};

export default SweeteningItem;
