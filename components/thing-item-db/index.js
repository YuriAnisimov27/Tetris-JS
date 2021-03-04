import Link from 'next/link';


const ThingItemDb = (props) => {
  const { el } = props;

  return (
    <Link href={`/thing/${el._id}`} >
      <li className='things-item'>
        <a>{el.name}</a>    
      </li>
    </Link> 
  )
}

export default ThingItemDb;
