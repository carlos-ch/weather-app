import React, { useRef } from 'react';
import './styles/Form.css';
import searchIcon from './styles/search.svg';

const Form = ({ setCities }) => {
  const refContainer = useRef(null);
  const submitHandler = e => {
    e.preventDefault();
    getCityData();
    refContainer.current.value = '';
  };
  const getCityData = async () => {
    const response = await fetch(`/search/${refContainer.current.value}`)
      .then(res => res.json())
      .then(res => res);
    setCities(response);
  };
  return (
    <div className="form-wrapper">
      <div className="form--box">
        <form className="form" onSubmit={submitHandler}>
          <input className="form--input" type="text" ref={refContainer} />
        </form>
        <img src={searchIcon} className="search--icon" alt="search" />
      </div>
    </div>
  );
};

export default Form;
