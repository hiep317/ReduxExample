//import liraries
import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// create a component
const Link = ({active, children, onClick}) => (
  <TouchableOpacity
    onPress={onClick}
    disabled={active}
    style={{marginLeft: 10}}>
    <Text>{children}</Text>
  </TouchableOpacity>
);

//make this component available to the app
export default Link;
