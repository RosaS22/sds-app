// src/pages/SeasoningsPage.js

import React, { useEffect, useState } from 'react';
import { fetchSeasonings, deleteItem } from '../services/api';
import SeasoningForm from '../components/SeasoningForm';
import SeasoningList from '../components/SeasoningList';

const SeasoningsPage = () => {
    const [seasonings, setSeasonings] = useState([]);
    const [selectedSeasoning, setSelectedSeasoning] = useState(null);

    useEffect(() => {
        const loadSeasonings = async () => {
            const data = await fetchSeasonings();
            setSeasonings(data);
        };
        loadSeasonings();
    }, []);

    const addSeasoning = (newSeasoning) => {
        setSeasonings((prev) => [...prev, newSeasoning]);
    };

    const updateSeasoning = (updatedSeasoning) => {
        setSeasonings((prev) =>
            prev.map((seasoning) =>
                seasoning.id === updatedSeasoning.id ? updatedSeasoning : seasoning
            )
        );
        setSelectedSeasoning(null); // Reset selected seasoning after update
    };

    const handleDelete = async (id) => {
        await deleteItem('seasonings', id);
        setSeasonings((prev) => prev.filter((s) => s.id !== id));
    };

    const handleEdit = (seasoning) => {
        setSelectedSeasoning(seasoning);
    };

    return (
        <div>
            <h2>Seasonings</h2>
            <SeasoningForm
                addSeasoning={addSeasoning}
                updateSeasoning={updateSeasoning}
                selectedSeasoning={selectedSeasoning}
            />
            <SeasoningList seasonings={seasonings} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
};

export default SeasoningsPage;