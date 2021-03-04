import { useState, useEffect, useCallback } from 'react';
import ThingsList from '../things-list';
import CrudSelector from '../crudSelector';
import ThingsService from '../service';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [things, setThings] = useState([]);

  const updateThingsList = useCallback(async () => {
    const thingsService = new ThingsService();

    thingsService.getThings()
      .then(things => setThings(things));
  }, []);

  useEffect(() => {
    updateThingsList()
      .then(setLoading(false));
  }, [updateThingsList]);

  return (
    <div className="App">
      <CrudSelector updateThingsList={updateThingsList} setLoading={setLoading} />
      <ThingsList updateThingsList={updateThingsList} loading={loading} things={things} />
    </div>
  );
}

export default App;
