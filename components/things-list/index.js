import Spinner from '../spinner/Spinner';
import ThingItem from '../thing-item';


const ThingsList = (props) => {
  const { things, updateThingsList, loading } = props;

  const items = things.map((item) => {
    const { id, name, created = null, updated = null, label = null } = item;

    return (
      <ThingItem
        id={ id }
        name={ name }
        label={ label }
        created={ created }
        updated={ updated }
        updateThingsList={ updateThingsList }
        key={ id } />
    );
  });

  if (loading) {
    return (
      <div className='appthings-list'>
      <h2>Current Things List</h2>
      <Spinner/>
    </div>
    )
  }

  return (
    <div className='appthings-list'>
      <h2>Current Things List</h2>
      {things.length
        ? <ul className='things-list'>{ items }</ul>
        : <h3>No Any Things Yet</h3>}
    </div>
  );
};

export default ThingsList;
