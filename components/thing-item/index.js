import ThingsService from '../service';


const thingsService = new ThingsService();

const ThingItem = (props) => {
  const { id, name, label, created, updated, updateThingsList } = props;
  const timeStamp = new Date(updated || created).toLocaleString();

  return (
    <li className='things-item' onClick={(e) => {
      if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Copy ID') {
        navigator.clipboard.writeText(id);
        e.target.textContent = 'COPIED!';
        e.target.style.background = 'grey';

        setTimeout(() => {
          e.target.textContent = 'Copy ID';
          e.target.style.background = 'blue';
        }, 3000);
      } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Delete Thing') {
        thingsService.deleteThing(id)
          .then(updateThingsList);

        e.target.textContent = 'DELETED!';
        e.target.style.background = 'grey';
      }
    }} >
      ID: {id}
      <button type='button'>Copy ID</button>
      <h5 className='thing-title'>{name}</h5>
      {label ? <p>{label}</p> : null}
      <hr />
      {created ? <p>Created : {timeStamp}</p> : <p>Updated: {timeStamp}</p>}
      <button type='button' className='btn btn-long'>Delete Thing</button>
    </li>
  )
};

export default ThingItem;
