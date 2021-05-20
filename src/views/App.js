import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LogIn from "./LoginScreen";

function App() {
  return (
    <View style={styles.container}>
      <LogIn></LogIn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default registerRootComponent(App);