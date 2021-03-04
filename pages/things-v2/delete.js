import { useState } from 'react';
import { MainLayout } from '../../components/Main.layout';
import Crud from '.';
import ThingsService from '../../components/service';


export default function DeleteThing() {
  const [inputId, setInputId] = useState('');
  const thingsService = new ThingsService();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputId) {
      thingsService.deleteThingDb(inputId);
    }
    setInputId('');
  };

  return (
    <MainLayout title={'DELETE'} >
      <Crud />
      <h2>DeleteThing</h2>

      <form onSubmit={handleSubmit}>
        <input
          required
          className='input-text' type="text"
          value={inputId}
          onChange={({ target: { value } }) => setInputId(value)}
          placeholder='Enter ID...' />
        <br />
          
        <input className='btn' type="submit" value="DELETE" />
      </form>
    </MainLayout> 
  )
}
