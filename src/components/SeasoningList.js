// src/components/SeasoningList.js

import React from 'react';
import { Table } from 'react-bootstrap';
import SeasoningItem from './SeasoningItem';

const SeasoningList = ({ seasonings, onDelete, onEdit }) => {
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
                {seasonings.map((seasoning) => (
                    <SeasoningItem
                        key={seasoning.id}
                        seasoning={seasoning}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default SeasoningList;
