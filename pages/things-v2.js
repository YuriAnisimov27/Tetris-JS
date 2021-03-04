import { MainLayout } from '../components/Main.layout';
import Link from 'next/link';


export default function Crud() {

  return (
    <MainLayout title={'REST Verbs'} >
      <nav className='nav-crud'>
        <Link href="/things-v2/get"><a>GET</a></Link>
        <Link href="/things-v2/post"><a>POST</a></Link>
        <Link href="/things-v2/put"><a>PUT</a></Link>
        <Link href="/things-v2/delete"><a>DELETE</a></Link>
      </nav>
    </MainLayout> 
  )
}
