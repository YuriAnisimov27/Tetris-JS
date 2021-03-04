import {Router} from 'react-router-dom';
import App from '../components/app';
import { MainLayout } from '../components/Main.layout';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();


export default function Thingsv1() {

  return (
    <MainLayout title={'Things'} >
      <Router history={history}>
        <App />
      </Router>
    </MainLayout> 
  )
}
