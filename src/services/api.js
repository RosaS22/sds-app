// src/services/api.js

const BASE_URL = 'https://67286671270bd0b975553f4d.mockapi.io';

// Fetch all items for a specific resource
export const fetchItems = async (resource) => {
  const response = await fetch(`${BASE_URL}/${resource}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Add a new item to a specific resource
export const addItem = async (resource, newItem) => {
  const response = await fetch(`${BASE_URL}/${resource}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Update an existing item in a specific resource
export const updateItem = async (resource, id, updatedItem) => {
  const response = await fetch(`${BASE_URL}/${resource}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedItem),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Delete an item from a specific resource
export const deleteItem = async (resource, id) => {
  const response = await fetch(`${BASE_URL}/${resource}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};

// Fetch seasonings
export const fetchSeasonings = () => fetchItems('seasonings');

// Add a new seasoning
export const addSeasoning = (newSeasoning) => addItem('seasonings', newSeasoning);

// Update an existing seasoning
export const updateSeasoning = (id, updatedSeasoning) => updateItem('seasonings', id, updatedSeasoning);

// Delete a seasoning
export const deleteSeasoning = (id) => deleteItem('seasonings', id);

// Fetch sweetenings
export const fetchSweetenings = () => fetchItems('sweetenings');

// Add a new sweetening
export const addSweetening = (newSweetening) => addItem('sweetenings', newSweetening);

// Update an existing sweetening
export const updateSweetening = (id, updatedSweetening) => updateItem('sweetenings', id, updatedSweetening);

// Delete a sweetening
export const deleteSweetening = (id) => deleteItem('sweetenings', id);

// Fetch miscellaneous items
export const fetchMiscItems = () => fetchItems('miscItems');

// Add a new miscellaneous item
export const addMiscItem = (newMiscItem) => addItem('miscItems', newMiscItem);

// Update an existing miscellaneous item
export const updateMiscItem = (id, updatedMiscItem) => updateItem('miscItems', id, updatedMiscItem);

// Delete a miscellaneous item
export const deleteMiscItem = (id) => deleteItem('miscItems', id);

// Fetch samplers
export const fetchSamplers = () => fetchItems('samplers');

// Add a new sampler
export const addSampler = (newSampler) => addItem('samplers', newSampler);

// Update an existing sampler
export const updateSampler = (id, updatedSampler) => updateItem('samplers', id, updatedSampler);

// Delete a sampler
export const deleteSampler = (id) => deleteItem('samplers', id);
