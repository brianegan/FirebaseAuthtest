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
  View
} from 'react-native';

import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: ''
})

class FirebaseTest extends Component {
  componentWillMount() {
    // Expect this to return a promise that will be rejected
    // due to a bad username / password combo. 

    // However, this doesn't work on my physical device (Nexus 5), 
    // Genymotion, or the stock Android Emulators
    firebaseApp.auth().signInWithEmailAndPassword('fakeEmail', 'fakePassword').then(function() {
      console.log('success', arguments)
    }).catch(function() {
      console.log('error', arguments)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('firebaseTest', () => FirebaseTest);
