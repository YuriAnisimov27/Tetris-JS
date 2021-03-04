import React, { useState, useRef } from 'react';
import ThingsService from '../service';


const PutPage = (props) => {
  const [placeholderID, setPlaceholderID] = useState('Enter ID...');
  const [placeholderName, setPlaceholderName] = useState('Enter name...');
  const [idValuePUT, setIdValuePUT] = useState('');
  const [inputValuePUT, setInputValuePUT] = useState('');
  const [labelValuePUT, setLabelValuePUT] = useState('');
  const inputId = useRef(null);
  const inputName = useRef(null);
  const { updateThingsList, setLoading } = props;

  const thingsService = new ThingsService();

  const handleSubmitPUT = (event) => {
    event.preventDefault();

    if (!inputValuePUT || !idValuePUT) {
      inputId.current.classList.add('placeholder-color');
      inputName.current.classList.add('placeholder-color');
      setPlaceholderID('ID is Required!');
      setPlaceholderName('Name is Required!');
    } else {
      const data = {
        id: idValuePUT,
        name: inputValuePUT,
        label: labelValuePUT,
        updated: Date.now()
      };

      setLoading(true);

      thingsService.putThing(idValuePUT, data)
        .then(updateThingsList)
        .then(() => setLoading(false));

      setIdValuePUT('');
      setLabelValuePUT('');
      setInputValuePUT('');
      inputId.current.classList.remove('placeholder-color');
      inputName.current.classList.remove('placeholder-color');
      setPlaceholderID('Enter ID...');
      setPlaceholderName('Enter name...');
    }
  };
  
  return (
    <form onSubmit={ handleSubmitPUT }>
      <input
        ref={ inputId }
        className='input-text' type="text"
        value={ idValuePUT }
        onChange={({target: {value}}) => setIdValuePUT(value)}
        placeholder={ placeholderID } />
      <br/>

      <input
        ref={ inputName }
        className='input-text' type="text"
        value={ inputValuePUT }
        onChange={({target: {value}}) => setInputValuePUT(value)}
        placeholder={ placeholderName } />
      <br/>

      <input
        className='input-text' type="text"
        value={ labelValuePUT }
        onChange={({target: {value}}) => setLabelValuePUT(value)}
        placeholder='Type here...' />
      <br />
      
      <input className='btn' type="submit" value="PUT" />
    </form>
  );
};

export default PutPage;
