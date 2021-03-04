import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/Main.layout';
import Crud from '.';
import ThingItemDb from '../../components/thing-item-db';
import Spinner from '../../components/spinner/Spinner';
import ThingsService from '../../components/service';


export default function GetThing({ things: serverThings }) {
  const [things, setThings] = useState(serverThings);
  const [limit, setLimit] = useState(10);
  const [buttonsCount, setButtonsCount] = useState(1);
  const [data, setData] = useState(things);
  const thingsService = new ThingsService();

  useEffect(() => {
    if (things) {
      setButtonsCount(() => Math.ceil(things.length / limit));
    }

    if (!serverThings) {
      thingsService.getThingsDbAll()
        .then(data => {
          setThings(() => data);
          setData(() => data);
          setButtonsCount(() => Math.ceil(data.length / limit));
        })
    }
  }, []);

  if (!things) {
    return (
      <MainLayout title={'Things | GET'} >
        <Crud />
        <Spinner/>
      </MainLayout>
    )
  }

  const buttons = [...Array(buttonsCount || 10).keys()];
  const btnHandler = (num) => {
    thingsService.loadWithPagination(num, limit)
      .then(data => setData(data))
  }

  return (
    <MainLayout title={'Things | GET'} >
      <Crud />
      <h2>Total things count: {things.length}</h2>
      <hr/>
      <form>
        <label>
          Limit:
          <input
            className='input-text'
            onChange={({ target: { value } }) => {
              value = +value;
              if (typeof value !== 'number') {
                value = 10;
              }
              if (!value || value < 1) {
                value = 10;
              }
              setLimit(value);
              setButtonsCount(() => Math.ceil(things.length / value));
            }}
            type="text" name="name" placeholder='Default: 10' />
        </label>
      </form>
      <hr/>
      {buttons.map(el => (
        <button key={el + 1} onClick={() => btnHandler(el + 1)} >{el + 1}</button>
      ))}
      <hr />
      <ul>
        {data && data.map(el => <ThingItemDb el={el} key={el._id} />)}
      </ul>
    </MainLayout> 
  )
}

GetThing.getInitialProps = async ({ req }) => {
  if (!req) {
    return {
      things: null
    };
  }

  const thingsService = new ThingsService();
  const things = await thingsService.getThingsDbAll();
  return { things };
}
