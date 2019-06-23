/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View} from 'react-native';
import ShowInfo from './components/showinfo'
export default class App extends Component {
  render() {
    return (
      <View >
        <ShowInfo />
        {/* <Text>Hello world</Text> */}
      </View>
    );
  }
}
