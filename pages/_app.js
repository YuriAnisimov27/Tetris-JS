import NextNProgress from '../components/NextNProgress';
import { wrapper } from '../lib/store';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="blue"
        startPosition={0.3}
        stopDelayMs={200}
        height="4"
      />
      
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return {
    pageProps
  };
}

export default wrapper.withRedux(MyApp);
