import { useState } from 'react';
import { MainLayout } from '../../components/Main.layout';
import Crud from '.';
import ThingsService from '../../components/service';


export default function PostThing() {
  const [inputName, setInputName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const thingsService = new ThingsService();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let data;

    if (inputName) {
      data = {
        name: inputName,
        value: inputValue
      };

      thingsService.postThingDb(data);
    }
    setInputName('');
    setInputValue('');
  };

  return (
    <MainLayout title={'POST'} >
      <Crud />
      <h2>PostThing</h2>
      <form onSubmit={handleSubmit}>
          <input
            required
            className='input-text' type="text"
            value={inputName}
            onChange={({ target: { value } }) => setInputName(value)}
            placeholder='Enter name...' />
          <br />

          <input
            className='input-text' type="text"
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
            placeholder='Type here...' />
          <br />
          
          <input className='btn' type="submit" value="POST" />
        </form>
    </MainLayout> 
  )
}
