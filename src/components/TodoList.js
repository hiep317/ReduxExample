//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const TodoList = ({todos, toggleTodo, showHideTodos}) => {
  return (
    <View style={styles.container}>
      {todos.map(todo => (
        <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
          <Text
            style={{
              fontSize: 24,
              textDecorationLine: todo.completed ? 'line-through' : 'none',
            }}>
            {todo.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

//make this component available to the app
export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
});
