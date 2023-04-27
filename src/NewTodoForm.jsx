/* eslint-disable react/prop-types */
/** @format */

import { useState } from 'react';

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === '') return;

    onSubmit(newItem);

    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type='text'
          id='item'
        />
      </div>
      <button className='btn'>Add</button>
    </form>
  );
}
