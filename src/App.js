import React from 'react';

const medicines = [
  { id: 1, name: 'Medicine 1', description: 'This is medicine 1' },
  { id: 2, name: 'Medicine 2', description: 'This is medicine 2' },
  { id: 3, name: 'Medicine 3', description: 'This is medicine 3' },
  // Add more medicine objects as needed
];

const MedicineList = () => {
  return (
    <div>
      <h2>Medicine List</h2>
      {medicines.map((medicine) => (
        <div key={medicine.id}>
          <h3>{medicine.name}</h3>
          <p>{medicine.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
