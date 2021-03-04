import React, { useState, useRef } from 'react';
import ThingsService from '../service';


const DeletePage = (props) => {
  const [placeholder, setPlaceholder] = useState('Enter ID...');
  const [idValueDELETE, setIdValueDELETE] = useState('');
  const inputEl = useRef(null);
  const { updateThingsList, setLoading } = props;

  const thingsService = new ThingsService();

  const handleSubmitDELETE = (event) => {
    event.preventDefault();

    if (!idValueDELETE) {
      inputEl.current.classList.add('placeholder-color');
      setPlaceholder('ID is Required!');
    } else {
      setLoading(true);

      thingsService.deleteThing(idValueDELETE)
        .then(updateThingsList)
        .then(() => setLoading(false));

      setIdValueDELETE('');
      inputEl.current.classList.remove('placeholder-color');
      setPlaceholder('Enter ID...');
    }
  };
  
  return (
    <form onSubmit={ handleSubmitDELETE }>
      <input
        ref={ inputEl }
        className='input-text' type="text"
        value={ idValueDELETE }
        onChange={({target: {value}}) => setIdValueDELETE(value)}
        placeholder={ placeholder } />

      <br/>
      <input className='btn' type="submit" value="DELETE" />
    </form>
  );
};

export default DeletePage;
