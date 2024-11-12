// src/components/SeasoningList.js

import React from 'react';
import { Table } from 'react-bootstrap';
import SeasoningItem from './SeasoningItem';

// SeasoningList component displays a table of all seasoning items.
// Props:
// - seasonings: Array of seasoning objects to be displayed in the list.
// - onDelete: Callback function to handle the deletion of a seasoning item.
// - onEdit: Callback function to handle editing a seasoning item.
const SeasoningList = ({ seasonings, onDelete, onEdit }) => {
    return (
        // Bootstrap table with striped, bordered, and hover styles
        <Table striped bordered hover>
            <thead>
                <tr>
                    {/* Table headers to describe each column */}
                    <th>Name</th>
                    <th>Jar Quantity</th>
                    <th>Bulk Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Map through each seasoning item and render a SeasoningItem component */}
                {seasonings.map((seasoning) => (
                    <SeasoningItem
                        key={seasoning.id}        // Unique key for each item in the list
                        seasoning={seasoning}      // Pass the seasoning object to SeasoningItem
                        onDelete={onDelete}        // Pass down the onDelete handler
                        onEdit={onEdit}            // Pass down the onEdit handler
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default SeasoningList;
