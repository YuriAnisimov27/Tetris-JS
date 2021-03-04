import { Link } from 'react-router-dom';


const Verbs = () => {
  return (
    <div className='nav' >
      <Link to="/">
        <div className='nav-link'>GET</div>
      </Link>

      <Link to="/post">
        <div className='nav-link'>POST</div>
      </Link>

      <Link to="/put">
        <div className='nav-link'>PUT</div>
      </Link>

      <Link to="/delete">
        <div className='nav-link'>DELETE</div>
      </Link>
    </div>
  )
};

export default Verbs;
