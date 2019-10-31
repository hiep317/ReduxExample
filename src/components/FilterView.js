//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FilterLink from '../containers/FilterLink';
import {VisibilityFilters} from '../actions/actionTypes';

// create a component
const FilterView = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#eaeaea',
    }}>
    <Text>Filter: </Text>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </View>
);

export default FilterView;
