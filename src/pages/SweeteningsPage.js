// src/pages/SweeteningsPage.js

import React, { useEffect, useState } from 'react';
import { fetchSweetenings, deleteItem } from '../services/api';
import SweeteningForm from '../components/SweeteningForm';
import SweeteningList from '../components/SweeteningList';

const SweeteningsPage = () => {
    const [sweetenings, setSweetenings] = useState([]);
    const [selectedSweetening, setSelectedSweetening] = useState(null);

    useEffect(() => {
        const loadSweetenings = async () => {
            const data = await fetchSweetenings();
            setSweetenings(data);
        };
        loadSweetenings();
    }, []);

    const addSweetening = (newSweetening) => {
        setSweetenings((prev) => [...prev, newSweetening]);
    };

    const updateSweetening = (updatedSweetening) => {
        setSweetenings((prev) =>
            prev.map((sweetening) =>
                sweetening.id === updatedSweetening.id ? updatedSweetening : sweetening
            )
        );
        setSelectedSweetening(null); // Reset selected sweetening after update
    };

    const handleDelete = async (id) => {
      await deleteItem('sweetenings', id);
      setSweetenings((prev) => prev.filter((s) => s.id !== id));
  };

    const handleEdit = (sweetening) => {
        setSelectedSweetening(sweetening);
    };

    return (
        <div>
            <h2>Sweetenings</h2>
            <SweeteningForm
                addSweetening={addSweetening}
                updateSweetening={updateSweetening}
                selectedSweetening={selectedSweetening}
            />
            <SweeteningList sweetenings={sweetenings} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
};

export default SweeteningsPage;
