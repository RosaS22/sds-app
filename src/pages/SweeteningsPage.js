// src/pages/SweeteningsPage.js

import React, { useEffect, useState } from 'react';
import { fetchSweetenings, deleteItem, addItem, updateItem } from '../services/api';
import SweeteningForm from '../components/SweeteningForm';
import SweeteningList from '../components/SweeteningList';

// SweeteningsPage component manages the data and user interface for sweetenings.
// It allows users to add, update, delete, and view a list of sweetenings.
const SweeteningsPage = () => {
    // State to store the list of sweetenings and the currently selected sweetening for editing
    const [sweetenings, setSweetenings] = useState([]);
    const [selectedSweetening, setSelectedSweetening] = useState(null);

    // useEffect hook loads sweetenings from the API when the component mounts
    useEffect(() => {
        const loadSweetenings = async () => {
            const data = await fetchSweetenings(); // Fetches sweetenings from the API
            setSweetenings(data);                  // Sets the fetched data to state
        };
        loadSweetenings(); // Trigger the initial load of sweetenings
    }, []);

    // Function to add a new sweetening by sending data to the API
    const addSweetening = async (newSweetening) => {
        const createdSweetening = await addItem('sweetenings', newSweetening); // Adds new sweetening through API
        setSweetenings((prev) => [...prev, createdSweetening]);                // Updates the list with new sweetening
    };

    // Function to update an existing sweetening by sending data to the API
    const updateSweetening = async (updatedSweetening) => {
        await updateItem('sweetenings', updatedSweetening.id, updatedSweetening); // Sends updated sweetening to API
        setSweetenings((prev) =>
            prev.map((sweetening) =>
                sweetening.id === updatedSweetening.id ? updatedSweetening : sweetening
            )
        ); // Updates the list in state
        setSelectedSweetening(null); // Reset selected sweetening after update
    };

    // Function to delete a sweetening from the API and update the state
    const handleDelete = async (id) => {
        await deleteItem('sweetenings', id); // Deletes sweetening from the API
        setSweetenings((prev) => prev.filter((s) => s.id !== id)); // Removes deleted item from state
    };

    // Sets the selected sweetening to be edited when the edit button is clicked
    const handleEdit = (sweetening) => {
        setSelectedSweetening(sweetening); // Stores the selected sweetening in state
    };

    return (
        <div>
            {/* Page header */}
            <h2>Sweetenings</h2>

            {/* Form component for adding or editing a sweetening */}
            <SweeteningForm
                addSweetening={addSweetening}
                updateSweetening={updateSweetening}
                selectedSweetening={selectedSweetening}
            />

            {/* List component displaying all sweetenings with edit and delete options */}
            <SweeteningList
                sweetenings={sweetenings}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
        </div>
    );
};

export default SweeteningsPage;
