import React, { useRef } from 'react';

const Form = ({ setCities, setSearch }) => {
  const refContainer = useRef(null);
  const submitHandler = e => {
    e.preventDefault();
    setSearch(refContainer.current.value);
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
    <form onSubmit={submitHandler}>
      <input type="text" ref={refContainer} />
    </form>
  );
};

export default Form;
