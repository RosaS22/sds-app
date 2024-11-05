
import React, { useEffect, useState } from 'react';
import { fetchSweetenings, deleteItem, addItem, updateItem } from '../services/api';
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
        loadSweetenings(); // load sweetenings from the API
    }, []);

    const addSweetening = async (newSweetening) => {
        const createdSweetening = await addItem('sweetenings', newSweetening);
        setSweetenings((prev) => [...prev, createdSweetening]);
    }; // Add new sweetening

    const updateSweetening = async (updatedSweetening) => {
        await updateItem('sweetenings', updatedSweetening.id, updatedSweetening)
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
  }; // Delete sweetening

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
