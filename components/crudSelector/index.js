import { Route, Switch } from 'react-router-dom';
import Verbs from '../routes';
import GetPage from '../pages/GetPage';
import PostPage from '../pages/PostPage';
import PutPage from '../pages/PutPage';
import DeletePage from '../pages/DeletePage';


const CrudSelector = (props) => {
  const { updateThingsList, setLoading } = props;

  return (
    <div className='appthings-controls'>
      <Verbs />

      <Switch>
        <Route path='/' render={() => <GetPage updateThingsList={updateThingsList}
          setLoading={setLoading} />} exact />
        <Route path='/post' render={() => <PostPage updateThingsList={updateThingsList}
          setLoading={setLoading} />} />
        <Route path='/put' render={() => <PutPage updateThingsList={updateThingsList}
          setLoading={setLoading} />} /> 
        <Route path='/delete' render={() => <DeletePage updateThingsList={updateThingsList}
          setLoading={setLoading} />} />    
        <Route render={() => <p>404 - Fatal Error</p>}/>
      </Switch>

    </div>
  )
}

export default CrudSelector;
