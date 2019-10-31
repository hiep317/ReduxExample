/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';
import FilterView from './components/FilterView';
('./containers/VisibleTodo');

class ToDoApp extends Component {
  state = {
    todos: [],
    visibilityFilter: 'SHOW_ALL_TODOS',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AddTodo />
        <FilterView />
        <VisibleTodos />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-start',
  },
});

export default ToDoApp;
