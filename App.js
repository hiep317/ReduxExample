/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import CounterApp from './src/CounterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// Todo app
import ToDoApp from './src/ToDoApp';
import store from './src/store';

// Counter app
const defaultCounterState = {
  counter: 0,
};
const counterReducer = (state = defaultCounterState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
};
const counterStore = createStore(counterReducer);

class App extends Component {
  render() {
    return (
      /*
      <Provider store={counterStore}>
        <CounterApp />
      </Provider>
      */
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    );
  }
}

export default App;
