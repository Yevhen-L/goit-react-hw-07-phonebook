import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      Filter contacts by name:
      <input type="text" onChange={handleFilterChange} />
    </>
  );
};

export default Filter;
