import React from 'react';
import { connect } from 'react-redux';
// import { incrementCounter } from '../store/actions';

var incrementCounter = () => ({
  type: 'INCREMENT_COUNTER',
})

const App = (props) =>
  <div>
    {console.log('props', props)}
    Hello World<br/>
    {props.count} <br/>
    <button onClick={props.incrementCounter}>Click Me</button>
  </div>;

// const mapStateToProps = (state) => ({
//   count: console.log('state1111', state)
// });

const getStateFromStateTreeAndPassDownAsProps = function(state) {
  console.log('22 state', state);
  return {count: state.globals.count};
};

export default connect(getStateFromStateTreeAndPassDownAsProps, {incrementCounter} )(App);


// connect
// pass state as props
// action creators
// container component
