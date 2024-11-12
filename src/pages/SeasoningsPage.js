// src/pages/SeasoningsPage.js

import React, { useEffect, useState } from 'react';
import { fetchSeasonings, deleteItem, addItem, updateItem } from '../services/api';
import SeasoningForm from '../components/SeasoningForm';
import SeasoningList from '../components/SeasoningList';

// SeasoningsPage component is responsible for displaying and managing seasonings data.
// This page provides form controls for adding and updating seasonings, as well as a list of current seasonings.
const SeasoningsPage = () => {
    // State to store the list of seasonings and the currently selected seasoning for editing
    const [seasonings, setSeasonings] = useState([]);
    const [selectedSeasoning, setSelectedSeasoning] = useState(null);

    // useEffect hook loads seasonings from the API when the component mounts
    useEffect(() => {
        const loadSeasonings = async () => {
            const data = await fetchSeasonings(); // Fetches seasonings from the API
            setSeasonings(data);                  // Sets the fetched data to state
        };
        loadSeasonings(); // Load seasonings initially
    }, []);

    // Function to add a new seasoning by sending data to the API
    const addSeasoning = async (newSeasoning) => {
        const createdSeasoning = await addItem('seasonings', newSeasoning); // Adds new seasoning through API
        setSeasonings((prev) => [...prev, createdSeasoning]);               // Updates the list with new seasoning
    };

    // Function to update an existing seasoning by sending data to the API
    const updateSeasoning = async (updatedSeasoning) => {
        await updateItem('seasonings', updatedSeasoning.id, updatedSeasoning); // Sends updated seasoning to API
        setSeasonings((prev) =>
            prev.map((seasoning) =>
                seasoning.id === updatedSeasoning.id ? updatedSeasoning : seasoning
            )
        ); // Updates the list in state
        setSelectedSeasoning(null); // Reset selected seasoning after successful update
    };

    // Function to delete a seasoning from the API and update the state
    const handleDelete = async (id) => {
        await deleteItem('seasonings', id); // Deletes seasoning from the API
        setSeasonings((prev) => prev.filter((s) => s.id !== id)); // Removes deleted item from state
    };

    // Sets the selected seasoning to be edited when the edit button is clicked
    const handleEdit = (seasoning) => {
        setSelectedSeasoning(seasoning); // Stores the selected seasoning in state
    };

    return (
        <div>
            {/* Page header */}
            <h2>Seasonings</h2>

            {/* Form component for adding or editing a seasoning */}
            <SeasoningForm
                addSeasoning={addSeasoning}
                updateSeasoning={updateSeasoning}
                selectedSeasoning={selectedSeasoning}
            />

            {/* List component displaying all seasonings with edit and delete options */}
            <SeasoningList
                seasonings={seasonings}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
        </div>
    );
};

export default SeasoningsPage;
