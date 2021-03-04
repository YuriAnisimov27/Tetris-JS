import React, { useState, useRef } from 'react';
import ThingsService from '../service';


const PostPage = (props) => {
  const [placeholder, setPlaceholder] = useState('Enter name...');
  const [inputValuePOST, setInputValuePOST] = useState('');
  const [labelValuePOST, setLabelValuePOST] = useState('');
  const inputEl = useRef(null);
  const { updateThingsList, setLoading } = props;

  const thingsService = new ThingsService();

  const handleSubmitPOST = (event) => {
    event.preventDefault();

    if (!inputValuePOST) {
      inputEl.current.classList.add('placeholder-color');
      setPlaceholder('Name is Required!');
    } else {
      const data = {
        name: inputValuePOST,
        label: labelValuePOST,
        created: Date.now()
      };
      setLoading(true);

      thingsService.postThing(data)
        .then(updateThingsList)
        .then(() => setLoading(false));

      setLabelValuePOST('');
      setInputValuePOST('');
      setPlaceholder('Enter name...');
      inputEl.current.classList.remove('placeholder-color');
    }
  };
  
  return (
    <form onSubmit={ handleSubmitPOST }>
      <input
        ref={ inputEl }
        className='input-text' type="text"
        value={ inputValuePOST }
        onChange={({target: {value}}) => setInputValuePOST(value)}
        placeholder={placeholder} />
      <br/>

      <input
        className='input-text' type="text"
        value={ labelValuePOST }
        onChange={({target: {value}}) => setLabelValuePOST(value)}
        placeholder='Type here...' />
      <br/>
      
      <input className='btn' type="submit" value="POST" />
    </form>
  );
};

export default PostPage;
