//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

// create a component
class AddTodo extends Component {
  state = {
    text: '',
  };

  addTodo = text => {
    this.props.dispatch(addTodo(text));
    this.setState({text: ''});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Todo Task Here"
          style={styles.textInput}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
        />
        <TouchableOpacity
          onPress={() => {
            this.addTodo(this.state.text);
            Keyboard.dismiss();
          }}
          style={{justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', paddingLeft: 5}}> Add Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
    height: 100,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#eaeaff',
    backgroundColor: '#eaeaea',
    height: 50,
    flex: 1,
    padding: 5,
  },
});

//make this component available to the app
export default connect()(AddTodo);
