import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MainLayout } from '../../components/Main.layout';
import Spinner from '../../components/spinner/Spinner';
import ThingsService from '../../components/service';

export default function Post({ thing: serverThing }) {
  const router = useRouter();
  const currentId = router.query.id;
  const [thing, setThing] = useState(serverThing);
  const [isDeleted, setIsDeleted] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const thingsService = new ThingsService();

  useEffect(() => {
    async function load() {
      const things = await thingsService.getThingsDbAll();
      const data = things.find(el => el._id === currentId);

      return data;
    }

    if (!serverThing) {
      load()
        .then(data => setThing(data));
    }
  }, []);

  if (!thing) {
    return (
      <MainLayout>
        <Spinner/>
      </MainLayout>
    )
  }

  const deleteBtnHandler = () => {
    thingsService.deleteThingDb(currentId)
      .then(setIsDeleted(true));
  };

  const addDataSubmit = (event) => {
    event.preventDefault();
    const { name, value = '' } = thing;
    const thingUpdateData = {
      value: {}
    };
    thingUpdateData.value[name] = value;

    if (inputName) {
      thingUpdateData.value = typeof thing.value === 'object'
        ? { ...thing.value }
        : { [name]: value };

      thingUpdateData.value[inputName] = inputValue;
      thingsService.putThingDb(currentId, {
        name: thing.name,
        value: {...thingUpdateData.value}
      })
        .then(() => setThing({
          _id: currentId,
          name: thing.name,
          value: {...thingUpdateData.value}
        }));
    }

    setInputName('');
    setInputValue('');
  }

  if (isDeleted) {
    return (
      <MainLayout>
        <h1>Thing: {thing.name} deleted!</h1>
        <hr />
        <p>
          <Link href="/things">
            <button className='btn-return' type='button'>
              Bact to all things
            </button>
          </Link>
        </p>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <h1>Thing: {thing.name} </h1>
      <button className='btn-delete' type='button' onClick={deleteBtnHandler} >Delete Thing</button>
      <hr />
      <h4>ID: {thing._id} </h4>
      <hr />
      Value: &nbsp; {JSON.stringify(thing.value, null, 2)}
      <br />
      <form onSubmit={addDataSubmit}>
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
          
        <input className='btn' type="submit" value="Add data" />
      </form>
      <hr />
      <p>
        <Link href="/things">
          <button className='btn-return' type='button'>Bact to all things</button>
        </Link>
      </p>
    </MainLayout>
  )
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return {
      thing: null
    };
  }

  const thingsService = new ThingsService();
  const things = await thingsService.getThingsDbAll();
  const thing = things.find(el => el._id === query.id);
  return {
    thing
  };
}
