import React from 'react';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onFilterContacts }) => {
  const idFilter = nanoid(5);
  return (
    <label htmlFor={idFilter}>
      Find contacts by name
      <input
        id={idFilter}
        type="text"
        placeholder="Enter a name"
        value={value}
        onChange={onFilterContacts}
      />
    </label>
  );
};
