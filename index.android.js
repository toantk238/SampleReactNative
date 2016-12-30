/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton';
import NoteScreen from './App/Components/NoteScreen';

export default class ReactNotes extends Component {

  renderScene(route, navigator) {
    switch (route.name) {
      case 'home':
        return (
          <View style={styles.container}>
            <SimpleButton
              onPress={() => {
                console.log('Pressed');
                navigator.push({
                  name: 'createNote'
                });
              } }
              customText='Create Note'
              />
          </View>
        );
      case 'createNote':
        return (
          <NoteScreen />
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'home' }}
        renderScene={this.renderScene}
        />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
