
import React, {Component} from 'react';
import { Text, View} from 'react-native';
// import ShowInfo from './components/showinfo'
import Albums from './components/Albums'
export default class App extends Component {
  
  render() {
    return (
      <View >
        <Albums />
        {/* <Text>Hello world</Text> */}
      </View>
    );
  }
}
