import { useState, useEffect } from 'react';
import { MainLayout } from '../components/Main.layout';
import Spinner from '../components/spinner/Spinner';
import ThingsService from '../components/service';
import ThingItemDb from '../components/thing-item-db';


export default function Things({ things: serverThings }) {
  const [things, setThings] = useState(serverThings);
  const thingsService = new ThingsService();

  useEffect(() => {
    if (!serverThings) {
      thingsService.getThingsDbAll()
        .then(data => setThings(data));
    }
  }, []);

  if (!things) {
    return (
      <MainLayout title={'Things Mongodb'} >
        <Spinner/>
      </MainLayout>
    )
  }

  return (
    <MainLayout title={'Things Mongodb'} >
      <h1>Things page</h1>
      <ul>
        {things.map(el => <ThingItemDb el={el} key={el._id} />)}
      </ul>
    </MainLayout>
  )
}

Things.getInitialProps = async ({ req }) => {
  if (!req) {
    return {
      things: null
    };
  }

  const thingsService = new ThingsService();
  const things = await thingsService.getThingsDbAll();
  return { things };
}
