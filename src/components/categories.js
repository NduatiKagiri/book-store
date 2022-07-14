import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(checkStatus());
  };

  const divStyle = {
    width: '80%',
    paddingTop: '100px',
    textAlign: 'center',
  };

  const buttonStyle = {
    width: '150px',
    height: '40px',
  };

  return (
    <div style={divStyle}>
      <button
        style={buttonStyle}
        type="button"
        onClick={handleCheck}
      >
        Check Status
      </button>
      <div>{categories}</div>
    </div>
  );
};

export default Categories;
