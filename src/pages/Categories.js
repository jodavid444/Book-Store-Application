import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(statusCheck());
        }}
      >
        Check status
      </button>
      <h1>{status}</h1>
    </>
  );
};

export default Categories;
