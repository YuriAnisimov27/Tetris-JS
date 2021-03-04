import Head from 'next/head';
import Link from 'next/link';


export function MainLayout({ children, title = 'Things'}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <Link href="/things-v1"><a>Things v1</a></Link>
        <Link href="/things-v2"><a>REST verbs v2</a></Link>
        <Link href="/things"><a>Things Mongodb</a></Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
