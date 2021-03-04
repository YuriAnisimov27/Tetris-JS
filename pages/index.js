import { connect } from 'react-redux';
import {decrementCounter, incrementCounter} from '../lib/actions/counterActions';
import { MainLayout } from '../components/Main.layout';


function Index(props) {
  const { incrementCounter, decrementCounter, counter } = props;

  return (
    <MainLayout title={'Home Page'} >
      
      <h1>Things </h1>

      {/* <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <h2>{counter}</h2>
      </div> */}
      
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
